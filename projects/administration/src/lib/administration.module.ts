import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseAppConfig, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormModule } from '@weblauncher/material-form';
import { HttpClientModule } from '@angular/common/http';
import {
  ListComponent,
  AddComponent,
  UpdateComponent,
  EntityComponent,
  MenuComponent,
  BreadcrumbsComponent
} from './components/index';
import { FirestoreDataAdapterService, ValueFormatService, NoPathGuard } from './services/index';
import { MAT_ADMINISTRATION_DATA_ADAPTER } from './types/injection-tokens';

const modules = [
  MatChipsModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  CdkTableModule,
  MatTableModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatButtonModule,
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
  MatListModule,
  MatFormModule
];

@NgModule({
  declarations: [ListComponent, AddComponent, UpdateComponent, EntityComponent, BreadcrumbsComponent, MenuComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ...modules],
  providers: [
    ValueFormatService,
    NoPathGuard,
    DatePipe,
    {
      provide: MAT_ADMINISTRATION_DATA_ADAPTER,
      useClass: FirestoreDataAdapterService
    },
    {
      provide: 'MAT_ADMINISTRATION_BASE_PATH',
      useValue: 'firebase'
    }
  ],
  exports: [
    RouterModule,
    ListComponent,
    AddComponent,
    UpdateComponent,
    EntityComponent,
    MenuComponent,
    BreadcrumbsComponent,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ...modules
  ]
})
export class MaterialAdministrationModule {
  static forRoot(
    configFactory: FirebaseAppConfig,
    appNameFactory: () => string | undefined = () => undefined
  ): ModuleWithProviders<MaterialAdministrationModule> {
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
