import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';
import { SiteMetadata } from '../site-metadata';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation]
})
export class LayoutComponent implements OnInit {
  entities: any = Object.values(SiteMetadata.entities);
  user$ = this.auth.user;
  userName$ = this.user$.pipe(
    map(user => user.displayName || user.email)
  );
  selectedEntity$: BehaviorSubject<string> = new BehaviorSubject('');
  @ViewChild('router', { static: false }) router: RouterOutlet;

  constructor(
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  getAnimationData(outlet: RouterOutlet) {
    if (outlet?.isActivated) {
      outlet.activatedRoute.params.pipe(
        take(1),
        map(params => params?.collection)
      ).subscribe(this.selectedEntity$);
    }

    return outlet?.activatedRouteData?.animation;
  }
}
