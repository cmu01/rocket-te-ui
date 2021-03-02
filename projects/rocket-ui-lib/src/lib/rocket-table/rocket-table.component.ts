import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewEncapsulation, ViewChild, HostListener } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from "carbon-components-angular";

function sort(model, index: number) {
	if (model.header[index].sorted) {
		// if already sorted flip sorting direction
		model.header[index].ascending = model.header[index].descending;
	}
	model.sort(index);
}

@Component({
  selector: 'rocket-table',
  template: `
    <ibm-table-container>
      <ibm-table-toolbar-content>
        <ibm-search *ngIf='(options.showBtn || {}).search' id='rocket-table-search' size='sm' tableSearch="true" [value]='filter' autocomplete="off" (valueChange)="searchElm($event)" (clear)="clearElm()"></ibm-search>
        <button *ngIf='(options.showBtn || {}).export' id='table-export-btn' size='sm' ibmButton="secondary" title=''>
          <a class='a-table' href="{{exports()}}" download>{{options.labels.export}}</a>
          </button>

          <button *ngIf='(options.showBtn || {}).import' [id]="(id || options.id || 'rocket-table') + 'table-import-btn'" size='sm' ibmButton="secondary" (click)="import()" title=''>
            {{options.labels.import}}
          </button>
        <button *ngIf='(options.showBtn || {}).add' size='sm'  id='table-add-btn' ibmButton="primary" (click)="addElm()" title='{{options.showAddButton.addLabel}}'>
          {{options.showAddButton.addLabel}}
        </button>
      </ibm-table-toolbar-content>

      <ng-template #overflowMenuItemTemplate let-data="data">
        <ibm-overflow-menu id='table-overflow' *ngIf="options.actions.length > 1" title=''>
            <ibm-overflow-menu-option class='reletive' *ngFor="let action of options.actions" (selected)="selected(action, data)">
              <div [ngClass]="{'text-bold': action.value === 'delete'}">{{action.text}}</div>
            </ibm-overflow-menu-option>
        </ibm-overflow-menu>
        <div class="reletive underline cursor1" *ngIf="options.actions.length === 1" title='' (click)="remove(data)">
            {{options.actions[0].text}}
        </div>
      
      </ng-template>

      <div class='center' #ibmCenter>
        <ibm-table #ibmTable
          [id]="(id || 'rocket-table') + '-id'"
          [model]="table.model"
          [size]="table.size"
          [showSelectionColumn]="table.showSelectionColumn"
          [striped]="table.striped"
          (sort)="simpleSort($event)"
          (selectRow)="selectRow($event)"
          (selectAll)="onSelectAll($event)"
          (deselectAll)="onSelectAll($event)"
          [isDataGrid]="table.isDataGrid">
        </ibm-table>
        <ibm-pagination id="rocket-table-ibmPagination" *ngIf="options.showPagination"
        [itemsPerPageOptions]="options.itemsPerPageOptions || itemsPerPageOptions" [model]="table.model" (selectPage)="selectPage($event)"></ibm-pagination>
      </div>
    </ibm-table-container>
  `,
  // styleUrls: ['./rocket-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketTableComponent implements OnInit {
  @Input() options: any = {};
  @Input() data: any;
  @Input() id: string;
  @Output() selectList = new EventEmitter();
  @Output() upload = new EventEmitter();
  // @Output() export = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() resetPassword = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() search = new EventEmitter();
  @Output() clear = new EventEmitter();
  @Output() selectAction = new EventEmitter();

  @ViewChild('overflowMenuItemTemplate', {static: true})
  protected overflowMenuItemTemplate: TemplateRef<any>;
  @ViewChild('ibmTable') ibmTable: any;
  @ViewChild('ibmCenter') ibmCenter: any;
  resized$: any;
  table: {[key: string]: any} = {
    model: new TableModel(),
    size: 'md',
    showSelectionColumn: false,
    striped: true,
    sortable: true,
    isDataGrid: true
  };
  orgData = [];
  isInit = true;
  filter = '';
  PaginationTimer: any;
  actionTimer: any;
  itemsPerPageOptions: number[] = [15, 20, 30, 40, 50];

  constructor( ) {}

  ngOnChanges() {
    this.getData();
  }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-table');
    }
  }

  // ngAfterViewInit() {
  //   this.setPagination();
  // }

  //TBD: pagination should keep the same width with table
  setPagination() {
    if(!this.options.showPagination) return;

    this.PaginationTimer = setTimeout(() => {
      const parent = this.ibmCenter.nativeElement;
      const width = parent.children[0].children[0].clientWidth;
  
      if(width === 0) return;
  
      parent.children[1].children[0].style.width = width + 'px';
    }, 100);
  }

  simpleSort(index: number) {
    if(this.options.sort) {
      this.options.sort(this.table.model, index);
    } else {
      sort(this.table.model, index);
    }
  }

  selectRow(index: number) {
    // if(this.options.selectRow) {
    //   this.options.selectRow(this.table.model, index);
    // } else {
    //   // sort(this.table.model, index);
    // }

    const selcts = this.table.model.rowsSelected;
    const data = this.data.rows.filter((d,i) => selcts[i]);
    this.selectList.emit(data);
  }

  onSelectAll($event) {
    const selcts = this.table.model.rowsSelected;
    const data = this.data.rows.filter((d,i) => selcts[i]);
    this.selectList.emit(data);
  }
  
  getData(filter = null) {
    if(this.data == null) {
      this.data = {};
    }

    this.table.showSelectionColumn = this.options.showSelectionColumn;
    this.table.header = this.data.headers || [];
    const headers = this.data.headers || [];
    // this.options.header = headers;
    this.table.model.header = headers.map(d => {
      return new TableHeaderItem({ data: d.name || d.value, sort: true });
    });

    this.prepreData(filter);
  }

  prepreData(filter = null) {
    //  sort data when init
    if(this.isInit) {
     // this.options.data = this.FTPService.sort(this.table.model.header[0], this.options.header[0].name, this.options.data);
      this.isInit = false;
    }

    const headers = (this.data.headers || []).map(d => d.key);
    let data = (this.data.rows || []).map(d => {
      const t = {};
      headers.forEach(h => {
        t[h] = d[h]
      });
      return t;
    });
    const pattNum = /^\d+$/;
    if(filter != null) {
      data = data.filter(d => {
        if(this.options.fillAllData) {
          return Object.keys(d).findIndex(k => {
            return (d[k] || '').toString().toLowerCase().includes(filter.toLowerCase())}) > -1;
        } 
        return d[headers[0]].toLowerCase().includes(filter.toLowerCase());
      });
    }
    this.orgData = [];

    data.forEach(d => {
      const keys = Object.keys(d);
      const tt = [];

      keys.forEach((m, i) => {
        const item: any = {data: (m.toLowerCase() === 'size' && pattNum.test(d[m])) ? Number(d[m]).toLocaleString(undefined, 
          {maximumFractionDigits: 2}) : d[m]};

        // this.options.setCol(d, item, m, i, index);
        if(m.toLowerCase() === 'action') {
          item.data = d;
          item.template = this.overflowMenuItemTemplate;
        }

        tt.push(new TableItem(item));
      });
      this.orgData.push(tt);
    })
    
    // this.orgData = data.map((d, index) => {

    //   return Object.keys(d).map((m, i) => {
    //     const item: any = {data: (m.toLowerCase() === 'size' && pattNum.test(d[m])) ? Number(d[m]).toLocaleString(undefined, 
    //       {maximumFractionDigits: 2}) : d[m]};

    //    // this.options.setCol(d, item, m, i, index);
    //    if(m.toLowerCase() === 'action') {
    //     item.data = d;
    //     item.template = this.overflowMenuItemTemplate;
    //   }

    //     return new TableItem(item);
    //   });
    // });

    this.table.model.totalDataLength = this.options.totalDataLength || (data || []).length;
    const model = this.table.model;

    if(this.options.showPagination) {
      model.currentPage = this.options.currentPage || 1;
      model.pageLength = this.options.pageLength || 15;

      const start = model.pageLength * (model.currentPage - 1);
      const end = model.pageLength * model.currentPage;
  
      this.table.model.data = this.orgData.slice(start, end);
    } else {
      this.table.model.data = this.orgData;
    }    
  }

  getHeaders() {
    let arr = [];

    if(this.options.data.length) {
      this.options.data.forEach(d => {
        // d.Action = '';
        arr.push(...Object.keys(d));
      });
    } 

    const headers = Array.from(new Set(arr));

    return headers.map(d => {
      return {name: d, value: d}
    });
  }

  selectPage(page) {
    const start = this.table.model.pageLength * (page - 1);
    const end = this.table.model.pageLength * page;
    this.table.model.currentPage = page;
    this.table.model.data = this.orgData.slice(start, end);
  }

  selected(action, $event) {
    const key = this.options.primary;
    const data = this.data.rows.find(d => d[key] == $event[key]);

    this.actionTimer = setTimeout(() => {
      this.selectAction.emit({data, type: action.value});
    });
  }

  update() {
    this.getData();
  }

  remove($event) {
    this.selectAction.emit({data: $event, type: 'delete'});
  }

  addElm() {
    this.actionTimer = setTimeout(() => {
      this.selectAction.emit({type: 'add'});
    })
  }

  searchElm($event) {
    // this.search.emit(this.filter);
    this.filter = $event;
    this.getData(this.filter);
  }

  clearElm() {
    this.filter = '';
    this.getData(this.filter);
    // this.clear.emit(this.filter);
  }

  import() {
    this.selectAction.emit({type: 'upload'});
  }

  exports() {
    return this.options.export(this.filter);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.setPagination();
  }

  ngOnDestroy() {
    clearTimeout(this.PaginationTimer);
    clearTimeout(this.actionTimer);
  }

}