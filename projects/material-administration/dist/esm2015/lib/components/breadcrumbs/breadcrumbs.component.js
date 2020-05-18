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
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, item_r1.source), " ");
} }
function BreadcrumbsComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
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
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", item_r1.url);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r2);
} }
export class BreadcrumbsComponent {
    constructor(metadata, dataAdapterService) {
        this.metadata = metadata;
        this.dataAdapterService = dataAdapterService;
        this.collectionName$ = new BehaviorSubject('');
    }
    set collectionName(value) {
        this.collectionName$.next(value);
    }
    get collectionName() {
        return this.collectionName$.getValue();
    }
    ngOnInit() {
        this.links$ = this.collectionName$.pipe(map(collectionName => {
            const parts = collectionName.split('/');
            return this.getLinks(parts, this.metadata.entities[parts[0]]);
        }));
    }
    getLinks(parts, metadata, url = '/') {
        if (parts.length === 1) {
            return this.getPartUrls(parts[0], metadata, url, this.action);
        }
        return [
            ...this.getPartUrls(parts[0], metadata, url, 'list'),
            this.getItemUrl(parts[0], parts[1], metadata, url),
            ...this.getLinks(parts.slice(2), metadata.entities[parts[2]], `${url}${parts[0]}:${parts[1]}:`)
        ];
    }
    getItemUrl(collection, itemId, metadata, baseUrl) {
        return {
            name: metadata.titleField || 'title',
            source: this.dataAdapterService.get(collection, itemId).pipe(map(data => data === null || data === void 0 ? void 0 : data[metadata.titleField || 'title'])),
            url: [`${baseUrl}${collection}/update/${itemId}`]
        };
    }
    getPartUrls(part, metadata, baseUrl = '', action = 'list', itemId = '') {
        if (action === 'list') {
            return [{
                    name: capitalize(metadata.plural),
                    url: [`${baseUrl}${part}/list`]
                }];
        }
        if (action === 'add') {
            return [
                {
                    name: capitalize(metadata.plural),
                    url: [`${baseUrl}${part}/list`]
                },
                {
                    name: `Add ${metadata.single}`,
                    url: null
                }
            ];
        }
        if (action === 'update') {
            return [
                {
                    name: capitalize(metadata.plural),
                    url: [`${baseUrl}${part}/list`]
                },
                {
                    name: `Update ${metadata.single}`,
                    url: null
                }
            ];
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0c3Qiw2QkFDRTtJQUFBLFlBQ0Y7O0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSxxRUFDRjs7O0lBQ0EsNkJBQ0U7SUFBQSxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSw2Q0FDRjs7O0lBRUYsZ0NBQXdCO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7O0lBWmxELDZCQUNFO0lBQUEsOEJBRUU7SUFBQSw0QkFFRTtJQUFBLHNHQUNFO0lBRUYsc0dBQ0U7SUFFSixpQkFBSTtJQUNKLDhGQUF3QjtJQUMxQixpQkFBTTtJQUNSLDBCQUFlOzs7O0lBVlIsZUFBdUI7SUFBdkIsd0NBQXVCO0lBQ1YsZUFBbUI7SUFBbkIscUNBQW1CO0lBR25CLGVBQW9CO0lBQXBCLHNDQUFvQjtJQUkxQixlQUFhO0lBQWIsK0JBQWE7O0FERjdCLE1BQU0sT0FBTyxvQkFBb0I7SUFjL0IsWUFDNEQsUUFBbUMsRUFDdEYsa0JBQXNDO1FBRGEsYUFBUSxHQUFSLFFBQVEsQ0FBMkI7UUFDdEYsdUJBQWtCLEdBQWxCLGtCQUFrQixD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LENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDakMsR0FBRyxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7aUJBQ2hDO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQzlCLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2FBQ0YsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3ZCLE9BQU87Z0JBQ0w7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNqQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztpQkFDaEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDakMsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7YUFDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzt3RkFqRlUsb0JBQW9CLHVCQWVULDZCQUE2Qjt5REFmeEMsb0JBQW9CO1FDWmpDLDhCQUVFO1FBQUEsdUZBQ0U7O1FBY0osaUJBQU07O1FBZlUsZUFBb0Q7UUFBcEQsMERBQW9EOztrRERVdkQsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7c0JBZ0JJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsNkJBQTZCOztrQkFkbEQsS0FBSzs7a0JBT0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0QWRtaW5pc3RyYXRpb25FbnRpdHksIE1hdEFkbWluaXN0cmF0aW9uTWV0YWRhdGEgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGFBZGFwdGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWFkbWluaXN0cmF0aW9uLWJyZWFkY3J1bWJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNldCBjb2xsZWN0aW9uTmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25OYW1lJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IGNvbGxlY3Rpb25OYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbk5hbWUkLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBhY3Rpb246ICdhZGQnIHwgJ3VwZGF0ZScgfCAnbGlzdCc7XHJcblxyXG4gIGxpbmtzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBwcml2YXRlIGNvbGxlY3Rpb25OYW1lJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ01BVF9BRE1JTklTVFJBVElPTl9NRVRBREFUQScpIHB1YmxpYyBtZXRhZGF0YTogTWF0QWRtaW5pc3RyYXRpb25NZXRhZGF0YSxcclxuICAgIHB1YmxpYyBkYXRhQWRhcHRlclNlcnZpY2U6IERhdGFBZGFwdGVyU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rcyQgPSB0aGlzLmNvbGxlY3Rpb25OYW1lJC5waXBlKFxyXG4gICAgICBtYXAoY29sbGVjdGlvbk5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY29sbGVjdGlvbk5hbWUuc3BsaXQoJy8nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaW5rcyhwYXJ0cywgdGhpcy5tZXRhZGF0YS5lbnRpdGllc1twYXJ0c1swXV0pO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGlua3MocGFydHM6IHN0cmluZ1tdLCBtZXRhZGF0YTogUGFydGlhbDxNYXRBZG1pbmlzdHJhdGlvbkVudGl0eT4sIHVybCA9ICcvJykge1xyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRQYXJ0VXJscyhwYXJ0c1swXSwgbWV0YWRhdGEsIHVybCwgdGhpcy5hY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIC4uLnRoaXMuZ2V0UGFydFVybHMocGFydHNbMF0sIG1ldGFkYXRhLCB1cmwsICdsaXN0JyksXHJcbiAgICAgIHRoaXMuZ2V0SXRlbVVybChwYXJ0c1swXSwgcGFydHNbMV0sIG1ldGFkYXRhLCB1cmwpLFxyXG4gICAgICAuLi50aGlzLmdldExpbmtzKHBhcnRzLnNsaWNlKDIpLCBtZXRhZGF0YS5lbnRpdGllc1twYXJ0c1syXV0sIGAke3VybH0ke3BhcnRzWzBdfToke3BhcnRzWzFdfTpgKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SXRlbVVybChjb2xsZWN0aW9uLCBpdGVtSWQsIG1ldGFkYXRhLCBiYXNlVXJsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiBtZXRhZGF0YS50aXRsZUZpZWxkIHx8ICd0aXRsZScsXHJcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRhQWRhcHRlclNlcnZpY2UuZ2V0KGNvbGxlY3Rpb24sIGl0ZW1JZCkucGlwZShtYXAoZGF0YSA9PiBkYXRhPy5bbWV0YWRhdGEudGl0bGVGaWVsZCB8fCAndGl0bGUnXSkpLFxyXG4gICAgICB1cmw6IFtgJHtiYXNlVXJsfSR7Y29sbGVjdGlvbn0vdXBkYXRlLyR7aXRlbUlkfWBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXJ0VXJscyhwYXJ0LCBtZXRhZGF0YSwgYmFzZVVybCA9ICcnLCBhY3Rpb24gPSAnbGlzdCcsIGl0ZW1JZCA9ICcnKSB7XHJcbiAgICBpZiAoYWN0aW9uID09PSAnbGlzdCcpIHtcclxuICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgbmFtZTogY2FwaXRhbGl6ZShtZXRhZGF0YS5wbHVyYWwpLFxyXG4gICAgICAgIHVybDogW2Ake2Jhc2VVcmx9JHtwYXJ0fS9saXN0YF1cclxuICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2FkZCcpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBjYXBpdGFsaXplKG1ldGFkYXRhLnBsdXJhbCksXHJcbiAgICAgICAgICB1cmw6IFtgJHtiYXNlVXJsfSR7cGFydH0vbGlzdGBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBgQWRkICR7bWV0YWRhdGEuc2luZ2xlfWAsXHJcbiAgICAgICAgICB1cmw6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ3VwZGF0ZScpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBjYXBpdGFsaXplKG1ldGFkYXRhLnBsdXJhbCksXHJcbiAgICAgICAgICB1cmw6IFtgJHtiYXNlVXJsfSR7cGFydH0vbGlzdGBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBgVXBkYXRlICR7bWV0YWRhdGEuc2luZ2xlfWAsXHJcbiAgICAgICAgICB1cmw6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgZnhMYXlvdXQ9XCJyb3dcIlxyXG4gICAgIGZ4QWxpZ249XCJzdGFydFwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlua3MkIHwgYXN5bmM7IGxldCBsYXN0ID0gbGFzdFwiPlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiXHJcbiAgICAgICAgIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICAgICAgPGEgbWF0LWJ1dHRvblxyXG4gICAgICAgICBbcm91dGVyTGlua109XCJpdGVtLnVybFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnNvdXJjZVwiPlxyXG4gICAgICAgICAge3soaXRlbS5zb3VyY2UgfCBhc3luYyl9fVxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS5zb3VyY2VcIj5cclxuICAgICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8bWF0LWljb24gKm5nSWY9XCIhbGFzdFwiPmFycm93X3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19