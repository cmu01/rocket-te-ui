# RocketUiLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Code scaffolding

Run `ng generate component component-name --project rocket-ui-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project rocket-ui-lib`.
> Note: Don't forget to add `--project rocket-ui-lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build rocket-ui-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build rocket-ui-lib`, go to the dist folder `cd dist/rocket-ui-lib` and run `npm publish`.

## Running unit tests

Run `ng test rocket-ui-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## styles

need use `styles.css` for component.

## Components

## 1. rocket-tooltip
  <rocket-tooltip [options]="tooltip"></rocket-tooltip>
  `normal mode`:
  `options`: 
    {placement, alignment, content, template, trigger}
  `placement`: 
    "bottom", "top"
  `alignment`: 
    "start", "center", "end"

  `template Mode`
  `template`: 
     `show costomer defined ng-template in tooltip`
  `trigger`: 
    'click', 'hover'
  `placement`: 
    "bottom", "top"

## 2. rocket-select
<rocket-select id='select' [options]="{data: data, label: 'label'" 
    [tooltip] ="{show, content, template}"
    [selected]="selectNode" (onChange)="change($event)">
</rocket-select>
   `options`: 
   {
      size<string>: sm, md, xl,
      marked<boolean>, // required or not
      label<string>, 
      display<string>, // 'inline', 'default'
      selected<string>, // secondary way to bind ngModel
      data<array>: [{
         value, text/label
      }] 
      group mode:
      isGroup<boolean>: true, 
      data<array>: [{
         text,
         children<array>: [{text, value}] 
      }] 
   }
   `id`<string>
   `selected`: 
     primary way to bind ngModel
    `tooltip`: 
     view rocket-tooltip
    `onChange(e)`: 
     emit e
    `how to set selected in parent component`:
     change($event) {
        this.selectNode = $event.target.value;
     }


## 3. rocket-text
<rocket-text id='1' [options]="options" [tooltip]="tooltips" (onChange) = 'onChange($event)'> 
</rocket-text>
   `options`: 
   {
      label<string>, 
      marked<boolean>, // required or not
      placeholder<string>, 
      disabled<bloolean>, 
      isInvalid<bloolean>, 
      validationText<string>, 
      data<string>
   }
   `tooltip`:  {
      show,  
      content
   }
    `id`<string>
    `onChange()`: 
     emit $event

## 4. rocket-text-area
   <rocket-text-area id='2' [options]="options" [tooltip]="tooltips" (onChange) = 'update($event)'> 
   </rocket-text-area>
   `options`: 
   {
      label<string>, 
      marked<boolean>, // required or not
      placeholder<string>, 
      disabled<bloolean>, 
      isInvalid<bloolean>, 
      validationText<string>, 
      data<string>, //ngModel
      rows<number>,
      cols<number>
   }
   `tooltip`:  {
      show,  
      content
   }
   `id`<string>
    `change()`: 
     emit $event

## 5. rocket-table
   <rocket-table id='table' [data]="data" [options]="options" (selectList)="handleSelectList($event)" (selectAction)="selectAction($event)"  #table>
   </rocket-table>
    `options`: 
    {
      showPagination<boolean>, 
      showBtn: {add<boolean>, import<boolean>, export<boolean>, search<boolean>}, 
      showSelectionColumn<boolean>,
      pageLength<number>: default 15，
      itemsPerPageOptions<number[]>: default [15, 20, 30, 40, 50],
      totalDataLength,
      currentPage
    }
    `id`<string>
    `data`: 
     {headers, rows}
    `selectAction()`: 
     emit {data, type} //select event in overflow and button // edit, reset-pwd, delete, add, upload ...
    `selectList()`:
     select row by checkbox of each row.

## 6. rocket-radio
   <rocket-radio
          id='radio'
          [options]="{data, lable, disabled, orientation, selectedIndex}"
          [tooltip] ="{show, content, template}"
          (onSelect)="select($event)" #radio>
   </rocket-radio>
   
   `options`: 
   {
      data<array>: [{value, label/text}], 
      label<string>,
      marked<boolean>, // required or not
      disabled<boolean>,
      orientation: 'vertical', 'horizontal',
      selectedIndex: For ngModel, selected index which is used for compatible with carbon 9
     }
    `id`<string>
    `onSelect`: 
     select event, emit select item in data.
    `tooltip`: 
     view rocket-tooltip
    `update check status`: 
     this.radio.update(newData) ;

## 7. rocket-notificate
   <rocket-notificate [options]="options" id='notification' (close)="close()"></rocket-notificate>
    `options`: 
   {
     type<string> error, success, warning, info, 
     title<string>, 
     message<string>, 
     showClose<boolean>
   }
    `id`<string>
    `close`(): 
     emit close event.

## 8. rocket-modal
   <rocket-modal id='modal' [options]="options" (submit)="submit($event)" (close)="close($event)">
     <div>Template which will show in modal center</div>
   </rocket-modal> 
   
   `options`: 
    {
      show, 
      modalType: {'default', 'danger'}
      header, 
      title, 
      waitCallback, //show result in dialog, such as: ldap test
      keepOpen, // keep open if click other place, such as: reset password
      hideFooter, 
      hideClose,
      confirmBtnOpts: {text, disabled}, 
      cancelBtnOpts: {kind, text, hide},
      size: 'xl' // administrator multi select
    }
   `id`<string>
   `submit()` submit event
   `close()` submit event

## 9. rocket-checkbox 
   <rocket-checkbox  id='checkbox' [options]="{disabled: disabled, checked: enableKeepAlive}" (onChange)="triggerKeepAlive($event)" [tooltip] ="{show, content, template}">
        {{"sessions.keepAlive.enableKeepAlive" | translate}} 
    </rocket-checkbox>

    `options`: 
   {   
      disabled<boolean>,
      checked<boolean>: true/false,
      label<string>: secondary way for text
   }
    `onChange()`: 
     selected event
   ` {{label}}`: 
     primary way for text
    `tooltip`: 
     view rocket-tooltip
    `id`<string>

## 10. rocket-button
   <rocket-button id='btn' [options]='options' (onClick)='click()'>
     <customized content show text or icon>
   </rocket-button>
    `opions` 
   { 
      kind<string>: "primary", "secondary", "tertiary", "ghost", "danger", "danger--primary", 
      size<string>: "normal", "sm", "field", 
      disabled<boolean>, 
      text<string>
   }
    `id`<string>
    `onClick()`: 
     emit click event

## 11. rocket-progress-indicator
   <rocket-progress-indicator id='progress'
      [options]="{steps: steps, current: current}">
   </rocket-progress-indicator>
    `opions` 
   {
      steps<array>: [
      {
         text, 
         state<array>: ['current', 'complete', 'incomplete', 'error]
      }], 
      current<number>
   }
    `id`<string>

   
## 12. rocket-accordion   
   <rocket-accordion [options]="{title}" [expanded]='expanded'>
        <customized content>
   </rocket-accordion>

   `options`: 
  {
      title<string>
   }
  `expanded`<boolean>
  `id`<string>

## 13. rocket-accordion-item   
   <rocket-accordion-container>
         <ng-container *ngFor="let series of seriesTypes, let i = index">
            <rocket-accordion-item [options]="{title, expanded}">
               <ng-container *ngTemplateOutlet="titleWithContext; context:{series: series}">
               </ng-container>
            </rocket-accordion-item>
         </ng-container>
   </rocket-accordion-container>

   <rocket-accordion-container>
    <ng-container *ngFor="let series of seriesTypes, let i = index">
      <rocket-accordion-item [options]="{title: series.value, expanded: true}">
        <div class='session-body-item' *ngFor='let session of filterSessions(curSessions, series.key);'>
          <user-card [data]='session' [options] = 'options' (selected)="selected($event)"></user-card>
        </div>
      </rocket-accordion-item>
    </ng-container>
  </rocket-accordion-container>
   
   `options`: {title<string>, expanded<boolean>}
   `id`<string>

 ## 14. rocket-toggle   
   <rocket-toggle [options]="contextMenuOption" [tooltip]="{show, content}" (onChange)="change($event)">
   </rocket-toggle>
    `options`: 
   {
      disabled<boolean>, 
      enable<boolean>, 
      size<string>: {"md", "sm"}, 
      label<string>
     }
    `tooltip`
    `onChange()`: 
     emit array
    `id`<string>

 ## 14. rocket-search  
   <rocket-search [options]='options' (onChange)="change($event)" (clear)="clear()"></rocket-search>
    
   `options`: {
      placeholder, 
      size<string>:  ["sm", "md", "xl"]
      label
     }
    `onChange()`: 
     emit change event
    `clear()`: 
     emit clear event
    `id`<string>

# 15. rocket-icon   
   <rocket-icon type='arrow-left' options="{size, color, isCenter, stroke, strokeWidth, isImg, src, width, height}"></rocket-icon>

   `type`<string>: 
      'view'
      'view-off'
      'information'
      'checkmark-filled'
      'chevron-up'
      'chevron-down'
      'chevron-left'
      'chevron-right'
      'arrow-left'
      'arrow-right'
      'home'
      'settings'
      'user'
      'data-structured'<'session'>,
      'data-1'<'group'>
      'checkmark'
      'radio-button'
      'collaborate'<'login'>
      'play-outline'
      'close'
      'upload'
      'delete'
      'unlocked'
      'download'
      'folder'
      'folder-add'
      'add'
      'subtract-alt'
      'document-export'
      'renew'
      'terminal'
      'edit'
      'undo'
      'y-axis'
      'caret-up'
      'caret-down'
      'settings-adjust'
      'visual-recognition
      'warning-filled'
      'warning'
      'document'
      'copy-link'

   `options`
   {
      size<number>: 16, 20, 14, 32
      color<string>,
      color, stroke, strokeWidth,
      isCenter: for 16 size vertical
      isImg: use other type as icon not svg
      src, width, height
   }

## 16. rocket-loading
  <rocket-loading></rocket-loading>  

## id rule: component-feature-type  
   group-session-btn
   group-privilege-select 

   console.warn(if id is null)

   
