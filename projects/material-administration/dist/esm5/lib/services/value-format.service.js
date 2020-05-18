import { Injectable, Optional, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var ValueFormatService = /** @class */ (function () {
    function ValueFormatService(datePipe, metadata) {
        this.datePipe = datePipe;
        this.metadata = metadata;
    }
    ValueFormatService.prototype.transform = function (value, type, options) {
        if (options === void 0) { options = null; }
        var _a;
        switch (type) {
            case 'timestamp':
                return this.datePipe.transform(value === null || value === void 0 ? void 0 : value.toDate(), (options === null || options === void 0 ? void 0 : options.format) || ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.timestampFormat), options.timezone, options === null || options === void 0 ? void 0 : options.locale);
            default:
                return value;
        }
    };
    ValueFormatService.ɵfac = function ValueFormatService_Factory(t) { return new (t || ValueFormatService)(i0.ɵɵinject(i1.DatePipe), i0.ɵɵinject('MAT_ADMINISTRATION_METADATA', 8)); };
    ValueFormatService.ɵprov = i0.ɵɵdefineInjectable({ token: ValueFormatService, factory: ValueFormatService.ɵfac, providedIn: 'root' });
    return ValueFormatService;
}());
export { ValueFormatService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtZm9ybWF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy92YWx1ZS1mb3JtYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUc3RDtJQUlFLDRCQUNVLFFBQWtCLEVBQ2lDLFFBQWE7UUFEaEUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNpQyxhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQ3RFLENBQUM7SUFFTCxzQ0FBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVksRUFBRSxPQUFjO1FBQWQsd0JBQUEsRUFBQSxjQUFjOztRQUNoRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUM1QixLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxJQUNiLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sWUFBSSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxlQUFlLENBQUEsRUFDakQsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sQ0FDaEIsQ0FBQztZQUNKO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzt3RkFsQlUsa0JBQWtCLHdDQUdQLDZCQUE2Qjs4REFIeEMsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTs2QkFKcEI7Q0F5QkMsQUF0QkQsSUFzQkM7U0FuQlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFJSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmFsdWVGb3JtYXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdCgnTUFUX0FETUlOSVNUUkFUSU9OX01FVEFEQVRBJykgcHJpdmF0ZSBtZXRhZGF0YTogYW55XG4gICkgeyB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIHR5cGU6IHN0cmluZywgb3B0aW9ucyA9IG51bGwpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpbWVzdGFtcCc6XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShcbiAgICAgICAgICB2YWx1ZT8udG9EYXRlKCksXG4gICAgICAgICAgb3B0aW9ucz8uZm9ybWF0IHx8IHRoaXMubWV0YWRhdGE/LnRpbWVzdGFtcEZvcm1hdCxcbiAgICAgICAgICBvcHRpb25zLnRpbWV6b25lLFxuICAgICAgICAgIG9wdGlvbnM/LmxvY2FsZVxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19