import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class ValueFormatService {
    private datePipe;
    private metadata;
    constructor(datePipe: DatePipe, metadata: any);
    transform(value: any, type: string, options?: any): any;
    static ɵfac: i0.ɵɵFactoryDef<ValueFormatService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ValueFormatService>;
}
