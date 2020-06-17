import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SiteMetadata } from '../site-metadata';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  entities: any = Object.keys(SiteMetadata.entities)
    .filter((key: any) => !SiteMetadata.entities[key]?.hideList)
    .map((key) => {
      return {
        id: key,
        ...SiteMetadata.entities[key]
      };
    });

  user$ = this.auth.user;

  userName$ = this.user$.pipe(map((user) => user.displayName || user.email));

  selectedEntity$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private auth: AngularFireAuth, private router: Router) {}

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['']);
  }
}
