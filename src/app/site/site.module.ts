import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { siteRoutes } from './site.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(siteRoutes)],
  exports: [RouterModule]
})
export class SiteModule {}
