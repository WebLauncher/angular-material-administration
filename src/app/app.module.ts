import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_ADMINISTRATION_METADATA } from 'projects/administration/src';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteMetadata } from './site-metadata';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: MAT_ADMINISTRATION_METADATA,
      useValue: SiteMetadata,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
