import { __extends, __read } from "tslib";
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
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-administration-form", 9);
    i0.ɵɵlistener("save", function AddComponent_ng_container_2_mat_administration_form_12_Template_mat_administration_form_save_0_listener($event) { i0.ɵɵrestoreView(_r7); var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.save($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(2);
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
    var metadata_r4 = ctx.ngIf;
    var ctx_r1 = i0.ɵɵnextContext();
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
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
} }
var AddComponent = /** @class */ (function (_super) {
    __extends(AddComponent, _super);
    function AddComponent(route, snackbar, router, dataAdapterService, metadata) {
        var _this = _super.call(this, route, dataAdapterService, metadata) || this;
        _this.route = route;
        _this.snackbar = snackbar;
        _this.router = router;
        _this.dataAdapterService = dataAdapterService;
        _this.metadata = metadata;
        _this.fields$ = _this.getFields().pipe(tap(function () { _this.isLoading$.next(false); }));
        return _this;
    }
    AddComponent.prototype.save = function (item) {
        var _this = this;
        this.isLoading$.next(true);
        combineLatest([
            this.metadata$,
            this.collectionName$
        ])
            .pipe(take(1), switchMap(function (_a) {
            var _b = __read(_a, 2), metadata = _b[0], collectionName = _b[1];
            return _this.processUploads(item, metadata, 'add').pipe(map(function (updatedItem) {
                return [
                    metadata,
                    collectionName,
                    updatedItem
                ];
            }));
        }), switchMap(function (_a) {
            var _b = __read(_a, 3), _ = _b[0], collectionName = _b[1], updatedItem = _b[2];
            return _this.dataAdapterService.add(collectionName, _this.getWithTimestamps(updatedItem, 'add'));
        })).subscribe(function () {
            var _a;
            _this.snackbar.success(capitalize((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + " added successfully!");
            _this.router.navigate(["/" + _this.collectionPath$.getValue() + "/list"]);
        }, function () { var _a; return _this.snackbar.error("There was an error adding " + ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + "!"); }, function () { return _this.isLoading$.next(false); });
    };
    AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.SnackbarService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i3.DataAdapterService), i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    AddComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddComponent, selectors: [["mat-administration-add"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "add", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [3, "fields", "save", 4, "ngIf"], [3, "fields", "save"], ["color", "warn"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AddComponent_div_0_Template, 2, 0, "div", 0);
            i0.ɵɵpipe(1, "async");
            i0.ɵɵtemplate(2, AddComponent_ng_container_2_Template, 14, 10, "ng-container", 1);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵtemplate(4, AddComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(5);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 3, ctx.isLoading$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
        } }, directives: [i4.NgIf, i5.MatSpinner, i6.BreadcrumbsComponent, i7.MatToolbar, i8.MatAnchor, i1.RouterLinkWithHref, i9.MatIcon, i10.MatCard, i11.FormComponent, i12.MatChipList, i12.MatChip], pipes: [i4.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;position:relative}"] });
    return AddComponent;
}(MetadataComponent));
export { AddComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdGVyaWFsLWFkbWluaXN0cmF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWRkL2FkZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9hZGQvYWRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbkUsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDTnBDLDhCQUVFO0lBQUEsaUNBQXlDO0lBQzNDLGlCQUFNOzs7O0lBYUYsa0RBRTBFO0lBQWpELHdPQUFzQjs7SUFBQyxpQkFBMEI7OztJQUZqRCw2REFBMEI7OztJQVp2RCw2QkFDRTtJQUFBLG9EQUM4RTs7SUFDOUUsc0NBQ0U7SUFBQSwwQkFBSTtJQUFBLFlBQXdCO0lBQUEsaUJBQUs7SUFDakMsNEJBR0U7O0lBQUEsZ0NBQVU7SUFBQSxrQ0FBa0I7SUFBQSxpQkFBVztJQUFDLHlCQUMxQztJQUFBLGlCQUFJO0lBQ04saUJBQWM7SUFDZCxpQ0FDRTtJQUFBLHNIQUVnRDs7SUFDbEQsaUJBQVc7SUFDYiwwQkFBZTs7OztJQWZtQixlQUEwQztJQUExQyw2RUFBMEM7SUFHcEUsZUFBd0I7SUFBeEIsa0ZBQXdCO0lBR3pCLGVBQThDO0lBQTlDLG1HQUE4QztJQU14QixlQUF1QjtJQUF2Qiw0REFBdUI7OztJQU1sRCxxQ0FDRTtJQUFBLG9DQUF1QjtJQUFBLG9E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QVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQzs7c0JBU0ksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWV0YWRhdGFDb21wb25lbnQgfSBmcm9tICcuLi9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlLCB0YXAsIHN3aXRjaE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTbmFja2JhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbmFja2Jhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERhdGFBZGFwdGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtYWRhcHRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1tdXRhYmxlIH0gZnJvbSAndHlwZXMvaW1tdXRhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWFkbWluaXN0cmF0aW9uLWFkZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZENvbXBvbmVudCBleHRlbmRzIE1ldGFkYXRhQ29tcG9uZW50IHtcclxuICBmaWVsZHMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBzbmFja2JhcjogU25hY2tiYXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHB1YmxpYyBkYXRhQWRhcHRlclNlcnZpY2U6IERhdGFBZGFwdGVyU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ01BVF9BRE1JTklTVFJBVElPTl9NRVRBREFUQScpIHB1YmxpYyBtZXRhZGF0YTogSW1tdXRhYmxlPGFueT5cclxuICApIHtcclxuICAgIHN1cGVyKHJvdXRlLCBkYXRhQWRhcHRlclNlcnZpY2UsIG1ldGFkYXRhKTtcclxuXHJcbiAgICB0aGlzLmZpZWxkcyQgPSB0aGlzLmdldEZpZWxkcygpLnBpcGUodGFwKCgpID0+IHsgdGhpcy5pc0xvYWRpbmckLm5leHQoZmFsc2UpOyB9KSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKGl0ZW06IGFueSkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmckLm5leHQodHJ1ZSk7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFtcclxuICAgICAgdGhpcy5tZXRhZGF0YSQsXHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbk5hbWUkXHJcbiAgICBdKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoW21ldGFkYXRhLCBjb2xsZWN0aW9uTmFtZV0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NVcGxvYWRzKGl0ZW0sIG1ldGFkYXRhLCAnYWRkJykucGlwZShtYXAodXBkYXRlZEl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICAgIHVwZGF0ZWRJdGVtXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3dpdGNoTWFwKChbXywgY29sbGVjdGlvbk5hbWUsIHVwZGF0ZWRJdGVtXSkgPT5cclxuICAgICAgICAgIHRoaXMuZGF0YUFkYXB0ZXJTZXJ2aWNlLmFkZChjb2xsZWN0aW9uTmFtZSwgdGhpcy5nZXRXaXRoVGltZXN0YW1wcyh1cGRhdGVkSXRlbSwgJ2FkZCcpKVxyXG4gICAgICAgIClcclxuICAgICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zbmFja2Jhci5zdWNjZXNzKGAke2NhcGl0YWxpemUodGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uc2luZ2xlKX0gYWRkZWQgc3VjY2Vzc2Z1bGx5IWApO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvJHt0aGlzLmNvbGxlY3Rpb25QYXRoJC5nZXRWYWx1ZSgpfS9saXN0YF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zbmFja2Jhci5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yIGFkZGluZyAke3RoaXMubWV0YWRhdGEkLmdldFZhbHVlKCk/LnNpbmdsZX0hYCksXHJcbiAgICAgICAgKCkgPT4gdGhpcy5pc0xvYWRpbmckLm5leHQoZmFsc2UpXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJsb2FkaW5nLWJveC1vdmVyZmxvd1wiXHJcbiAgICAgKm5nSWY9XCJpc0xvYWRpbmckIHwgYXN5bmNcIj5cclxuICA8bWF0LXNwaW5uZXIgZGlhbWV0ZXI9XCI1MFwiPjwvbWF0LXNwaW5uZXI+XHJcbjwvZGl2PlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibWV0YWRhdGEkIHwgYXN5bmMgYXMgbWV0YWRhdGE7IGVsc2Ugbm9NZXRhZGF0YVwiPlxyXG4gIDxtYXQtYWRtaW5pc3RyYXRpb24tYnJlYWRjcnVtYnMgW2NvbGxlY3Rpb25OYW1lXT1cImNvbGxlY3Rpb25OYW1lJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImFkZFwiPjwvbWF0LWFkbWluaXN0cmF0aW9uLWJyZWFkY3J1bWJzPlxyXG4gIDxtYXQtdG9vbGJhciBjbGFzcz1cImp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgPGgxPkFkZCB7e21ldGFkYXRhPy5zaW5nbGV9fTwvaDE+XHJcbiAgICA8YSBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgY29sb3I9XCJ3YXJuXCJcclxuICAgICAgIHJvdXRlckxpbms9XCIve3tjb2xsZWN0aW9uUGF0aCQgfCBhc3luY319L2xpc3RcIj5cclxuICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2JhY2tzcGFjZTwvbWF0LWljb24+IENhbmNlbFxyXG4gICAgPC9hPlxyXG4gIDwvbWF0LXRvb2xiYXI+XHJcbiAgPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1hZG1pbmlzdHJhdGlvbi1mb3JtIFtmaWVsZHNdPVwiZmllbGRzJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkcyQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNhdmUpPVwic2F2ZSgkZXZlbnQpO1wiPjwvbWF0LWFkbWluaXN0cmF0aW9uLWZvcm0+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI25vTWV0YWRhdGE+XHJcbiAgPG1hdC1jaGlwLWxpc3Q+XHJcbiAgICA8bWF0LWNoaXAgY29sb3I9XCJ3YXJuXCI+Tm8gZW50aXR5IG1ldGFkYXRhIGRlZmluZWQgZm9yJm5ic3A7PHN0cm9uZz57e2NvbGxlY3Rpb25OYW1lJCB8IGFzeW5jfX08L3N0cm9uZz4hPC9tYXQtY2hpcD5cclxuICA8L21hdC1jaGlwLWxpc3Q+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==