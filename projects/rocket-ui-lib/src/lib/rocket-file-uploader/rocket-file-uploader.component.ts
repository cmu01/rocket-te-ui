import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rocket-file-uploader',
  templateUrl: './rocket-file-uploader.component.html',
  styleUrls: ['./rocket-file-uploader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RocketFileUploaderComponent implements OnInit {
  @Input() options: any = {};
  @Input() id: string;
  @Output() onUpload = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.id == null) {
      console.warn('Please set id for rocket-file-uploader');
    }
  }

  upload($event) {
    this.onUpload.emit($event);
  }

}
