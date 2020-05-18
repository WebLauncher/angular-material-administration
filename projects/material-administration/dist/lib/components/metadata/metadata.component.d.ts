import { OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataAdapterService } from '../../services/data-adapter.service';
import { MatAdministrationEntity } from '../../types/material-administration-metadata';
import * as i0 from "@angular/core";
export declare class MetadataComponent implements OnDestroy {
    route: ActivatedRoute;
    dataAdapterService: DataAdapterService;
    metadata: any;
    metadata$: BehaviorSubject<any>;
    collectionPath$: BehaviorSubject<string>;
    collectionName$: BehaviorSubject<string>;
    subCollections$: BehaviorSubject<MatAdministrationEntity[]>;
    isLoading$: BehaviorSubject<boolean>;
    destroyed$: Subject<unknown>;
    constructor(route: ActivatedRoute, dataAdapterService: DataAdapterService, metadata: any);
    ngOnDestroy(): void;
    getFieldLabel(field: any): string;
    getFields(): Observable<any[]>;
    processUploads(item: any, metadata: any, action: 'add' | 'update'): Observable<any>;
    getWithTimestamps(item: any, action: 'add' | 'update'): any;
    getFieldMedatada(field: string): any;
    private getMetadata;
    private addAdditionalMetadata;
    private showField;
    static ɵfac: i0.ɵɵFactoryDef<MetadataComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MetadataComponent, "mat-administration-metadata", never, {}, {}, never, never>;
}
