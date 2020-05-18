import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ValueFormatService } from '../../services/value-format.service';
import { MetadataComponent } from '../metadata/metadata.component';
import { SnackbarService } from '../../services/snackbar.service';
import { DataAdapterService } from '../../services/data-adapter.service';
import * as i0 from "@angular/core";
export declare class ListComponent extends MetadataComponent {
    route: ActivatedRoute;
    private valueFormatService;
    private snackbar;
    dataAdapterService: DataAdapterService;
    metadata: any;
    displayedColumns$: Observable<any[]>;
    displayedColumnsNames$: Observable<string[]>;
    list$: Observable<any[]>;
    constructor(route: ActivatedRoute, valueFormatService: ValueFormatService, snackbar: SnackbarService, dataAdapterService: DataAdapterService, metadata: any);
    getValue(element: any, column: any): Observable<any>;
    delete(element: any): void;
    private getDisplayedColumns;
    private getDisplayableColumns;
    static ɵfac: i0.ɵɵFactoryDef<ListComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ListComponent, "mat-administration-list", never, {}, {}, never, never>;
}
