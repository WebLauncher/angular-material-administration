import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';
import { DataAdapterService } from '../../services/data-adapter.service';
import * as i0 from "@angular/core";
export declare class UpdateComponent extends MetadataComponent {
    route: ActivatedRoute;
    private snackbar;
    private router;
    dataAdapterService: DataAdapterService;
    metadata: any;
    fields$: Observable<any[]>;
    doc$: Observable<any>;
    id$: BehaviorSubject<any>;
    entityTitle$: Observable<string>;
    constructor(route: ActivatedRoute, snackbar: SnackbarService, router: Router, dataAdapterService: DataAdapterService, metadata: any);
    save(item: any): void;
    private getDoc;
    private getFieldValue;
    static ɵfac: i0.ɵɵFactoryDef<UpdateComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UpdateComponent, "mat-administration-update", never, {}, {}, never, never>;
}
