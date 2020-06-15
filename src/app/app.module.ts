import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MaterialAdministrationModule } from '@weblauncher/material-administration';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteMetadata } from './site-metadata';

export function firebaseAppNameFactory() {
  return 'Material Administration';
}

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, firebaseAppNameFactory, {
      authGuardFallbackURL: '/login',
      authGuardLoggedInURL: '/site'
    }),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MaterialAdministrationModule.forRoot(environment.firebase, firebaseAppNameFactory)
  ],
  providers: [
    {
      provide: 'MAT_ADMINISTRATION_METADATA',
      useValue: SiteMetadata
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
