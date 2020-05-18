import { __assign, __extends, __read } from "tslib";
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
    var subCollection_r9 = ctx.$implicit;
    var ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate3("routerLink", "/", i0.ɵɵpipeBind1(1, 4, ctx_r8.collectionName$), ":", i0.ɵɵpipeBind1(2, 6, ctx_r8.id$), ":", subCollection_r9 == null ? null : subCollection_r9.id, "/list");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 8, subCollection_r9 == null ? null : subCollection_r9.plural), " ");
} }
function UpdateComponent_ng_container_2_mat_toolbar_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-toolbar");
    i0.ɵɵtemplate(1, UpdateComponent_ng_container_2_mat_toolbar_18_a_1_Template, 5, 10, "a", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var subCollections_r7 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", subCollections_r7);
} }
function UpdateComponent_ng_container_2_mat_administration_form_21_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-administration-form", 13);
    i0.ɵɵlistener("save", function UpdateComponent_ng_container_2_mat_administration_form_21_Template_mat_administration_form_save_0_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.save($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext(2);
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
    var metadata_r4 = ctx.ngIf;
    var ctx_r1 = i0.ɵɵnextContext();
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
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
} }
var UpdateComponent = /** @class */ (function (_super) {
    __extends(UpdateComponent, _super);
    function UpdateComponent(route, snackbar, router, dataAdapterService, metadata) {
        var _this = _super.call(this, route, dataAdapterService, metadata) || this;
        _this.route = route;
        _this.snackbar = snackbar;
        _this.router = router;
        _this.dataAdapterService = dataAdapterService;
        _this.metadata = metadata;
        _this.id$ = new BehaviorSubject(null);
        _this.route.params.pipe(map(function (params) { return params.id; }), takeUntil(_this.destroyed$)).subscribe(_this.id$);
        _this.doc$ = _this.getDoc();
        _this.fields$ = combineLatest([_this.getFields(), _this.doc$])
            .pipe(map(function (_a) {
            var _b = __read(_a, 2), fields = _b[0], doc = _b[1];
            return fields.map(function (field) {
                return __assign(__assign({}, field), { value: _this.getFieldValue(field, doc) });
            });
        }));
        _this.entityTitle$ = _this.doc$.pipe(map(function (doc) { var _a; return doc === null || doc === void 0 ? void 0 : doc[((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.titleField) || 'title']; }));
        return _this;
    }
    UpdateComponent.prototype.save = function (item) {
        var _this = this;
        this.isLoading$.next(true);
        combineLatest([
            this.metadata$,
            this.collectionName$
        ])
            .pipe(take(1), switchMap(function (_a) {
            var _b = __read(_a, 2), metadata = _b[0], collectionName = _b[1];
            return _this.processUploads(item, metadata, 'update').pipe(map(function (updatedItem) {
                return [
                    metadata,
                    collectionName,
                    updatedItem
                ];
            }));
        }), switchMap(function (_a) {
            var _b = __read(_a, 3), _ = _b[0], collectionName = _b[1], updatedItem = _b[2];
            return _this.dataAdapterService.update(collectionName, _this.id$.getValue(), _this.getWithTimestamps(updatedItem, 'update'));
        })).subscribe(function () {
            var _a;
            _this.snackbar.success(capitalize((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + " updated successfully!");
            _this.router.navigate(["/" + _this.collectionPath$.getValue() + "/list"]);
        }, function () { var _a; return _this.snackbar.error("There was an error updating " + ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + "!"); }, function () { return _this.isLoading$.next(false); });
    };
    UpdateComponent.prototype.getDoc = function () {
        var _this = this;
        return this.dataAdapterService.get(this.collectionName$.getValue(), this.id$.getValue()).pipe(tap(function () { return _this.isLoading$.next(false); }), shareReplay(1));
    };
    UpdateComponent.prototype.getFieldValue = function (field, doc) {
        var _a;
        if ((field === null || field === void 0 ? void 0 : field.type) === 'timestamp') {
            return (_a = doc === null || doc === void 0 ? void 0 : doc[field === null || field === void 0 ? void 0 : field.name]) === null || _a === void 0 ? void 0 : _a.toDate();
        }
        return doc === null || doc === void 0 ? void 0 : doc[field === null || field === void 0 ? void 0 : field.name];
    };
    UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.SnackbarService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i3.DataAdapterService), i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    UpdateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UpdateComponent, selectors: [["mat-administration-update"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "update", 3, "collectionName"], [1, "justify-between", "toolbar-main"], [1, "entity-title"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [4, "ngIf"], [3, "fields", "save", 4, "ngIf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink"], [3, "fields", "save"], ["color", "warn"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, UpdateComponent_div_0_Template, 2, 0, "div", 0);
            i0.ɵɵpipe(1, "async");
            i0.ɵɵtemplate(2, UpdateComponent_ng_container_2_Template, 23, 19, "ng-container", 1);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵtemplate(4, UpdateComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(5);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 3, ctx.isLoading$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
        } }, directives: [i4.NgIf, i5.MatSpinner, i6.BreadcrumbsComponent, i7.MatToolbar, i8.MatAnchor, i1.RouterLinkWithHref, i9.MatIcon, i10.MatCard, i4.NgForOf, i11.FormComponent, i12.MatChipList, i12.MatChip], pipes: [i4.AsyncPipe, i4.TitleCasePipe], styles: [".entity-title[_ngcontent-%COMP%]{font-size:1rem;line-height:1rem}.entity-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-weight:400}.toolbar-main[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}"] });
    return UpdateComponent;
}(MetadataComponent));
export { UpdateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdGVyaWFsLWFkbWluaXN0cmF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEyQixRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRW5FLE9BQU8sRUFBYyxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ05wQyw4QkFFRTtJQUFBLGlDQUF5QztJQUMzQyxpQkFBTTs7O0lBY0YsNkJBSUU7OztJQUFBLFlBQ0Y7O0lBQUEsaUJBQUk7Ozs7SUFGRCxzTUFBb0Y7SUFDckYsZUFDRjtJQURFLGdIQUNGOzs7SUFORixtQ0FDRTtJQUFBLDRGQUlFO0lBRUosaUJBQWM7OztJQU5ULGVBQTRDO0lBQTVDLDJDQUE0Qzs7OztJQVEvQyxtREFFMEU7SUFBakQsOE9BQXNCOztJQUFDLGlCQUEwQjs7O0lBRGpELDZEQUEwQjs7O0lBdEJ2RCw2QkFDRTtJQUFBLG9EQUNpRjs7SUFDakYsc0NBQ0U7SUFBQSwwQkFBSTtJQUFBLFlBQTJCO0lBQUEsaUJBQUs7SUFDcEMsK0JBQTJCO0lBQUEsWUFBd0I7O0lBQUEscUJBQU07SUFBQSw4QkFBTztJQUFBLGFBQWdCOztJQUFBLGlCQUFRO0lBQUEsaUJBQU87SUFDL0YsNkJBR0U7O0lBQUEsaUNBQVU7SUFBQSxtQ0FBa0I7SUFBQSxpQkFBVztJQUFDLHlCQUMxQztJQUFBLGlCQUFJO0lBQ04saUJBQWM7SUFDZCxpR0FDRTs7SUFPRixpQ0FDRTtJQUFBLDBIQUVnRDs7SUFDbEQsaUJBQVc7SUFDYiwwQkFBZTs7OztJQXhCbUIsZUFBMEM7SUFBMUMsNkVBQTBDO0lBR3BFLGVBQTJCO0lBQTNCLHFGQUEyQjtJQUNKLGVBQXdCO0lBQXhCLCtEQUF3QjtJQUFhLGVBQWdCO0lBQWhCLGtFQUFnQjtJQUc3RSxlQUE4QztJQUE5QyxxR0FBOEM7SUFJdEMsZUFBaUQ7SUFBakQscUVBQWlEO0lBU25DLGVBQXVCO0lBQXZCLDZEQUF1Qjs7O0lBT2xELHFDQUNFO0lBQUEsb0NBQXVCO0lBQUEsb0RBQW9DO0lBQUEsOEJBQVE7SUFBQSxZQUEyQjs7SUFBQSxpQkFBUztJQUFBLGlCQUFDO0lBQUEsaUJBQVc7SUFDckgsaUJBQWdCOzs7SUFEcUQsZUFBMkI7SUFBM0Isa0VBQTJCOztBRHhCbEc7SUFLcUMsbUNBQWlCO0lBTXBELHlCQUNTLEtBQXFCLEVBQ3BCLFFBQXlCLEVBQ3pCLE1BQWMsRUFDZixrQkFBc0MsRUFDYSxRQUFhO1FBTHpFLFlBT0Usa0JBQU0sS0FBSyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxTQVczQztRQWpCUSxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNwQixjQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Ysd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNhLGNBQVEsR0FBUixRQUFRLENBQUs7UUFSekUsU0FBRyxHQUF5QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVlwRCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEVBQUUsRUFBVCxDQUFTLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEQsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEVBQWE7Z0JBQWIsa0JBQWEsRUFBWixjQUFNLEVBQUUsV0FBRztZQUFNLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQ3JDLDZCQUFZLEtBQUssS0FBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUc7WUFDN0QsQ0FBQyxDQUFDO1FBRnFCLENBRXJCLENBQUMsQ0FDSixDQUFDO1FBQ0osS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLG1CQUFJLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLDBDQUFFLFVBQVUsS0FBSSxPQUFPLElBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQzFHLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBUztRQUFkLGlCQTZCQztRQTVCQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixhQUFhLENBQUM7WUFDWixJQUFJLENBQUMsU0FBUztZQUNkLElBQUksQ0FBQyxlQUFlO1NBQ3JCLENBQUM7YUFDQyxJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxVQUFDLEVBQTBCO2dCQUExQixrQkFBMEIsRUFBekIsZ0JBQVEsRUFBRSxzQkFBYztZQUNsQyxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVztnQkFDdkUsT0FBTztvQkFDTCxRQUFRO29CQUNSLGNBQWM7b0JBQ2QsV0FBVztpQkFDWixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxVQUFDLEVBQWdDO2dCQUFoQyxrQkFBZ0MsRUFBL0IsU0FBQyxFQUFFLHNCQUFjLEVBQUUsbUJBQVc7WUFDeEMsT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFBbEgsQ0FBa0gsQ0FDbkgsQ0FDRixDQUFDLFNBQVMsQ0FDVDs7WUFDRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBSSxVQUFVLE9BQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsMENBQUUsTUFBTSxDQUFDLDJCQUF3QixDQUFDLENBQUM7WUFDaEcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFVBQU8sQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQyxFQUNELHNCQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsd0NBQStCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLDBDQUFFLE1BQU0sT0FBRyxDQUFDLENBQUEsRUFBQSxFQUM5RixjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7SUFDTixDQUFDO0lBRU8sZ0NBQU0sR0FBZDtRQUFBLGlCQUtDO1FBSkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0YsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUN0QyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFTyx1Q0FBYSxHQUFyQixVQUFzQixLQUFVLEVBQUUsR0FBUTs7UUFDeEMsSUFBSSxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLE1BQUssV0FBVyxFQUFFO1lBQy9CLGFBQU8sR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLDJDQUFHLE1BQU0sR0FBRztTQUNyQztRQUVELE9BQU8sR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLEVBQUU7SUFDNUIsQ0FBQztrRkF0RVUsZUFBZSx3TEFXSiw2QkFBNkI7d0RBWHhDLGVBQWU7WUNkNUIsZ0VBRUU7O1lBRUYsb0ZBQ0U7O1lBMEJGLGlIQUNFOzs7WUEvQkcsMkRBQTBCO1lBR2pCLGVBQXNEO1lBQXRELDBEQUFzRCxpQkFBQTs7MEJESnBFO0NBcUZDLEFBNUVELENBS3FDLGlCQUFpQixHQXVFckQ7U0F2RVksZUFBZTtrREFBZixlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2Qzs7c0JBWUksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1ldGFkYXRhQ29tcG9uZW50IH0gZnJvbSAnLi4vbWV0YWRhdGEvbWV0YWRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCB0YWtlVW50aWwsIHRhcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTbmFja2JhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbmFja2Jhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERhdGFBZGFwdGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtYWRhcHRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWFkbWluaXN0cmF0aW9uLXVwZGF0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbXBvbmVudCBleHRlbmRzIE1ldGFkYXRhQ29tcG9uZW50IHtcclxuICBmaWVsZHMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuICBkb2MkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgaWQkOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbiAgZW50aXR5VGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgc25hY2tiYXI6IFNuYWNrYmFyU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgZGF0YUFkYXB0ZXJTZXJ2aWNlOiBEYXRhQWRhcHRlclNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCdNQVRfQURNSU5JU1RSQVRJT05fTUVUQURBVEEnKSBwdWJsaWMgbWV0YWRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgc3VwZXIocm91dGUsIGRhdGFBZGFwdGVyU2VydmljZSwgbWV0YWRhdGEpO1xyXG5cclxuICAgIHRoaXMucm91dGUucGFyYW1zLnBpcGUobWFwKHBhcmFtcyA9PiBwYXJhbXMuaWQpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKHRoaXMuaWQkKTtcclxuICAgIHRoaXMuZG9jJCA9IHRoaXMuZ2V0RG9jKCk7XHJcbiAgICB0aGlzLmZpZWxkcyQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmdldEZpZWxkcygpLCB0aGlzLmRvYyRdKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKFtmaWVsZHMsIGRvY10pID0+IGZpZWxkcy5tYXAoZmllbGQgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uZmllbGQsIHZhbHVlOiB0aGlzLmdldEZpZWxkVmFsdWUoZmllbGQsIGRvYykgfTtcclxuICAgICAgICB9KSlcclxuICAgICAgKTtcclxuICAgIHRoaXMuZW50aXR5VGl0bGUkID0gdGhpcy5kb2MkLnBpcGUobWFwKGRvYyA9PiBkb2M/Llt0aGlzLm1ldGFkYXRhJC5nZXRWYWx1ZSgpPy50aXRsZUZpZWxkIHx8ICd0aXRsZSddKSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKGl0ZW06IGFueSkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmckLm5leHQodHJ1ZSk7XHJcblxyXG4gICAgY29tYmluZUxhdGVzdChbXHJcbiAgICAgIHRoaXMubWV0YWRhdGEkLFxyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lJFxyXG4gICAgXSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICBzd2l0Y2hNYXAoKFttZXRhZGF0YSwgY29sbGVjdGlvbk5hbWVdKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzVXBsb2FkcyhpdGVtLCBtZXRhZGF0YSwgJ3VwZGF0ZScpLnBpcGUobWFwKHVwZGF0ZWRJdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAgICAgICB1cGRhdGVkSXRlbVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoW18sIGNvbGxlY3Rpb25OYW1lLCB1cGRhdGVkSXRlbV0pID0+XHJcbiAgICAgICAgICB0aGlzLmRhdGFBZGFwdGVyU2VydmljZS51cGRhdGUoY29sbGVjdGlvbk5hbWUsIHRoaXMuaWQkLmdldFZhbHVlKCksIHRoaXMuZ2V0V2l0aFRpbWVzdGFtcHModXBkYXRlZEl0ZW0sICd1cGRhdGUnKSlcclxuICAgICAgICApXHJcbiAgICAgICkuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc25hY2tiYXIuc3VjY2VzcyhgJHtjYXBpdGFsaXplKHRoaXMubWV0YWRhdGEkLmdldFZhbHVlKCk/LnNpbmdsZSl9IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IWApO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvJHt0aGlzLmNvbGxlY3Rpb25QYXRoJC5nZXRWYWx1ZSgpfS9saXN0YF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zbmFja2Jhci5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yIHVwZGF0aW5nICR7dGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uc2luZ2xlfSFgKSxcclxuICAgICAgICAoKSA9PiB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RG9jKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YUFkYXB0ZXJTZXJ2aWNlLmdldCh0aGlzLmNvbGxlY3Rpb25OYW1lJC5nZXRWYWx1ZSgpLCB0aGlzLmlkJC5nZXRWYWx1ZSgpKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5pc0xvYWRpbmckLm5leHQoZmFsc2UpKSxcclxuICAgICAgc2hhcmVSZXBsYXkoMSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpZWxkVmFsdWUoZmllbGQ6IGFueSwgZG9jOiBhbnkpIHtcclxuICAgIGlmIChmaWVsZD8udHlwZSA9PT0gJ3RpbWVzdGFtcCcpIHtcclxuICAgICAgcmV0dXJuIGRvYz8uW2ZpZWxkPy5uYW1lXT8udG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvYz8uW2ZpZWxkPy5uYW1lXTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImxvYWRpbmctYm94LW92ZXJmbG93XCJcclxuICAgICAqbmdJZj1cImlzTG9hZGluZyQgfCBhc3luY1wiPlxyXG4gIDxtYXQtc3Bpbm5lciBkaWFtZXRlcj1cIjUwXCI+PC9tYXQtc3Bpbm5lcj5cclxuPC9kaXY+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJtZXRhZGF0YSQgfCBhc3luYyBhcyBtZXRhZGF0YTsgZWxzZSBub01ldGFkYXRhXCI+XHJcbiAgPG1hdC1hZG1pbmlzdHJhdGlvbi1icmVhZGNydW1icyBbY29sbGVjdGlvbk5hbWVdPVwiY29sbGVjdGlvbk5hbWUkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwidXBkYXRlXCI+PC9tYXQtYWRtaW5pc3RyYXRpb24tYnJlYWRjcnVtYnM+XHJcbiAgPG1hdC10b29sYmFyIGNsYXNzPVwianVzdGlmeS1iZXR3ZWVuIHRvb2xiYXItbWFpblwiPlxyXG4gICAgPGgxPlVwZGF0ZSB7e21ldGFkYXRhPy5zaW5nbGV9fTwvaDE+XHJcbiAgICA8c3BhbiBjbGFzcz1cImVudGl0eS10aXRsZVwiPnt7ZW50aXR5VGl0bGUkIHwgYXN5bmN9fTxiciAvPjxzbWFsbD4je3tpZCQgfCBhc3luY319PC9zbWFsbD48L3NwYW4+XHJcbiAgICA8YSBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgY29sb3I9XCJ3YXJuXCJcclxuICAgICAgIHJvdXRlckxpbms9XCIve3tjb2xsZWN0aW9uUGF0aCQgfCBhc3luY319L2xpc3RcIj5cclxuICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2JhY2tzcGFjZTwvbWF0LWljb24+IENhbmNlbFxyXG4gICAgPC9hPlxyXG4gIDwvbWF0LXRvb2xiYXI+XHJcbiAgPG1hdC10b29sYmFyICpuZ0lmPVwic3ViQ29sbGVjdGlvbnMkIHwgYXN5bmMgYXMgc3ViQ29sbGVjdGlvbnNcIj5cclxuICAgIDxhICpuZ0Zvcj1cImxldCBzdWJDb2xsZWN0aW9uIG9mIHN1YkNvbGxlY3Rpb25zXCJcclxuICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICBhcmlhLWxhYmVsPVwiTWFuYWdlXCJcclxuICAgICAgIHJvdXRlckxpbms9XCIve3tjb2xsZWN0aW9uTmFtZSQgfCBhc3luY319Ont7aWQkIHwgYXN5bmN9fTp7e3N1YkNvbGxlY3Rpb24/LmlkfX0vbGlzdFwiPlxyXG4gICAgICB7e3N1YkNvbGxlY3Rpb24/LnBsdXJhbCB8IHRpdGxlY2FzZX19XHJcbiAgICA8L2E+XHJcbiAgPC9tYXQtdG9vbGJhcj5cclxuICA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWFkbWluaXN0cmF0aW9uLWZvcm0gKm5nSWY9XCJmaWVsZHMkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwiZmllbGRzJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2F2ZSk9XCJzYXZlKCRldmVudCk7XCI+PC9tYXQtYWRtaW5pc3RyYXRpb24tZm9ybT5cclxuICA8L21hdC1jYXJkPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbm9NZXRhZGF0YT5cclxuICA8bWF0LWNoaXAtbGlzdD5cclxuICAgIDxtYXQtY2hpcCBjb2xvcj1cIndhcm5cIj5ObyBlbnRpdHkgbWV0YWRhdGEgZGVmaW5lZCBmb3ImbmJzcDs8c3Ryb25nPnt7Y29sbGVjdGlvbk5hbWUkIHwgYXN5bmN9fTwvc3Ryb25nPiE8L21hdC1jaGlwPlxyXG4gIDwvbWF0LWNoaXAtbGlzdD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19