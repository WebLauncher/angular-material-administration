import { Component, Inject, Optional } from '@angular/core';
import { MetadataComponent } from '../metadata/metadata.component';
import { combineLatest } from 'rxjs';
import { take, tap, switchMap, map } from 'rxjs/operators';
import { capitalize } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/snackbar.service";
import * as i3 from "../../services/data-adapter.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "../breadcrumbs/breadcrumbs.component";
import * as i7 from "@angular/material/toolbar";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/card";
import * as i11 from "../form/form.component";
import * as i12 from "@angular/material/chips";
function AddComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "mat-spinner", 4);
    i0.ɵɵelementEnd();
} }
function AddComponent_ng_container_2_mat_administration_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-administration-form", 9);
    i0.ɵɵlistener("save", function AddComponent_ng_container_2_mat_administration_form_12_Template_mat_administration_form_save_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.save($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(1, 1, ctx_r5.fields$));
} }
function AddComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "mat-administration-breadcrumbs", 5);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "mat-toolbar", 6);
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 7);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "keyboard_backspace");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-card");
    i0.ɵɵtemplate(12, AddComponent_ng_container_2_mat_administration_form_12_Template, 2, 3, "mat-administration-form", 8);
    i0.ɵɵpipe(13, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const metadata_r4 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("collectionName", i0.ɵɵpipeBind1(2, 4, ctx_r1.collectionName$));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Add ", metadata_r4 == null ? null : metadata_r4.single, "");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("routerLink", "/", i0.ɵɵpipeBind1(7, 6, ctx_r1.collectionPath$), "/list");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(13, 8, ctx_r1.fields$));
} }
function AddComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip-list");
    i0.ɵɵelementStart(1, "mat-chip", 10);
    i0.ɵɵtext(2, "No entity metadata defined for\u00A0");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
} }
export class AddComponent extends MetadataComponent {
    constructor(route, snackbar, router, dataAdapterService, metadata) {
        super(route, dataAdapterService, metadata);
        this.route = route;
        this.snackbar = snackbar;
        this.router = router;
        this.dataAdapterService = dataAdapterService;
        this.metadata = metadata;
        this.fields$ = this.getFields().pipe(tap(() => { this.isLoading$.next(false); }));
    }
    save(item) {
        this.isLoading$.next(true);
        combineLatest([
            this.metadata$,
            this.collectionName$
        ])
            .pipe(take(1), switchMap(([metadata, collectionName]) => {
            return this.processUploads(item, metadata, 'add').pipe(map(updatedItem => {
                return [
                    metadata,
                    collectionName,
                    updatedItem
                ];
            }));
        }), switchMap(([_, collectionName, updatedItem]) => this.dataAdapterService.add(collectionName, this.getWithTimestamps(updatedItem, 'add')))).subscribe(() => {
            var _a;
            this.snackbar.success(`${capitalize((_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single)} added successfully!`);
            this.router.navigate([`/${this.collectionPath$.getValue()}/list`]);
        }, () => { var _a; return this.snackbar.error(`There was an error adding ${(_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single}!`); }, () => this.isLoading$.next(false));
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.SnackbarService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i3.DataAdapterService), i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
AddComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddComponent, selectors: [["mat-administration-add"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "add", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [3, "fields", "save", 4, "ngIf"], [3, "fields", "save"], ["color", "warn"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AddComponent_div_0_Template, 2, 0, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, AddComponent_ng_container_2_Template, 14, 10, "ng-container", 1);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵtemplate(4, AddComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 3, ctx.isLoading$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
    } }, directives: [i4.NgIf, i5.MatSpinner, i6.BreadcrumbsComponent, i7.MatToolbar, i8.MatAnchor, i1.RouterLinkWithHref, i9.MatIcon, i10.MatCard, i11.FormComponent, i12.MatChipList, i12.MatChip], pipes: [i4.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;position:relative}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.scss']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.SnackbarService }, { type: i1.Router }, { type: i3.DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdGVyaWFsLWFkbWluaXN0cmF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWRkL2FkZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9hZGQvYWRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVuRSxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNOcEMsOEJBRUU7SUFBQSxpQ0FBeUM7SUFDM0MsaUJBQU07Ozs7SUFhRixrREFFMEU7SUFBakQsME9BQXNCOztJQUFDLGlCQUEwQjs7O0lBRmpELDZEQUEwQjs7O0lBWnZELDZCQUNFO0lBQUEsb0RBQzhFOztJQUM5RSxzQ0FDRTtJQUFBLDBCQUFJO0lBQUEsWUFBd0I7SUFBQSxpQkFBSztJQUNqQyw0QkFHRTs7SUFBQSxnQ0FBVTtJQUFBLGtDQUFrQjtJQUFBLGlCQUFXO0lBQUMseUJBQzFDO0lBQUEsaUJBQUk7SUFDTixpQkFBYztJQUNkLGlDQUNFO0lBQUEsc0hBRWdEOztJQUNsRCxpQkFBVztJQUNiLDBCQUFlOzs7O0lBZm1CLGVBQTBDO0lBQTFDLDZFQUEwQztJQUdwRSxlQUF3QjtJQUF4QixrRkFBd0I7SUFHekIsZUFBOEM7SUFBOUMsbUdBQThDO0lBTXhCLGVBQXVCO0lBQXZCLDREQUF1Qjs7O0lBTWxELHFDQUNFO0lBQUEsb0NBQXVCO0lBQUEsb0RB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QjtnQkFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7O3NCQVNJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1ldGFkYXRhQ29tcG9uZW50IH0gZnJvbSAnLi4vbWV0YWRhdGEvbWV0YWRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSwgdGFwLCBzd2l0Y2hNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU25hY2tiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc25hY2tiYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBEYXRhQWRhcHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLWFkYXB0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEltbXV0YWJsZSB9IGZyb20gJ3R5cGVzL2ltbXV0YWJsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1hZG1pbmlzdHJhdGlvbi1hZGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FkZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRDb21wb25lbnQgZXh0ZW5kcyBNZXRhZGF0YUNvbXBvbmVudCB7XHJcbiAgZmllbGRzJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgc25hY2tiYXI6IFNuYWNrYmFyU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgZGF0YUFkYXB0ZXJTZXJ2aWNlOiBEYXRhQWRhcHRlclNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCdNQVRfQURNSU5JU1RSQVRJT05fTUVUQURBVEEnKSBwdWJsaWMgbWV0YWRhdGE6IEltbXV0YWJsZTxhbnk+XHJcbiAgKSB7XHJcbiAgICBzdXBlcihyb3V0ZSwgZGF0YUFkYXB0ZXJTZXJ2aWNlLCBtZXRhZGF0YSk7XHJcblxyXG4gICAgdGhpcy5maWVsZHMkID0gdGhpcy5nZXRGaWVsZHMoKS5waXBlKHRhcCgoKSA9PiB7IHRoaXMuaXNMb2FkaW5nJC5uZXh0KGZhbHNlKTsgfSkpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShpdGVtOiBhbnkpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nJC5uZXh0KHRydWUpO1xyXG4gICAgY29tYmluZUxhdGVzdChbXHJcbiAgICAgIHRoaXMubWV0YWRhdGEkLFxyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lJFxyXG4gICAgXSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICBzd2l0Y2hNYXAoKFttZXRhZGF0YSwgY29sbGVjdGlvbk5hbWVdKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzVXBsb2FkcyhpdGVtLCBtZXRhZGF0YSwgJ2FkZCcpLnBpcGUobWFwKHVwZGF0ZWRJdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAgICAgICB1cGRhdGVkSXRlbVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoW18sIGNvbGxlY3Rpb25OYW1lLCB1cGRhdGVkSXRlbV0pID0+XHJcbiAgICAgICAgICB0aGlzLmRhdGFBZGFwdGVyU2VydmljZS5hZGQoY29sbGVjdGlvbk5hbWUsIHRoaXMuZ2V0V2l0aFRpbWVzdGFtcHModXBkYXRlZEl0ZW0sICdhZGQnKSlcclxuICAgICAgICApXHJcbiAgICAgICkuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc25hY2tiYXIuc3VjY2VzcyhgJHtjYXBpdGFsaXplKHRoaXMubWV0YWRhdGEkLmdldFZhbHVlKCk/LnNpbmdsZSl9IGFkZGVkIHN1Y2Nlc3NmdWxseSFgKTtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgLyR7dGhpcy5jb2xsZWN0aW9uUGF0aCQuZ2V0VmFsdWUoKX0vbGlzdGBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHRoaXMuc25hY2tiYXIuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvciBhZGRpbmcgJHt0aGlzLm1ldGFkYXRhJC5nZXRWYWx1ZSgpPy5zaW5nbGV9IWApLFxyXG4gICAgICAgICgpID0+IHRoaXMuaXNMb2FkaW5nJC5uZXh0KGZhbHNlKVxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibG9hZGluZy1ib3gtb3ZlcmZsb3dcIlxyXG4gICAgICpuZ0lmPVwiaXNMb2FkaW5nJCB8IGFzeW5jXCI+XHJcbiAgPG1hdC1zcGlubmVyIGRpYW1ldGVyPVwiNTBcIj48L21hdC1zcGlubmVyPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1ldGFkYXRhJCB8IGFzeW5jIGFzIG1ldGFkYXRhOyBlbHNlIG5vTWV0YWRhdGFcIj5cclxuICA8bWF0LWFkbWluaXN0cmF0aW9uLWJyZWFkY3J1bWJzIFtjb2xsZWN0aW9uTmFtZV09XCJjb2xsZWN0aW9uTmFtZSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJhZGRcIj48L21hdC1hZG1pbmlzdHJhdGlvbi1icmVhZGNydW1icz5cclxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgIDxoMT5BZGQge3ttZXRhZGF0YT8uc2luZ2xlfX08L2gxPlxyXG4gICAgPGEgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgIGNvbG9yPVwid2FyblwiXHJcbiAgICAgICByb3V0ZXJMaW5rPVwiL3t7Y29sbGVjdGlvblBhdGgkIHwgYXN5bmN9fS9saXN0XCI+XHJcbiAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9iYWNrc3BhY2U8L21hdC1pY29uPiBDYW5jZWxcclxuICAgIDwvYT5cclxuICA8L21hdC10b29sYmFyPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtYWRtaW5pc3RyYXRpb24tZm9ybSBbZmllbGRzXT1cImZpZWxkcyQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZHMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzYXZlKT1cInNhdmUoJGV2ZW50KTtcIj48L21hdC1hZG1pbmlzdHJhdGlvbi1mb3JtPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNub01ldGFkYXRhPlxyXG4gIDxtYXQtY2hpcC1saXN0PlxyXG4gICAgPG1hdC1jaGlwIGNvbG9yPVwid2FyblwiPk5vIGVudGl0eSBtZXRhZGF0YSBkZWZpbmVkIGZvciZuYnNwOzxzdHJvbmc+e3tjb2xsZWN0aW9uTmFtZSQgfCBhc3luY319PC9zdHJvbmc+ITwvbWF0LWNoaXA+XHJcbiAgPC9tYXQtY2hpcC1saXN0PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=