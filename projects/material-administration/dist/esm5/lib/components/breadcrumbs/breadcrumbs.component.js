import { __read, __spread } from "tslib";
import { Component, Input, Optional, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { capitalize } from 'lodash';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "@angular/flex-layout/flex";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/router";
import * as i6 from "@angular/material/icon";
function BreadcrumbsComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, item_r1.source), " ");
} }
function BreadcrumbsComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r1.name, " ");
} }
function BreadcrumbsComponent_ng_container_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_right");
    i0.ɵɵelementEnd();
} }
function BreadcrumbsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "a", 3);
    i0.ɵɵtemplate(3, BreadcrumbsComponent_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 4);
    i0.ɵɵtemplate(4, BreadcrumbsComponent_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, BreadcrumbsComponent_ng_container_1_mat_icon_5_Template, 2, 0, "mat-icon", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var last_r2 = ctx.last;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", item_r1.url);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r2);
} }
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(metadata, dataAdapterService) {
        this.metadata = metadata;
        this.dataAdapterService = dataAdapterService;
        this.collectionName$ = new BehaviorSubject('');
    }
    Object.defineProperty(BreadcrumbsComponent.prototype, "collectionName", {
        get: function () {
            return this.collectionName$.getValue();
        },
        set: function (value) {
            this.collectionName$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links$ = this.collectionName$.pipe(map(function (collectionName) {
            var parts = collectionName.split('/');
            return _this.getLinks(parts, _this.metadata.entities[parts[0]]);
        }));
    };
    BreadcrumbsComponent.prototype.getLinks = function (parts, metadata, url) {
        if (url === void 0) { url = '/'; }
        if (parts.length === 1) {
            return this.getPartUrls(parts[0], metadata, url, this.action);
        }
        return __spread(this.getPartUrls(parts[0], metadata, url, 'list'), [
            this.getItemUrl(parts[0], parts[1], metadata, url)
        ], this.getLinks(parts.slice(2), metadata.entities[parts[2]], "" + url + parts[0] + ":" + parts[1] + ":"));
    };
    BreadcrumbsComponent.prototype.getItemUrl = function (collection, itemId, metadata, baseUrl) {
        return {
            name: metadata.titleField || 'title',
            source: this.dataAdapterService.get(collection, itemId).pipe(map(function (data) { return data === null || data === void 0 ? void 0 : data[metadata.titleField || 'title']; })),
            url: ["" + baseUrl + collection + "/update/" + itemId]
        };
    };
    BreadcrumbsComponent.prototype.getPartUrls = function (part, metadata, baseUrl, action, itemId) {
        if (baseUrl === void 0) { baseUrl = ''; }
        if (action === void 0) { action = 'list'; }
        if (itemId === void 0) { itemId = ''; }
        if (action === 'list') {
            return [{
                    name: capitalize(metadata.plural),
                    url: ["" + baseUrl + part + "/list"]
                }];
        }
        if (action === 'add') {
            return [
                {
                    name: capitalize(metadata.plural),
                    url: ["" + baseUrl + part + "/list"]
                },
                {
                    name: "Add " + metadata.single,
                    url: null
                }
            ];
        }
        if (action === 'update') {
            return [
                {
                    name: capitalize(metadata.plural),
                    url: ["" + baseUrl + part + "/list"]
                },
                {
                    name: "Update " + metadata.single,
                    url: null
                }
            ];
        }
    };
    BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8), i0.ɵɵdirectiveInject(i1.DataAdapterService)); };
    BreadcrumbsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["mat-administration-breadcrumbs"]], inputs: { collectionName: "collectionName", action: "action" }, decls: 3, vars: 3, consts: [["fxLayout", "row", "fxAlign", "start"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-button", "", 3, "routerLink"], [4, "ngIf"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, BreadcrumbsComponent_ng_container_1_Template, 6, 4, "ng-container", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx.links$));
        } }, directives: [i2.DefaultLayoutDirective, i3.NgForOf, i2.DefaultLayoutAlignDirective, i4.MatAnchor, i5.RouterLinkWithHref, i3.NgIf, i6.MatIcon], pipes: [i3.AsyncPipe], styles: [""] });
    return BreadcrumbsComponent;
}());
export { BreadcrumbsComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbsComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }, { type: i1.DataAdapterService }]; }, { collectionName: [{
            type: Input
        }], action: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNHN0IsNkJBQ0U7SUFBQSxZQUNGOztJQUFBLDBCQUFlOzs7SUFEYixlQUNGO0lBREUscUVBQ0Y7OztJQUNBLDZCQUNFO0lBQUEsWUFDRjtJQUFBLDBCQUFlOzs7SUFEYixlQUNGO0lBREUsNkNBQ0Y7OztJQUVGLGdDQUF3QjtJQUFBLDJCQUFXO0lBQUEsaUJBQVc7OztJQVpsRCw2QkFDRTtJQUFBLDhCQUVFO0lBQUEsNEJBRUU7SUFBQSxzR0FDRTtJQUVGLHNHQUNFO0lBRUosaUJBQUk7SUFDSiw4RkFBd0I7SUFDMUIsaUJBQU07SUFDUiwwQkFBZTs7OztJQVZSLGVBQXVCO0lBQXZCLHdDQUF1QjtJQUNWLGVBQW1CO0lBQW5CLHFDQUFtQjtJQUduQixlQUFvQjtJQUFwQixzQ0FBb0I7SUFJMUIsZUFBYTtJQUFiLCtCQUFhOztBRFA3QjtJQW1CRSw4QkFDNEQsUUFBbUMsRUFDdEYsa0JBQXNDO1FBRGEsYUFBUSxHQUFSLFFBQVEsQ0FBMkI7UUFDdEYsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUp2QyxvQkFB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SyxFQUFFO1lBQ3BCLE9BQU87Z0JBQ0w7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNqQyxHQUFHLEVBQUUsQ0FBQyxLQUFHLE9BQU8sR0FBRyxJQUFJLFVBQU8sQ0FBQztpQkFDaEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQU8sUUFBUSxDQUFDLE1BQVE7b0JBQzlCLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2FBQ0YsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3ZCLE9BQU87Z0JBQ0w7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNqQyxHQUFHLEVBQUUsQ0FBQyxLQUFHLE9BQU8sR0FBRyxJQUFJLFVBQU8sQ0FBQztpQkFDaEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFlBQVUsUUFBUSxDQUFDLE1BQVE7b0JBQ2pDLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2FBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs0RkFqRlUsb0JBQW9CLHVCQWVULDZCQUE2Qjs2REFmeEMsb0JBQW9CO1lDWmpDLDhCQUVFO1lBQUEsdUZBQ0U7O1lBY0osaUJBQU07O1lBZlUsZUFBb0Q7WUFBcEQsMERBQW9EOzsrQkRGcEU7Q0E4RkMsQUF2RkQsSUF1RkM7U0FsRlksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztzQkFnQkksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyw2QkFBNkI7O2tCQWRsRCxLQUFLOztrQkFPTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNYXRBZG1pbmlzdHJhdGlvbkVudGl0eSwgTWF0QWRtaW5pc3RyYXRpb25NZXRhZGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0YUFkYXB0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtYWRtaW5pc3RyYXRpb24tYnJlYWRjcnVtYnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc2V0IGNvbGxlY3Rpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29sbGVjdGlvbk5hbWUkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuICBnZXQgY29sbGVjdGlvbk5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uTmFtZSQuZ2V0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGFjdGlvbjogJ2FkZCcgfCAndXBkYXRlJyB8ICdsaXN0JztcclxuXHJcbiAgbGlua3MkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIHByaXZhdGUgY29sbGVjdGlvbk5hbWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdCgnTUFUX0FETUlOSVNUUkFUSU9OX01FVEFEQVRBJykgcHVibGljIG1ldGFkYXRhOiBNYXRBZG1pbmlzdHJhdGlvbk1ldGFkYXRhLFxyXG4gICAgcHVibGljIGRhdGFBZGFwdGVyU2VydmljZTogRGF0YUFkYXB0ZXJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtzJCA9IHRoaXMuY29sbGVjdGlvbk5hbWUkLnBpcGUoXHJcbiAgICAgIG1hcChjb2xsZWN0aW9uTmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBjb2xsZWN0aW9uTmFtZS5zcGxpdCgnLycpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExpbmtzKHBhcnRzLCB0aGlzLm1ldGFkYXRhLmVudGl0aWVzW3BhcnRzWzBdXSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMaW5rcyhwYXJ0czogc3RyaW5nW10sIG1ldGFkYXRhOiBQYXJ0aWFsPE1hdEFkbWluaXN0cmF0aW9uRW50aXR5PiwgdXJsID0gJy8nKSB7XHJcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFBhcnRVcmxzKHBhcnRzWzBdLCBtZXRhZGF0YSwgdXJsLCB0aGlzLmFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgLi4udGhpcy5nZXRQYXJ0VXJscyhwYXJ0c1swXSwgbWV0YWRhdGEsIHVybCwgJ2xpc3QnKSxcclxuICAgICAgdGhpcy5nZXRJdGVtVXJsKHBhcnRzWzBdLCBwYXJ0c1sxXSwgbWV0YWRhdGEsIHVybCksXHJcbiAgICAgIC4uLnRoaXMuZ2V0TGlua3MocGFydHMuc2xpY2UoMiksIG1ldGFkYXRhLmVudGl0aWVzW3BhcnRzWzJdXSwgYCR7dXJsfSR7cGFydHNbMF19OiR7cGFydHNbMV19OmApXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJdGVtVXJsKGNvbGxlY3Rpb24sIGl0ZW1JZCwgbWV0YWRhdGEsIGJhc2VVcmwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IG1ldGFkYXRhLnRpdGxlRmllbGQgfHwgJ3RpdGxlJyxcclxuICAgICAgc291cmNlOiB0aGlzLmRhdGFBZGFwdGVyU2VydmljZS5nZXQoY29sbGVjdGlvbiwgaXRlbUlkKS5waXBlKG1hcChkYXRhID0+IGRhdGE/LlttZXRhZGF0YS50aXRsZUZpZWxkIHx8ICd0aXRsZSddKSksXHJcbiAgICAgIHVybDogW2Ake2Jhc2VVcmx9JHtjb2xsZWN0aW9ufS91cGRhdGUvJHtpdGVtSWR9YF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcnRVcmxzKHBhcnQsIG1ldGFkYXRhLCBiYXNlVXJsID0gJycsIGFjdGlvbiA9ICdsaXN0JywgaXRlbUlkID0gJycpIHtcclxuICAgIGlmIChhY3Rpb24gPT09ICdsaXN0Jykge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBuYW1lOiBjYXBpdGFsaXplKG1ldGFkYXRhLnBsdXJhbCksXHJcbiAgICAgICAgdXJsOiBbYCR7YmFzZVVybH0ke3BhcnR9L2xpc3RgXVxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uID09PSAnYWRkJykge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IGNhcGl0YWxpemUobWV0YWRhdGEucGx1cmFsKSxcclxuICAgICAgICAgIHVybDogW2Ake2Jhc2VVcmx9JHtwYXJ0fS9saXN0YF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IGBBZGQgJHttZXRhZGF0YS5zaW5nbGV9YCxcclxuICAgICAgICAgIHVybDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uID09PSAndXBkYXRlJykge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IGNhcGl0YWxpemUobWV0YWRhdGEucGx1cmFsKSxcclxuICAgICAgICAgIHVybDogW2Ake2Jhc2VVcmx9JHtwYXJ0fS9saXN0YF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IGBVcGRhdGUgJHttZXRhZGF0YS5zaW5nbGV9YCxcclxuICAgICAgICAgIHVybDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBmeExheW91dD1cInJvd1wiXHJcbiAgICAgZnhBbGlnbj1cInN0YXJ0XCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaW5rcyQgfCBhc3luYzsgbGV0IGxhc3QgPSBsYXN0XCI+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCJcclxuICAgICAgICAgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICA8YSBtYXQtYnV0dG9uXHJcbiAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIml0ZW0udXJsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0uc291cmNlXCI+XHJcbiAgICAgICAgICB7eyhpdGVtLnNvdXJjZSB8IGFzeW5jKX19XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnNvdXJjZVwiPlxyXG4gICAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFsYXN0XCI+YXJyb3dfcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=