import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, filter } from 'rxjs/operators';
import { SiteMetadata } from '../site-metadata';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  entities: any = Object.keys(SiteMetadata.entities).filter((key: any) => !SiteMetadata.entities[key]?.hideList).map(key => {
    return {
      id: key,
      ...SiteMetadata.entities[key]
    };
  });
  user$ = this.auth.user;
  userName$ = this.user$.pipe(
    map(user => user.displayName || user.email)
  );
  selectedEntity$: BehaviorSubject<string> = new BehaviorSubject('');
  @ViewChild('router', { static: false }) router: RouterOutlet;
  animation$ = new BehaviorSubject('');

  constructor(
    private auth: AngularFireAuth
  ) { }
}
