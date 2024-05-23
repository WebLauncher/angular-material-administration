import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MAT_ADMINISTRATION_DATA_ADAPTER,
  MAT_ADMINISTRATION_BASE_PATH,
  FirestoreDataAdapterService,
  MaterialAdministrationModule,
} from '@weblauncher/material-administration';
import { environment } from 'src/environments/environment';
import { firebaseRoutes } from './firebase.routes';

export function firebaseAppNameFactory() {
  return 'Material Administration';
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(firebaseRoutes),
    MaterialAdministrationModule.forRoot(environment.firebase, firebaseAppNameFactory),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: MAT_ADMINISTRATION_DATA_ADAPTER,
      useClass: FirestoreDataAdapterService,
    },
    {
      provide: MAT_ADMINISTRATION_BASE_PATH,
      useValue: '/firebase',
    },
  ],
})
export class FirebaseModule {}
