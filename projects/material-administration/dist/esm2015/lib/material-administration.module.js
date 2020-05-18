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
export class MaterialAdministrationModule {
    static forRoot(configFactory, appNameFactory = () => undefined) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24vIiwic291cmNlcyI6WyJsaWIvbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0Qs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O29CQUNsQixhQUFhO29CQUNiLHNCQUFzQjtvQkFDdEIsd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixhQUFhO2lCQUNkO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxrQkFBa0I7b0JBQ2xCLFFBQVE7aUJBQ1Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixhQUFhO29CQUNiLG9CQUFvQjtvQkFDcEIsWUFBWTtvQkFDWix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsd0JBQXdCO2lCQUN6QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xyXG5pbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50LCBBZGRDb21wb25lbnQsIFVwZGF0ZUNvbXBvbmVudCwgTWV0YWRhdGFDb21wb25lbnQsIEZvcm1Db21wb25lbnQsIE1lbnVDb21wb25lbnQsIEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgVmFsdWVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWx1ZS1mb3JtYXQuc2VydmljZSc7XHJcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRGaWxlSW5wdXRNb2R1bGUgfSBmcm9tICdAd2VibGF1bmNoZXIvbWF0ZXJpYWwtZmlsZS1pbnB1dCc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvc3RvcmFnZSc7XHJcbmltcG9ydCB7IEZpcmViYXNlQXBwQ29uZmlnLCBGSVJFQkFTRV9PUFRJT05TLCBGSVJFQkFTRV9BUFBfTkFNRSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUnO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMaXN0Q29tcG9uZW50LFxyXG4gICAgQWRkQ29tcG9uZW50LFxyXG4gICAgVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgTWV0YWRhdGFDb21wb25lbnQsXHJcbiAgICBGb3JtQ29tcG9uZW50LFxyXG4gICAgQnJlYWRjcnVtYnNDb21wb25lbnQsXHJcbiAgICBNZW51Q29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICAgIENka1RhYmxlTW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRGaWxlSW5wdXRNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBDS0VkaXRvck1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFNvcnRNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxyXG4gICAgTWF0TGlzdE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBWYWx1ZUZvcm1hdFNlcnZpY2UsXHJcbiAgICBEYXRlUGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTGlzdENvbXBvbmVudCxcclxuICAgIEFkZENvbXBvbmVudCxcclxuICAgIFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIE1ldGFkYXRhQ29tcG9uZW50LFxyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICBCcmVhZGNydW1ic0NvbXBvbmVudCxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQWRtaW5pc3RyYXRpb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KFxyXG4gICAgY29uZmlnRmFjdG9yeTogRmlyZWJhc2VBcHBDb25maWcsXHJcbiAgICBhcHBOYW1lRmFjdG9yeTogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gKCkgPT4gdW5kZWZpbmVkLFxyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1hdGVyaWFsQWRtaW5pc3RyYXRpb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczpcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEZJUkVCQVNFX09QVElPTlMsXHJcbiAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdGYWN0b3J5XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBGSVJFQkFTRV9BUFBfTkFNRSxcclxuICAgICAgICAgICAgdXNlRmFjdG9yeTogYXBwTmFtZUZhY3RvcnlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBWYWx1ZUZvcm1hdFNlcnZpY2VcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=