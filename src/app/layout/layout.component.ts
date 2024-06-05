import {
 ChangeDetectionStrategy, Component,
 OnDestroy,
 OnInit,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import {
 BehaviorSubject, Subject,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  dataSource$ = new BehaviorSubject<string>('firebase');

  private destroyed$ = new Subject();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      console.log(document.location.href);
      this.dataSource$
        .next(document.location.href.includes('/firebase') ? 'firebase' : document.location.href.includes('/rest') ? 'rest' : '');
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  changeDataSource(event: MatButtonToggleChange) {
    this.dataSource$.next(event.value);
    this.router.navigate([event.value]);
  }
}
