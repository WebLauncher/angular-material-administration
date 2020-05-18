import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { ListComponent, AddComponent, UpdateComponent, MetadataComponent, FormComponent, MenuComponent, BreadcrumbsComponent } from './components/index';
import { ValueFormatService } from './services/value-format.service';
import { CdkTableModule } from '@angular/cdk/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFileInputModule } from '@weblauncher/material-file-input';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i0 from "@angular/core";
var MaterialAdministrationModule = /** @class */ (function () {
    function MaterialAdministrationModule() {
    }
    MaterialAdministrationModule.forRoot = function (configFactory, appNameFactory) {
        if (appNameFactory === void 0) { appNameFactory = function () { return undefined; }; }
        return {
            ngModule: MaterialAdministrationModule,
            providers: [
                {
                    provide: FIREBASE_OPTIONS,
                    useValue: configFactory
                },
                {
                    provide: FIREBASE_APP_NAME,
                    useFactory: appNameFactory
                },
                ValueFormatService
            ]
        };
    };
    MaterialAdministrationModule.ɵmod = i0.ɵɵdefineNgModule({ type: MaterialAdministrationModule });
    MaterialAdministrationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MaterialAdministrationModule_Factory(t) { return new (t || MaterialAdministrationModule)(); }, providers: [
            ValueFormatService,
            DatePipe
        ], imports: [[
                CommonModule,
                MatChipsModule,
                MatCardModule,
                MatIconModule,
                MatToolbarModule,
                RouterModule,
                MatProgressSpinnerModule,
                CdkTableModule,
                MatTableModule,
                FormsModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatFileInputModule,
                MatButtonModule,
                CKEditorModule,
                MatInputModule,
                MatSelectModule,
                MatRadioModule,
                MatCheckboxModule,
                MatSlideToggleModule,
                MatDatepickerModule,
                MatSnackBarModule,
                MatNativeDateModule,
                MatPaginatorModule,
                MatSortModule,
                AngularFirestoreModule,
                AngularFireStorageModule,
                FlexLayoutModule,
                MatMenuModule,
                MatSidenavModule,
                MatListModule
            ],
            RouterModule,
            BrowserAnimationsModule,
            AngularFirestoreModule,
            AngularFireStorageModule] });
    return MaterialAdministrationModule;
}());
export { MaterialAdministrationModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MaterialAdministrationModule, { declarations: [ListComponent,
        AddComponent,
        UpdateComponent,
        MetadataComponent,
        FormComponent,
        BreadcrumbsComponent,
        MenuComponent], imports: [CommonModule,
        MatChipsModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        RouterModule,
        MatProgressSpinnerModule,
        CdkTableModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatFileInputModule,
        MatButtonModule,
        CKEditorModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSortModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        FlexLayoutModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule], exports: [ListComponent,
        AddComponent,
        UpdateComponent,
        MetadataComponent,
        FormComponent,
        MenuComponent,
        BreadcrumbsComponent,
        RouterModule,
        BrowserAnimationsModule,
        AngularFirestoreModule,
        AngularFireStorageModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MaterialAdministrationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ListComponent,
                    AddComponent,
                    UpdateComponent,
                    MetadataComponent,
                    FormComponent,
                    BreadcrumbsComponent,
                    MenuComponent
                ],
                imports: [
                    CommonModule,
                    MatChipsModule,
                    MatCardModule,
                    MatIconModule,
                    MatToolbarModule,
                    RouterModule,
                    MatProgressSpinnerModule,
                    CdkTableModule,
                    MatTableModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatFileInputModule,
                    MatButtonModule,
                    CKEditorModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    MatCheckboxModule,
                    MatSlideToggleModule,
                    MatDatepickerModule,
                    MatSnackBarModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatSortModule,
                    AngularFirestoreModule,
                    AngularFireStorageModule,
                    FlexLayoutModule,
                    MatMenuModule,
                    MatSidenavModule,
                    MatListModule
                ],
                providers: [
                    ValueFormatService,
                    DatePipe
                ],
                exports: [
                    ListComponent,
                    AddComponent,
                    UpdateComponent,
                    MetadataComponent,
                    FormComponent,
                    MenuComponent,
                    BreadcrumbsComponent,
                    RouterModule,
                    BrowserAnimationsModule,
                    AngularFirestoreModule,
                    AngularFireStorageModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24vIiwic291cmNlcyI6WyJsaWIvbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0Qs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b0JBQ2QsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO29CQUNsQixRQUFRO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLFlBQVk7b0JBQ1osdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCwgQWRkQ29tcG9uZW50LCBVcGRhdGVDb21wb25lbnQsIE1ldGFkYXRhQ29tcG9uZW50LCBGb3JtQ29tcG9uZW50LCBNZW51Q29tcG9uZW50LCBCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7IFZhbHVlRm9ybWF0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsdWUtZm9ybWF0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0RmlsZUlucHV0TW9kdWxlIH0gZnJvbSAnQHdlYmxhdW5jaGVyL21hdGVyaWFsLWZpbGUtaW5wdXQnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUFwcENvbmZpZywgRklSRUJBU0VfT1BUSU9OUywgRklSRUJBU0VfQVBQX05BTUUgfSBmcm9tICdAYW5ndWxhci9maXJlJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTGlzdENvbXBvbmVudCxcclxuICAgIEFkZENvbXBvbmVudCxcclxuICAgIFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIE1ldGFkYXRhQ29tcG9uZW50LFxyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIEJyZWFkY3J1bWJzQ29tcG9uZW50LFxyXG4gICAgTWVudUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBDZGtUYWJsZU1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0RmlsZUlucHV0TW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgQ0tFZGl0b3JNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgIE1hdExpc3RNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgVmFsdWVGb3JtYXRTZXJ2aWNlLFxyXG4gICAgRGF0ZVBpcGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIExpc3RDb21wb25lbnQsXHJcbiAgICBBZGRDb21wb25lbnQsXHJcbiAgICBVcGRhdGVDb21wb25lbnQsXHJcbiAgICBNZXRhZGF0YUNvbXBvbmVudCxcclxuICAgIEZvcm1Db21wb25lbnQsXHJcbiAgICBNZW51Q29tcG9uZW50LFxyXG4gICAgQnJlYWRjcnVtYnNDb21wb25lbnQsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEFkbWluaXN0cmF0aW9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChcclxuICAgIGNvbmZpZ0ZhY3Rvcnk6IEZpcmViYXNlQXBwQ29uZmlnLFxyXG4gICAgYXBwTmFtZUZhY3Rvcnk6ICgpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9ICgpID0+IHVuZGVmaW5lZCxcclxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBNYXRlcmlhbEFkbWluaXN0cmF0aW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBGSVJFQkFTRV9PUFRJT05TLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnRmFjdG9yeVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogRklSRUJBU0VfQVBQX05BTUUsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGFwcE5hbWVGYWN0b3J5XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgVmFsdWVGb3JtYXRTZXJ2aWNlXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19