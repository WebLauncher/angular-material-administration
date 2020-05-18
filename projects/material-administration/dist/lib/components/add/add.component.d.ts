import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';
import { DataAdapterService } from '../../services/data-adapter.service';
import { Immutable } from 'types/immutable';
import * as i0 from "@angular/core";
export declare class AddComponent extends MetadataComponent {
    route: ActivatedRoute;
    private snackbar;
    private router;
    dataAdapterService: DataAdapterService;
    metadata: Immutable<any>;
    fields$: Observable<any[]>;
    constructor(route: ActivatedRoute, snackbar: SnackbarService, router: Router, dataAdapterService: DataAdapterService, metadata: Immutable<any>);
    save(item: any): void;
    static ɵfac: i0.ɵɵFactoryDef<AddComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AddComponent, "mat-administration-add", never, {}, {}, never, never>;
}
