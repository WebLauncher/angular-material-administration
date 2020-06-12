import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialAdministrationModule } from '@weblauncher/material-administration';
import { AngularFireStorageModule } from '@angular/fire/storage';
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, firebaseAppNameFactory, {
      authGuardFallbackURL: '/login',
      authGuardLoggedInURL: '/site'
    }),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
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
