import { __assign } from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/divider";
function MenuComponent_ng_container_1_mat_divider_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function MenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 2);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MenuComponent_ng_container_1_mat_divider_4_Template, 1, 0, "mat-divider", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var entity_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", entity_r1.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, entity_r1.plural), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entity_r1 == null ? null : entity_r1.showMenuDividerAfter);
} }
var MenuComponent = /** @class */ (function () {
    function MenuComponent(metadata) {
        var _this = this;
        var _a;
        this.metadata = metadata;
        this.entities = Object.keys((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.entities).filter(function (key) { var _a; return !((_a = _this.metadata.entities[key]) === null || _a === void 0 ? void 0 : _a.hideList); }).map(function (key) {
            return __assign({ id: key }, _this.metadata.entities[key]);
        });
    }
    MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    MenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["mat-administration-menu"]], decls: 2, vars: 1, consts: [["color", "primary"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "color", "primary", "routerLinkActive", "active", 3, "routerLink"], [4, "ngIf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-nav-list", 0);
            i0.ɵɵtemplate(1, MenuComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.entities);
        } }, directives: [i1.MatNavList, i2.NgForOf, i1.MatListItem, i3.RouterLinkWithHref, i3.RouterLinkActive, i2.NgIf, i4.MatDivider], pipes: [i2.TitleCasePipe], styles: [".active[_ngcontent-%COMP%]{color:#fff!important;background-color:#000!important}"] });
    return MenuComponent;
}());
export { MenuComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ01oRSw4QkFBZ0U7OztJQUxsRSw2QkFDRTtJQUFBLDRCQUc2QjtJQUFBLFlBQThCOztJQUFBLGlCQUFJO0lBQy9ELDZGQUFrRDtJQUNwRCwwQkFBZTs7O0lBRlYsZUFBd0I7SUFBeEIseUNBQXdCO0lBQUUsZUFBOEI7SUFBOUIsdUVBQThCO0lBQzlDLGVBQW9DO0lBQXBDLGdGQUFvQzs7QURKckQ7SUFhRSx1QkFDNkQsUUFBYTtRQUQxRSxpQkFFSzs7UUFEd0QsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVIxRSxhQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksT0FBQyxJQUFJLENBQUMsUUFBUSwwQ0FBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFRLFlBQUssT0FBQSxRQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQ0FBRSxRQUFRLENBQUEsQ0FBQSxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ2xILGtCQUNFLEVBQUUsRUFBRSxHQUFHLElBQ0osS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQzlCO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFJQyxDQUFDOzhFQVZNLGFBQWEsdUJBU0YsNkJBQTZCO3NEQVR4QyxhQUFhO1lDUDFCLHVDQUNFO1lBQUEsZ0ZBQ0U7WUFNSixpQkFBZTs7WUFQQyxlQUErQjtZQUEvQixzQ0FBK0I7O3dCREQvQztDQWtCQyxBQWhCRCxJQWdCQztTQVhZLGFBQWE7a0RBQWIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7O3NCQVVJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWFkbWluaXN0cmF0aW9uLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xuICBlbnRpdGllcyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGE/LmVudGl0aWVzKS5maWx0ZXIoKGtleTogYW55KSA9PiAhdGhpcy5tZXRhZGF0YS5lbnRpdGllc1trZXldPy5oaWRlTGlzdCkubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBrZXksXG4gICAgICAuLi50aGlzLm1ldGFkYXRhLmVudGl0aWVzW2tleV1cbiAgICB9O1xuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCdNQVRfQURNSU5JU1RSQVRJT05fTUVUQURBVEEnKSBwcml2YXRlIG1ldGFkYXRhOiBhbnlcbiAgKSB7IH1cbn1cbiIsIjxtYXQtbmF2LWxpc3QgY29sb3I9XCJwcmltYXJ5XCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVudGl0eSBvZiBlbnRpdGllc1wiPlxuICAgIDxhIG1hdC1saXN0LWl0ZW1cbiAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxuICAgICAgIFtyb3V0ZXJMaW5rXT1cImVudGl0eS5pZFwiPiB7e2VudGl0eS5wbHVyYWwgfCB0aXRsZWNhc2V9fSA8L2E+XG4gICAgPG1hdC1kaXZpZGVyICpuZ0lmPVwiZW50aXR5Py5zaG93TWVudURpdmlkZXJBZnRlclwiPjwvbWF0LWRpdmlkZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9tYXQtbmF2LWxpc3Q+XG4iXX0=