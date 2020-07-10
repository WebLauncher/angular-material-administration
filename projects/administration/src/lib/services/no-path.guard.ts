import { Injectable, Optional, Inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatAdministrationMetadata } from '../types/material-administration-metadata';

@Injectable()
export class NoPathGuard implements CanActivate {
  constructor(
    private router: Router,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') public metadata: MatAdministrationMetadata
  ) { }

  canActivate() {
    if (!this.metadata?.disableRedirectToFirstEntity) {
      return this.router.navigate([Object.keys(this.metadata.entities)[0]]);
    }

    return false;
  }
}
