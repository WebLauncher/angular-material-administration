import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MAT_ADMINISTRATION_DATA_ADAPTER,
  HttpDataAdapterService,
  MaterialAdministrationModule,
} from '@weblauncher/material-administration';
import { siteRoutes } from './rest.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(siteRoutes), MaterialAdministrationModule],
  exports: [RouterModule],
  providers: [
    {
      provide: MAT_ADMINISTRATION_DATA_ADAPTER,
      useClass: HttpDataAdapterService,
    },
    {
      provide: 'MAT_ADMINISTRATION_BASE_PATH',
      useValue: '/rest',
    },
  ],
})
export class RestModule {}
