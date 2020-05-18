import { Injectable, Optional, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ValueFormatService {
    constructor(datePipe, metadata) {
        this.datePipe = datePipe;
        this.metadata = metadata;
    }
    transform(value, type, options = null) {
        var _a;
        switch (type) {
            case 'timestamp':
                return this.datePipe.transform(value === null || value === void 0 ? void 0 : value.toDate(), (options === null || options === void 0 ? void 0 : options.format) || ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.timestampFormat), options.timezone, options === null || options === void 0 ? void 0 : options.locale);
            default:
                return value;
        }
    }
}
ValueFormatService.ɵfac = function ValueFormatService_Factory(t) { return new (t || ValueFormatService)(i0.ɵɵinject(i1.DatePipe), i0.ɵɵinject('MAT_ADMINISTRATION_METADATA', 8)); };
ValueFormatService.ɵprov = i0.ɵɵdefineInjectable({ token: ValueFormatService, factory: ValueFormatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ValueFormatService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DatePipe }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtZm9ybWF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy92YWx1ZS1mb3JtYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU03RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQ1UsUUFBa0IsRUFDaUMsUUFBYTtRQURoRSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2lDLGFBQVEsR0FBUixRQUFRLENBQUs7SUFDdEUsQ0FBQztJQUVMLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBWSxFQUFFLE9BQU8sR0FBRyxJQUFJOztRQUNoRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUM1QixLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxJQUNiLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sWUFBSSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxlQUFlLENBQUEsRUFDakQsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sQ0FDaEIsQ0FBQztZQUNKO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7b0ZBbEJVLGtCQUFrQix3Q0FHUCw2QkFBNkI7MERBSHhDLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmpCLE1BQU07a0RBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBSUksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZhbHVlRm9ybWF0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ01BVF9BRE1JTklTVFJBVElPTl9NRVRBREFUQScpIHByaXZhdGUgbWV0YWRhdGE6IGFueVxuICApIHsgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCB0eXBlOiBzdHJpbmcsIG9wdGlvbnMgPSBudWxsKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0aW1lc3RhbXAnOlxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oXG4gICAgICAgICAgdmFsdWU/LnRvRGF0ZSgpLFxuICAgICAgICAgIG9wdGlvbnM/LmZvcm1hdCB8fCB0aGlzLm1ldGFkYXRhPy50aW1lc3RhbXBGb3JtYXQsXG4gICAgICAgICAgb3B0aW9ucy50aW1lem9uZSxcbiAgICAgICAgICBvcHRpb25zPy5sb2NhbGVcbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==