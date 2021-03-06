import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule, ButtonModule, SliderModule, SearchModule, TableModule, ProgressIndicatorModule, ToggleModule, FileUploaderModule, 
     PaginationModule, DialogModule, ModalModule, RadioModule, AccordionModule ,NumberModule,DropdownModule,SelectModule,TagModule, CheckboxModule, 
     NotificationModule, PlaceholderModule, LoadingModule, BreadcrumbModule, TabsModule, CodeSnippetModule, ContentSwitcherModule
    } from 'carbon-components-angular';
import { RocketSelectComponent } from './rocket-select/rocket-select.component';
import { RocketButtonComponent } from './rocket-button/rocket-button.component';
import { RocketAccordionComponent } from './rocket-accordion/rocket-accordion.component';
import { RocketTextComponent } from './rocket-text/rocket-text.component';
import { RocketCheckboxComponent } from './rocket-checkbox/rocket-checkbox.component';
import { RocketTableComponent } from './rocket-table/rocket-table.component';
import { RocketModalComponent } from './rocket-modal/rocket-modal.component';
import { RocketNotificationComponent } from './rocket-notification/rocket-notification.component';

import { RocketTooltipComponent } from './rocket-tooltip/rocket-tooltip.component';
import { RocketRadioComponent } from './rocket-radio/rocket-radio.component';
import { RocketProgressIndicatorComponent } from './rocket-progress-indicator/rocket-progress-indicator.component';
import { RocketAccordionItemComponent } from './rocket-accordion-item/rocket-accordion-item.component';
import { RocketAccordionContainerComponent } from './rocket-accordion-container/rocket-accordion-container.component';
import { RocketToggleComponent } from './rocket-toggle/rocket-toggle.component';
import { RocketTextAreaComponent } from './rocket-text-area/rocket-text-area.component';
import { RocketSearchComponent } from './rocket-search/rocket-search.component';
import { RocketIconComponent } from './rocket-icon/rocket-icon.component';
import { RocketCodeSnipetComponent } from './rocket-code-snipet/rocket-code-snipet.component';
import { RocketFileUploaderComponent } from './rocket-file-uploader/rocket-file-uploader.component';
import { RocketTextDirective } from './rocket-text.directive';
import { RocketLabelDirective } from './rocket-label.directive';
import { RocketLoadingComponent } from './rocket-loading/rocket-loading.component';
import { RocketOverflowComponent } from './rocket-overflow/rocket-overflow.component';
import { RocketPlaceholderComponent } from './rocket-placeholder/rocket-placeholder.component';
import { RocketTabsComponent } from './rocket-tabs/rocket-tabs.component';
import { RocketTagComponent } from './rocket-tag/rocket-tag.component';
import { RocketTreeComponent } from './rocket-tree/rocket-tree.component';
import { RocketTabsNavDirective } from './rocket-tabs/rocket-tabs-nav.directive';
import { RocketTabsUlDirective } from './rocket-tabs/rocket-tabs-ul.directive';
import { RocketTabsLiDirective } from './rocket-tabs/rocket-tabs-li.directive';
import { RocketTabsLinkDirective } from './rocket-tabs/rocket-tabs-link.directive';
import { RocketTabsActiveDirective } from './rocket-tabs/rocket-tabs-active.directive';
import { RocketContentSwitcherComponent } from './rocket-content-switcher/rocket-content-switcher.component';

@NgModule({
    declarations: [
        RocketSelectComponent,
        RocketButtonComponent,
        RocketAccordionComponent,
        RocketTextComponent,
        RocketCheckboxComponent,
        RocketTableComponent,
        RocketModalComponent,
        RocketNotificationComponent,
        RocketTooltipComponent,
        RocketRadioComponent,
        RocketProgressIndicatorComponent,
        RocketAccordionItemComponent,
        RocketAccordionContainerComponent,
        RocketToggleComponent,
        RocketTextAreaComponent,
        RocketSearchComponent,
        RocketIconComponent,
        RocketOverflowComponent,
        RocketTextDirective,
        RocketLabelDirective,
        RocketLoadingComponent,
        RocketPlaceholderComponent,
        RocketTabsComponent,
        RocketFileUploaderComponent,
        RocketTabsNavDirective,
        RocketTabsUlDirective,
        RocketTabsLiDirective,
        RocketTabsLinkDirective,
        RocketTabsActiveDirective,
        RocketCodeSnipetComponent,
        RocketTreeComponent,
        RocketTagComponent,
        RocketContentSwitcherComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        SearchModule,
        ProgressIndicatorModule,
        SliderModule,
        TableModule,
        FileUploaderModule,
        PaginationModule,
        DialogModule,
        RadioModule,
        DropdownModule,
        CodeSnippetModule,
        ToggleModule,
        TabsModule,
        ModalModule,
        NotificationModule,
        TagModule,
        SelectModule,
        CheckboxModule,
        CheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        InputModule,
        AccordionModule,
        PlaceholderModule,
        LoadingModule,
       
        BreadcrumbModule,
        ContentSwitcherModule
    ],
    exports: [
        RocketSelectComponent,
        RocketTabsComponent,
        SliderModule,
        TableModule,
        FileUploaderModule,
        PaginationModule,
        DialogModule,
        RadioModule,
        DropdownModule,
        ButtonModule,
        SearchModule,
        TagModule,
        RocketContentSwitcherComponent,
        RocketAccordionComponent,
        ProgressIndicatorModule,
        CodeSnippetModule,
        ToggleModule,
        ModalModule,
        NotificationModule,
        SelectModule,
        CheckboxModule,
        FormsModule,
        InputModule,
        RocketButtonComponent,
        RocketOverflowComponent,
        AccordionModule,
        PlaceholderModule,
        RocketTextComponent,
        RocketCheckboxComponent,
        RocketTableComponent,
        RocketNotificationComponent,
        RocketModalComponent,
        RocketTagComponent,
        TabsModule,
        RocketTooltipComponent,
        RocketTreeComponent,
        RocketRadioComponent,
        RocketProgressIndicatorComponent,
        RocketAccordionItemComponent,
        RocketAccordionContainerComponent,
        RocketToggleComponent,
        RocketTextAreaComponent,
        RocketSearchComponent,
        RocketIconComponent,
        RocketTextDirective,
        RocketLabelDirective,
        LoadingModule,
        RocketFileUploaderComponent,
        RocketLoadingComponent,
       
        RocketPlaceholderComponent,
        RocketCodeSnipetComponent,
        BreadcrumbModule,
        RocketTabsNavDirective,
        RocketTabsUlDirective,
        RocketTabsLiDirective,
        RocketTabsLinkDirective,
        RocketTabsActiveDirective, ContentSwitcherModule
    ]
})
export class RocketUiLibModule {}