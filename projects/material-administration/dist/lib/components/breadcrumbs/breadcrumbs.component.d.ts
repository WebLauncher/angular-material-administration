import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatAdministrationMetadata } from '../../types';
import { DataAdapterService } from '../../services';
import * as i0 from "@angular/core";
export declare class BreadcrumbsComponent implements OnInit {
    metadata: MatAdministrationMetadata;
    dataAdapterService: DataAdapterService;
    set collectionName(value: string);
    get collectionName(): string;
    action: 'add' | 'update' | 'list';
    links$: Observable<any>;
    private collectionName$;
    constructor(metadata: MatAdministrationMetadata, dataAdapterService: DataAdapterService);
    ngOnInit(): void;
    private getLinks;
    private getItemUrl;
    private getPartUrls;
    static ɵfac: i0.ɵɵFactoryDef<BreadcrumbsComponent, [{ optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BreadcrumbsComponent, "mat-administration-breadcrumbs", never, { "collectionName": "collectionName"; "action": "action"; }, {}, never, never>;
}
