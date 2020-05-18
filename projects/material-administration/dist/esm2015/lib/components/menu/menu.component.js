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
    const entity_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", entity_r1.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, entity_r1.plural), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entity_r1 == null ? null : entity_r1.showMenuDividerAfter);
} }
export class MenuComponent {
    constructor(metadata) {
        var _a;
        this.metadata = metadata;
        this.entities = Object.keys((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.entities).filter((key) => { var _a; return !((_a = this.metadata.entities[key]) === null || _a === void 0 ? void 0 : _a.hideList); }).map(key => {
            return Object.assign({ id: key }, this.metadata.entities[key]);
        });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDTWhFLDhCQUFnRTs7O0lBTGxFLDZCQUNFO0lBQUEsNEJBRzZCO0lBQUEsWUFBOEI7O0lBQUEsaUJBQUk7SUFDL0QsNkZBQWtEO0lBQ3BELDBCQUFlOzs7SUFGVixlQUF3QjtJQUF4Qix5Q0FBd0I7SUFBRSxlQUE4QjtJQUE5Qix1RUFBOEI7SUFDOUMsZUFBb0M7SUFBcEMsZ0ZBQW9DOztBRENyRCxNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUM2RCxRQUFhOztRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSMUUsYUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLE9BQUMsSUFBSSxDQUFDLFFBQVEsMENBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsV0FBQyxPQUFBLFFBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBDQUFFLFFBQVEsQ0FBQSxDQUFBLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNySCx1QkFDRSxFQUFFLEVBQUUsR0FBRyxJQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUM5QjtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBSUMsQ0FBQzs7MEVBVk0sYUFBYSx1QkFTRiw2QkFBNkI7a0RBVHhDLGFBQWE7UUNQMUIsdUNBQ0U7UUFBQSxnRkFDRTtRQU1KLGlCQUFlOztRQVBDLGVBQStCO1FBQS9CLHNDQUErQjs7a0RETWxDLGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDOztzQkFVSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1hZG1pbmlzdHJhdGlvbi1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcbiAgZW50aXRpZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhPy5lbnRpdGllcykuZmlsdGVyKChrZXk6IGFueSkgPT4gIXRoaXMubWV0YWRhdGEuZW50aXRpZXNba2V5XT8uaGlkZUxpc3QpLm1hcChrZXkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDoga2V5LFxuICAgICAgLi4udGhpcy5tZXRhZGF0YS5lbnRpdGllc1trZXldXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdCgnTUFUX0FETUlOSVNUUkFUSU9OX01FVEFEQVRBJykgcHJpdmF0ZSBtZXRhZGF0YTogYW55XG4gICkgeyB9XG59XG4iLCI8bWF0LW5hdi1saXN0IGNvbG9yPVwicHJpbWFyeVwiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRpdHkgb2YgZW50aXRpZXNcIj5cbiAgICA8YSBtYXQtbGlzdC1pdGVtXG4gICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICBbcm91dGVyTGlua109XCJlbnRpdHkuaWRcIj4ge3tlbnRpdHkucGx1cmFsIHwgdGl0bGVjYXNlfX0gPC9hPlxuICAgIDxtYXQtZGl2aWRlciAqbmdJZj1cImVudGl0eT8uc2hvd01lbnVEaXZpZGVyQWZ0ZXJcIj48L21hdC1kaXZpZGVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbWF0LW5hdi1saXN0PlxuIl19