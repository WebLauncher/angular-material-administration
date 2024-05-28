import {
 Injectable, Optional, Inject,
} from '@angular/core';
import {
 CanActivate, Router,
} from '@angular/router';
import {
 MAT_ADMINISTRATION_BASE_PATH, MAT_ADMINISTRATION_METADATA,
} from '../types/injection-tokens';
import { MatAdministrationMetadata } from '../types/material-administration-metadata';

@Injectable()
export class NoPathGuard implements CanActivate {
  constructor(
    private router: Router,
    @Optional() @Inject(MAT_ADMINISTRATION_METADATA) private metadata: MatAdministrationMetadata,
    @Optional() @Inject(MAT_ADMINISTRATION_BASE_PATH) private basePath: string,
  ) {}

  canActivate() {
    if (!this.metadata?.disableRedirectToFirstEntity && this.metadata?.entities) {
      return this.router.navigate([this.basePath, Object.keys(this.metadata?.entities)[0]]);
    }

    return false;
  }
}
