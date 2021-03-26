import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule, ButtonModule, SliderModule, SearchModule, TableModule, ProgressIndicatorModule, ToggleModule, FileUploaderModule, 
     PaginationModule, DialogModule, ModalModule, RadioModule, AccordionModule ,NumberModule,DropdownModule,SelectModule,TagModule, CheckboxModule, 
     NotificationModule, PlaceholderModule, LoadingModule, BreadcrumbModule, TabsModule
    } from 'carbon-components-angular';
import { RocketSelectComponent } from './rocket-select/rocket-select.component';
import { RocketButtonComponent } from './rocket-button/rocket-button.component';
import { RocketAccordionComponent } from './rocket-accordion/rocket-accordion.component';
import { RocketTextComponent } from './rocket-text/rocket-text.component';
import { RocketCheckboxComponent } from './rocket-checkbox/rocket-checkbox.component';
import { RocketTableComponent } from './rocket-table/rocket-table.component';
import { RocketModalComponent } from './rocket-modal/rocket-modal.component';
import { RocketNotificationComponent } from './rocket-notification/rocket-notification.component';
import { CheckmarkFilledModule, InformationModule, ViewModule, ViewOffModule, ChevronDownModule, ChevronUpModule,ChevronRightModule,
    ArrowLeftModule, ArrowRightModule, HomeModule, SettingsModule, UserFilledModule, PlayOutlineModule, ChevronLeftModule,
    DataStructuredModule, Data_1Module, CheckmarkModule, CloseModule, RadioButtonModule, CollaborateModule, UploadModule,
    DeleteModule, UnlockedModule, DownloadModule, FolderModule, FolderAddModule, AddModule, SubtractAltModule,DocumentExportModule,
    RenewModule, TerminalModule, EditModule, UndoModule, YAxisModule, CaretUpModule, CaretDownModule, SettingsAdjustModule, 
    VisualRecognitionModule, WarningFilledModule, WarningModule, DocumentModule
} from '@carbon/icons-angular';
import { RocketTooltipComponent } from './rocket-tooltip/rocket-tooltip.component';
import { RocketRadioComponent } from './rocket-radio/rocket-radio.component';
import { RocketProgressIndicatorComponent } from './rocket-progress-indicator/rocket-progress-indicator.component';
import { RocketAccordionItemComponent } from './rocket-accordion-item/rocket-accordion-item.component';
import { RocketAccordionContainerComponent } from './rocket-accordion-container/rocket-accordion-container.component';
import { RocketToggleComponent } from './rocket-toggle/rocket-toggle.component';
import { RocketTextAreaComponent } from './rocket-text-area/rocket-text-area.component';
import { RocketSearchComponent } from './rocket-search/rocket-search.component';
import { RocketIconComponent } from './rocket-icon/rocket-icon.component';
import { RocketTextDirective } from './rocket-text.directive';
import { RocketLabelDirective } from './rocket-label.directive';
import { RocketLoadingComponent } from './rocket-loading/rocket-loading.component';
import { RocketPlaceholderComponent } from './rocket-placeholder/rocket-placeholder.component';
import { RocketTabsComponent } from './rocket-tabs/rocket-tabs.component';
import { RocketTabsNavDirective } from './rocket-tabs/rocket-tabs-nav.directive';
import { RocketTabsUlDirective } from './rocket-tabs/rocket-tabs-ul.directive';
import { RocketTabsLiDirective } from './rocket-tabs/rocket-tabs-li.directive';
import { RocketTabsLinkDirective } from './rocket-tabs/rocket-tabs-link.directive';
import { RocketTabsActiveDirective } from './rocket-tabs/rocket-tabs-active.directive';

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
        RocketTextDirective,
        RocketLabelDirective,
        RocketLoadingComponent,
        RocketPlaceholderComponent,
        RocketTabsComponent,
        RocketTabsNavDirective,
        RocketTabsUlDirective,
        RocketTabsLiDirective,
        RocketTabsLinkDirective,
        RocketTabsActiveDirective
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
        ToggleModule,
        TabsModule,
        ModalModule,
        NotificationModule,
        SelectModule,
        CheckboxModule,
        CheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        InputModule,
        CheckmarkFilledModule,
        AccordionModule,
        ViewModule,
        ViewOffModule,
        ChevronUpModule,
        ChevronLeftModule,
        ChevronRightModule,
        ChevronDownModule,
        PlaceholderModule,
        InformationModule,
        ArrowLeftModule, 
        ArrowRightModule,
        HomeModule,
        SettingsModule,
        UserFilledModule,
        DataStructuredModule,
        Data_1Module,
        LoadingModule,
        CheckmarkModule,
        RadioButtonModule,
        CollaborateModule,
        PlayOutlineModule,
        CloseModule,
        BreadcrumbModule,
        UploadModule,
        DeleteModule, UnlockedModule, DownloadModule, FolderModule, FolderAddModule, AddModule, SubtractAltModule,DocumentExportModule,
        RenewModule, TerminalModule, EditModule, UndoModule, YAxisModule, CaretUpModule, CaretDownModule, SettingsAdjustModule, 
        VisualRecognitionModule, WarningFilledModule, WarningModule, DocumentModule
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
        RocketAccordionComponent,
        ProgressIndicatorModule,
        ToggleModule,
        ModalModule,
        NotificationModule,
        SelectModule,
        CheckboxModule,
        FormsModule,
        InputModule,
        CheckmarkFilledModule,
        RocketButtonComponent,
        AccordionModule,
        PlaceholderModule,
        RocketTextComponent,
        RocketCheckboxComponent,
        RocketTableComponent,
        RocketNotificationComponent,
        RocketModalComponent,
        ViewModule,
        TabsModule,
        ViewOffModule,
        ChevronDownModule,
        ChevronUpModule,
        ChevronLeftModule,
        ChevronRightModule,
        RocketTooltipComponent,
        InformationModule,
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
        ArrowLeftModule, 
        ArrowRightModule,
        HomeModule,
        SettingsModule,
        UserFilledModule,
        DataStructuredModule,
        Data_1Module,
        LoadingModule,
        RocketLoadingComponent,
        CheckmarkModule,
        RadioButtonModule,
        CollaborateModule,
        PlayOutlineModule,
        RocketPlaceholderComponent,
        CloseModule,
        BreadcrumbModule,
        UploadModule,
        RocketTabsNavDirective,
        RocketTabsUlDirective,
        RocketTabsLiDirective,
        RocketTabsLinkDirective,
        RocketTabsActiveDirective,
        DeleteModule, UnlockedModule, DownloadModule, FolderModule, FolderAddModule, AddModule, SubtractAltModule,DocumentExportModule,
        RenewModule, TerminalModule, EditModule, UndoModule, YAxisModule, CaretUpModule, CaretDownModule, SettingsAdjustModule, 
        VisualRecognitionModule, WarningFilledModule, WarningModule, DocumentModule
    ]
})
export class RocketUiLibModule {}
