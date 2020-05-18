import { Component, Optional, Inject } from '@angular/core';
import { MetadataComponent } from '../metadata/metadata.component';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { map, shareReplay, takeUntil, tap, take, switchMap } from 'rxjs/operators';
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
function UpdateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "mat-spinner", 4);
    i0.ɵɵelementEnd();
} }
function UpdateComponent_ng_container_2_mat_toolbar_18_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subCollection_r9 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate3("routerLink", "/", i0.ɵɵpipeBind1(1, 4, ctx_r8.collectionName$), ":", i0.ɵɵpipeBind1(2, 6, ctx_r8.id$), ":", subCollection_r9 == null ? null : subCollection_r9.id, "/list");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 8, subCollection_r9 == null ? null : subCollection_r9.plural), " ");
} }
function UpdateComponent_ng_container_2_mat_toolbar_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-toolbar");
    i0.ɵɵtemplate(1, UpdateComponent_ng_container_2_mat_toolbar_18_a_1_Template, 5, 10, "a", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subCollections_r7 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", subCollections_r7);
} }
function UpdateComponent_ng_container_2_mat_administration_form_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-administration-form", 13);
    i0.ɵɵlistener("save", function UpdateComponent_ng_container_2_mat_administration_form_21_Template_mat_administration_form_save_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.save($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fields", i0.ɵɵpipeBind1(1, 1, ctx_r6.fields$));
} }
function UpdateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "mat-administration-breadcrumbs", 5);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "mat-toolbar", 6);
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 7);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelement(9, "br");
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "a", 8);
    i0.ɵɵpipe(14, "async");
    i0.ɵɵelementStart(15, "mat-icon");
    i0.ɵɵtext(16, "keyboard_backspace");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, UpdateComponent_ng_container_2_mat_toolbar_18_Template, 2, 1, "mat-toolbar", 9);
    i0.ɵɵpipe(19, "async");
    i0.ɵɵelementStart(20, "mat-card");
    i0.ɵɵtemplate(21, UpdateComponent_ng_container_2_mat_administration_form_21_Template, 2, 3, "mat-administration-form", 10);
    i0.ɵɵpipe(22, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const metadata_r4 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("collectionName", i0.ɵɵpipeBind1(2, 7, ctx_r1.collectionName$));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Update ", metadata_r4 == null ? null : metadata_r4.single, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 9, ctx_r1.entityTitle$));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("#", i0.ɵɵpipeBind1(12, 11, ctx_r1.id$), "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("routerLink", "/", i0.ɵɵpipeBind1(14, 13, ctx_r1.collectionPath$), "/list");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(19, 15, ctx_r1.subCollections$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(22, 17, ctx_r1.fields$));
} }
function UpdateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip-list");
    i0.ɵɵelementStart(1, "mat-chip", 14);
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
export class UpdateComponent extends MetadataComponent {
    constructor(route, snackbar, router, dataAdapterService, metadata) {
        super(route, dataAdapterService, metadata);
        this.route = route;
        this.snackbar = snackbar;
        this.router = router;
        this.dataAdapterService = dataAdapterService;
        this.metadata = metadata;
        this.id$ = new BehaviorSubject(null);
        this.route.params.pipe(map(params => params.id), takeUntil(this.destroyed$)).subscribe(this.id$);
        this.doc$ = this.getDoc();
        this.fields$ = combineLatest([this.getFields(), this.doc$])
            .pipe(map(([fields, doc]) => fields.map(field => {
            return Object.assign(Object.assign({}, field), { value: this.getFieldValue(field, doc) });
        })));
        this.entityTitle$ = this.doc$.pipe(map(doc => { var _a; return doc === null || doc === void 0 ? void 0 : doc[((_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.titleField) || 'title']; }));
    }
    save(item) {
        this.isLoading$.next(true);
        combineLatest([
            this.metadata$,
            this.collectionName$
        ])
            .pipe(take(1), switchMap(([metadata, collectionName]) => {
            return this.processUploads(item, metadata, 'update').pipe(map(updatedItem => {
                return [
                    metadata,
                    collectionName,
                    updatedItem
                ];
            }));
        }), switchMap(([_, collectionName, updatedItem]) => this.dataAdapterService.update(collectionName, this.id$.getValue(), this.getWithTimestamps(updatedItem, 'update')))).subscribe(() => {
            var _a;
            this.snackbar.success(`${capitalize((_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single)} updated successfully!`);
            this.router.navigate([`/${this.collectionPath$.getValue()}/list`]);
        }, () => { var _a; return this.snackbar.error(`There was an error updating ${(_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single}!`); }, () => this.isLoading$.next(false));
    }
    getDoc() {
        return this.dataAdapterService.get(this.collectionName$.getValue(), this.id$.getValue()).pipe(tap(() => this.isLoading$.next(false)), shareReplay(1));
    }
    getFieldValue(field, doc) {
        var _a;
        if ((field === null || field === void 0 ? void 0 : field.type) === 'timestamp') {
            return (_a = doc === null || doc === void 0 ? void 0 : doc[field === null || field === void 0 ? void 0 : field.name]) === null || _a === void 0 ? void 0 : _a.toDate();
        }
        return doc === null || doc === void 0 ? void 0 : doc[field === null || field === void 0 ? void 0 : field.name];
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.SnackbarService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i3.DataAdapterService), i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
UpdateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UpdateComponent, selectors: [["mat-administration-update"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "update", 3, "collectionName"], [1, "justify-between", "toolbar-main"], [1, "entity-title"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [4, "ngIf"], [3, "fields", "save", 4, "ngIf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink"], [3, "fields", "save"], ["color", "warn"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, UpdateComponent_div_0_Template, 2, 0, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, UpdateComponent_ng_container_2_Template, 23, 19, "ng-container", 1);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵtemplate(4, UpdateComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 3, ctx.isLoading$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
    } }, directives: [i4.NgIf, i5.MatSpinner, i6.BreadcrumbsComponent, i7.MatToolbar, i8.MatAnchor, i1.RouterLinkWithHref, i9.MatIcon, i10.MatCard, i4.NgForOf, i11.FormComponent, i12.MatChipList, i12.MatChip], pipes: [i4.AsyncPipe, i4.TitleCasePipe], styles: [".entity-title[_ngcontent-%COMP%]{font-size:1rem;line-height:1rem}.entity-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-weight:400}.toolbar-main[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UpdateComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-update',
                templateUrl: './update.component.html',
                styleUrls: ['./update.component.scss']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.SnackbarService }, { type: i1.Router }, { type: i3.DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdGVyaWFsLWFkbWluaXN0cmF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTJCLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbkUsT0FBTyxFQUFjLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDTnBDLDhCQUVFO0lBQUEsaUNBQXlDO0lBQzNDLGlCQUFNOzs7SUFjRiw2QkFJRTs7O0lBQUEsWUFDRjs7SUFBQSxpQkFBSTs7OztJQUZELHNNQUFvRjtJQUNyRixlQUNGO0lBREUsZ0hBQ0Y7OztJQU5GLG1DQUNFO0lBQUEsNEZBSUU7SUFFSixpQkFBYzs7O0lBTlQsZUFBNEM7SUFBNUMsMkNBQTRDOzs7O0lBUS9DLG1EQUUwRTtJQUFqRCxnUEFBc0I7O0lBQUMsaUJBQTBCOzs7SUFEakQsNkRBQTBCOzs7SUF0QnZELDZCQUNFO0lBQUEsb0RBQ2lGOztJQUNqRixzQ0FDRTtJQUFBLDBCQUFJO0lBQUEsWUFBMkI7SUFBQSxpQkFBSztJQUNwQywrQkFBMkI7SUFBQSxZQUF3Qjs7SUFBQSxxQkFBTTtJQUFBLDhCQUFPO0lBQUEsYUFBZ0I7O0lBQUEsaUJBQVE7SUFBQSxpQkFBTztJ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QUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMzRixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDdEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7SUFDSixDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQVUsRUFBRSxHQUFROztRQUN4QyxJQUFJLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLElBQUksTUFBSyxXQUFXLEVBQUU7WUFDL0IsYUFBTyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLElBQUksMkNBQUcsTUFBTSxHQUFHO1NBQ3JDO1FBRUQsT0FBTyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLElBQUksRUFBRTtJQUM1QixDQUFDOzs4RUF0RVUsZUFBZSx3TEFXSiw2QkFBNkI7b0RBWHhDLGVBQWU7UUNkNUIsZ0VBRUU7O1FBRUYsb0ZBQ0U7O1FBMEJGLGlIQUNFOzs7UUEvQkcsMkRBQTBCO1FBR2pCLGVBQXNEO1FBQXRELDBEQUFzRCxpQkFBQTs7a0REVXZELGVBQWU7Y0FMM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztzQkFZSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWV0YWRhdGFDb21wb25lbnQgfSBmcm9tICcuLi9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHRha2VVbnRpbCwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNuYWNrYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NuYWNrYmFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRGF0YUFkYXB0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS1hZGFwdGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtYWRtaW5pc3RyYXRpb24tdXBkYXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91cGRhdGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29tcG9uZW50IGV4dGVuZHMgTWV0YWRhdGFDb21wb25lbnQge1xyXG4gIGZpZWxkcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG4gIGRvYyQ6IE9ic2VydmFibGU8YW55PjtcclxuICBpZCQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuICBlbnRpdHlUaXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBzbmFja2JhcjogU25hY2tiYXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHB1YmxpYyBkYXRhQWRhcHRlclNlcnZpY2U6IERhdGFBZGFwdGVyU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ01BVF9BRE1JTklTVFJBVElPTl9NRVRBREFUQScpIHB1YmxpYyBtZXRhZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcihyb3V0ZSwgZGF0YUFkYXB0ZXJTZXJ2aWNlLCBtZXRhZGF0YSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShtYXAocGFyYW1zID0+IHBhcmFtcy5pZCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUodGhpcy5pZCQpO1xyXG4gICAgdGhpcy5kb2MkID0gdGhpcy5nZXREb2MoKTtcclxuICAgIHRoaXMuZmllbGRzJCA9IGNvbWJpbmVMYXRlc3QoW3RoaXMuZ2V0RmllbGRzKCksIHRoaXMuZG9jJF0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoW2ZpZWxkcywgZG9jXSkgPT4gZmllbGRzLm1hcChmaWVsZCA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5maWVsZCwgdmFsdWU6IHRoaXMuZ2V0RmllbGRWYWx1ZShmaWVsZCwgZG9jKSB9O1xyXG4gICAgICAgIH0pKVxyXG4gICAgICApO1xyXG4gICAgdGhpcy5lbnRpdHlUaXRsZSQgPSB0aGlzLmRvYyQucGlwZShtYXAoZG9jID0+IGRvYz8uW3RoaXMubWV0YWRhdGEkLmdldFZhbHVlKCk/LnRpdGxlRmllbGQgfHwgJ3RpdGxlJ10pKTtcclxuICB9XHJcblxyXG4gIHNhdmUoaXRlbTogYW55KSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyQubmV4dCh0cnVlKTtcclxuXHJcbiAgICBjb21iaW5lTGF0ZXN0KFtcclxuICAgICAgdGhpcy5tZXRhZGF0YSQsXHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUkXHJcbiAgICBdKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoW21ldGFkYXRhLCBjb2xsZWN0aW9uTmFtZV0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NVcGxvYWRzKGl0ZW0sIG1ldGFkYXRhLCAndXBkYXRlJykucGlwZShtYXAodXBkYXRlZEl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICAgIHVwZGF0ZWRJdGVtXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3dpdGNoTWFwKChbXywgY29sbGVjdGlvbk5hbWUsIHVwZGF0ZWRJdGVtXSkgPT5cclxuICAgICAgICAgIHRoaXMuZGF0YUFkYXB0ZXJTZXJ2aWNlLnVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgdGhpcy5pZCQuZ2V0VmFsdWUoKSwgdGhpcy5nZXRXaXRoVGltZXN0YW1wcyh1cGRhdGVkSXRlbSwgJ3VwZGF0ZScpKVxyXG4gICAgICAgIClcclxuICAgICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zbmFja2Jhci5zdWNjZXNzKGAke2NhcGl0YWxpemUodGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uc2luZ2xlKX0gdXBkYXRlZCBzdWNjZXNzZnVsbHkhYCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC8ke3RoaXMuY29sbGVjdGlvblBhdGgkLmdldFZhbHVlKCl9L2xpc3RgXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB0aGlzLnNuYWNrYmFyLmVycm9yKGBUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgJHt0aGlzLm1ldGFkYXRhJC5nZXRWYWx1ZSgpPy5zaW5nbGV9IWApLFxyXG4gICAgICAgICgpID0+IHRoaXMuaXNMb2FkaW5nJC5uZXh0KGZhbHNlKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREb2MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhQWRhcHRlclNlcnZpY2UuZ2V0KHRoaXMuY29sbGVjdGlvbk5hbWUkLmdldFZhbHVlKCksIHRoaXMuaWQkLmdldFZhbHVlKCkpLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSkpLFxyXG4gICAgICBzaGFyZVJlcGxheSgxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmllbGRWYWx1ZShmaWVsZDogYW55LCBkb2M6IGFueSkge1xyXG4gICAgaWYgKGZpZWxkPy50eXBlID09PSAndGltZXN0YW1wJykge1xyXG4gICAgICByZXR1cm4gZG9jPy5bZmllbGQ/Lm5hbWVdPy50b0RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZG9jPy5bZmllbGQ/Lm5hbWVdO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibG9hZGluZy1ib3gtb3ZlcmZsb3dcIlxyXG4gICAgICpuZ0lmPVwiaXNMb2FkaW5nJCB8IGFzeW5jXCI+XHJcbiAgPG1hdC1zcGlubmVyIGRpYW1ldGVyPVwiNTBcIj48L21hdC1zcGlubmVyPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1ldGFkYXRhJCB8IGFzeW5jIGFzIG1ldGFkYXRhOyBlbHNlIG5vTWV0YWRhdGFcIj5cclxuICA8bWF0LWFkbWluaXN0cmF0aW9uLWJyZWFkY3J1bWJzIFtjb2xsZWN0aW9uTmFtZV09XCJjb2xsZWN0aW9uTmFtZSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJ1cGRhdGVcIj48L21hdC1hZG1pbmlzdHJhdGlvbi1icmVhZGNydW1icz5cclxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJqdXN0aWZ5LWJldHdlZW4gdG9vbGJhci1tYWluXCI+XHJcbiAgICA8aDE+VXBkYXRlIHt7bWV0YWRhdGE/LnNpbmdsZX19PC9oMT5cclxuICAgIDxzcGFuIGNsYXNzPVwiZW50aXR5LXRpdGxlXCI+e3tlbnRpdHlUaXRsZSQgfCBhc3luY319PGJyIC8+PHNtYWxsPiN7e2lkJCB8IGFzeW5jfX08L3NtYWxsPjwvc3Bhbj5cclxuICAgIDxhIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICBjb2xvcj1cIndhcm5cIlxyXG4gICAgICAgcm91dGVyTGluaz1cIi97e2NvbGxlY3Rpb25QYXRoJCB8IGFzeW5jfX0vbGlzdFwiPlxyXG4gICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYmFja3NwYWNlPC9tYXQtaWNvbj4gQ2FuY2VsXHJcbiAgICA8L2E+XHJcbiAgPC9tYXQtdG9vbGJhcj5cclxuICA8bWF0LXRvb2xiYXIgKm5nSWY9XCJzdWJDb2xsZWN0aW9ucyQgfCBhc3luYyBhcyBzdWJDb2xsZWN0aW9uc1wiPlxyXG4gICAgPGEgKm5nRm9yPVwibGV0IHN1YkNvbGxlY3Rpb24gb2Ygc3ViQ29sbGVjdGlvbnNcIlxyXG4gICAgICAgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgIGFyaWEtbGFiZWw9XCJNYW5hZ2VcIlxyXG4gICAgICAgcm91dGVyTGluaz1cIi97e2NvbGxlY3Rpb25OYW1lJCB8IGFzeW5jfX06e3tpZCQgfCBhc3luY319Ont7c3ViQ29sbGVjdGlvbj8uaWR9fS9saXN0XCI+XHJcbiAgICAgIHt7c3ViQ29sbGVjdGlvbj8ucGx1cmFsIHwgdGl0bGVjYXNlfX1cclxuICAgIDwvYT5cclxuICA8L21hdC10b29sYmFyPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtYWRtaW5pc3RyYXRpb24tZm9ybSAqbmdJZj1cImZpZWxkcyQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJmaWVsZHMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzYXZlKT1cInNhdmUoJGV2ZW50KTtcIj48L21hdC1hZG1pbmlzdHJhdGlvbi1mb3JtPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNub01ldGFkYXRhPlxyXG4gIDxtYXQtY2hpcC1saXN0PlxyXG4gICAgPG1hdC1jaGlwIGNvbG9yPVwid2FyblwiPk5vIGVudGl0eSBtZXRhZGF0YSBkZWZpbmVkIGZvciZuYnNwOzxzdHJvbmc+e3tjb2xsZWN0aW9uTmFtZSQgfCBhc3luY319PC9zdHJvbmc+ITwvbWF0LWNoaXA+XHJcbiAgPC9tYXQtY2hpcC1saXN0PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=