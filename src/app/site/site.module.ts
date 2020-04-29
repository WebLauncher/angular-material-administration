import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { siteRoutes } from './site.routes';
import { MaterialAdministrationModule } from 'projects/material-administration/src';
import { SiteMetadata } from '../site-metadata';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(siteRoutes),
    MaterialAdministrationModule
  ],
  providers: [
    {
      provide: 'MAT_ADMINISTRATION_METADATA',
      useValue: SiteMetadata
    }
  ],
  exports: [
    RouterModule
  ]
})
export class SiteModule { }
