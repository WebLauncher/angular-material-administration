import { __assign, __extends, __read } from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { map, switchMap, shareReplay, tap, withLatestFrom } from 'rxjs/operators';
import { pickBy } from 'lodash';
import { MetadataComponent } from '../metadata/metadata.component';
import { capitalize } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/value-format.service";
import * as i3 from "../../services/snackbar.service";
import * as i4 from "../../services/data-adapter.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/progress-spinner";
import * as i7 from "../breadcrumbs/breadcrumbs.component";
import * as i8 from "@angular/material/toolbar";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/table";
import * as i12 from "@angular/material/menu";
import * as i13 from "@angular/material/card";
import * as i14 from "@angular/material/chips";
function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "mat-spinner", 4);
    i0.ɵɵelementEnd();
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r14 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r14 == null ? null : column_r14.label, " ");
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 25);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r19 = i0.ɵɵnextContext().$implicit;
    var column_r14 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(column_r14 == null ? null : column_r14.style == null ? null : column_r14.style.list);
    i0.ɵɵproperty("src", i0.ɵɵpipeBind1(2, 4, ctx_r20.getValue(element_r19, column_r14 == null ? null : column_r14.id)), i0.ɵɵsanitizeUrl)("alt", column_r14 == null ? null : column_r14.id);
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 26);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r19 = i0.ɵɵnextContext().$implicit;
    var column_r14 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(column_r14 == null ? null : column_r14.style == null ? null : column_r14.style.list);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, ctx_r21.getValue(element_r19, column_r14 == null ? null : column_r14.id)), i0.ɵɵsanitizeHtml);
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelementContainerStart(1, 22);
    i0.ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_2_Template, 3, 6, "ng-container", 23);
    i0.ɵɵtemplate(3, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_3_Template, 3, 5, "ng-container", 24);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r14 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", column_r14 == null ? null : column_r14.format);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "image");
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 19);
    i0.ɵɵtemplate(1, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_th_1_Template, 2, 1, "th", 13);
    i0.ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_Template, 4, 2, "td", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("matColumnDef", column_r14 == null ? null : column_r14.id);
} }
function ListComponent_ng_container_2_table_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (column_r14 == null ? null : column_r14.id) != "actions" && (column_r14 == null ? null : column_r14.id) != "entities");
} }
function ListComponent_ng_container_2_table_11_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵtext(1, "Manage");
    i0.ɵɵelementEnd();
} }
function ListComponent_ng_container_2_table_11_td_6_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var subCollection_r31 = ctx.$implicit;
    var element_r28 = i0.ɵɵnextContext().$implicit;
    var ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate3("routerLink", "/", i0.ɵɵpipeBind1(1, 4, ctx_r30.collectionName$), ":", element_r28.id, ":", subCollection_r31 == null ? null : subCollection_r31.id, "/list");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 6, subCollection_r31 == null ? null : subCollection_r31.plural), " ");
} }
function ListComponent_ng_container_2_table_11_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelementStart(1, "button", 27);
    i0.ɵɵtext(2, "More...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-menu", null, 28);
    i0.ɵɵtemplate(5, ListComponent_ng_container_2_table_11_td_6_button_5_Template, 4, 8, "button", 29);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r29 = i0.ɵɵreference(4);
    var ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r29);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 2, ctx_r9.subCollections$));
} }
function ListComponent_ng_container_2_table_11_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 20);
} }
function ListComponent_ng_container_2_table_11_td_9_Template(rf, ctx) { if (rf & 1) {
    var _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelementStart(1, "button", 31);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 32);
    i0.ɵɵlistener("click", function ListComponent_ng_container_2_table_11_td_9_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r35); var element_r33 = ctx.$implicit; var ctx_r34 = i0.ɵɵnextContext(3); return ctx_r34.delete(element_r33); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r33 = ctx.$implicit;
    var ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("routerLink", "/", i0.ɵɵpipeBind1(2, 2, ctx_r11.collectionPath$), "/update/", element_r33.id, "");
} }
function ListComponent_ng_container_2_table_11_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 33);
} }
function ListComponent_ng_container_2_table_11_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 34);
} }
function ListComponent_ng_container_2_table_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 10);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_Template, 2, 1, "ng-container", 11);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementContainerStart(4, 12);
    i0.ɵɵtemplate(5, ListComponent_ng_container_2_table_11_th_5_Template, 2, 0, "th", 13);
    i0.ɵɵtemplate(6, ListComponent_ng_container_2_table_11_td_6_Template, 7, 4, "td", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(7, 15);
    i0.ɵɵtemplate(8, ListComponent_ng_container_2_table_11_th_8_Template, 1, 0, "th", 13);
    i0.ɵɵtemplate(9, ListComponent_ng_container_2_table_11_td_9_Template, 8, 4, "td", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(10, ListComponent_ng_container_2_table_11_tr_10_Template, 1, 0, "tr", 16);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵtemplate(12, ListComponent_ng_container_2_table_11_tr_12_Template, 1, 0, "tr", 17);
    i0.ɵɵpipe(13, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("dataSource", i0.ɵɵpipeBind1(1, 4, ctx_r5.list$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 6, ctx_r5.displayedColumns$));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("matHeaderRowDef", i0.ɵɵpipeBind1(11, 8, ctx_r5.displayedColumnsNames$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpipeBind1(13, 10, ctx_r5.displayedColumnsNames$));
} }
function ListComponent_ng_container_2_mat_card_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "a", 35);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var metadata_r4 = i0.ɵɵnextContext().ngIf;
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" No ", metadata_r4 == null ? null : metadata_r4.plural, " added. ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("routerLink", "/", i0.ɵɵpipeBind1(3, 3, ctx_r6.collectionPath$), "/add");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Add ", metadata_r4 == null ? null : metadata_r4.single, "");
} }
function ListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "mat-administration-breadcrumbs", 5);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "mat-toolbar", 6);
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 7);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ListComponent_ng_container_2_table_11_Template, 14, 12, "table", 8);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵtemplate(13, ListComponent_ng_container_2_mat_card_13_Template, 5, 5, "mat-card", 9);
    i0.ɵɵpipe(14, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var metadata_r4 = ctx.ngIf;
    var ctx_r1 = i0.ɵɵnextContext();
    var tmp_4_0 = null;
    var currVal_4 = (tmp_4_0 = i0.ɵɵpipeBind1(12, 10, ctx_r1.list$)) == null ? null : tmp_4_0.length;
    var tmp_5_0 = null;
    var currVal_5 = !((tmp_5_0 = i0.ɵɵpipeBind1(14, 12, ctx_r1.list$)) == null ? null : tmp_5_0.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("collectionName", i0.ɵɵpipeBind1(2, 6, ctx_r1.collectionName$));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Manage ", metadata_r4 == null ? null : metadata_r4.plural, "");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("routerLink", "/", i0.ɵɵpipeBind1(7, 8, ctx_r1.collectionPath$), "/add");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Add ", metadata_r4 == null ? null : metadata_r4.single, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", currVal_4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", currVal_5);
} }
function ListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip-list");
    i0.ɵɵelementStart(1, "mat-chip", 36);
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
var ListComponent = /** @class */ (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(route, valueFormatService, snackbar, dataAdapterService, metadata) {
        var _this = _super.call(this, route, dataAdapterService, metadata) || this;
        _this.route = route;
        _this.valueFormatService = valueFormatService;
        _this.snackbar = snackbar;
        _this.dataAdapterService = dataAdapterService;
        _this.metadata = metadata;
        _this.displayedColumns$ = _this.getDisplayedColumns();
        _this.displayedColumnsNames$ = _this.displayedColumns$.pipe(map(function (columns) { return columns.map(function (column) { return column === null || column === void 0 ? void 0 : column.id; }); }));
        _this.list$ = _this.collectionName$.pipe(switchMap(function (collection) { var _a; return _this.dataAdapterService.list(collection, ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.idField) || 'id'); }), tap(function () { return _this.isLoading$.next(false); }), shareReplay(1));
        return _this;
    }
    ListComponent.prototype.getValue = function (element, column) {
        var _this = this;
        return this.metadata$.pipe(map(function (metadata) { var _a; return _this.valueFormatService.transform(element[column], (_a = metadata === null || metadata === void 0 ? void 0 : metadata.fields[column]) === null || _a === void 0 ? void 0 : _a.type, metadata === null || metadata === void 0 ? void 0 : metadata.fields[column]); }));
    };
    ListComponent.prototype.delete = function (element) {
        var _this = this;
        this.isLoading$.next(true);
        this.dataAdapterService.delete(this.collectionName$.getValue(), element === null || element === void 0 ? void 0 : element.id)
            .subscribe(function () { var _a; return _this.snackbar.success(capitalize((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + " added successfully!"); }, function () { var _a; return _this.snackbar.error("There was an error adding " + ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + "!"); }, function () { return _this.isLoading$.next(false); });
    };
    ListComponent.prototype.getDisplayedColumns = function () {
        var _this = this;
        return this.metadata$.pipe(withLatestFrom(this.subCollections$), map(function (_a) {
            var _b = __read(_a, 2), metadata = _b[0], subCollections = _b[1];
            var collumns = _this.getDisplayableColumns(metadata === null || metadata === void 0 ? void 0 : metadata.fields);
            if (subCollections) {
                collumns.push({ id: 'entities', label: 'Manage' });
            }
            collumns.push({ id: 'actions', label: 'Actions' });
            return collumns;
        }), shareReplay(1));
    };
    ListComponent.prototype.getDisplayableColumns = function (columns) {
        var _this = this;
        if (!columns) {
            return [];
        }
        return Object.keys(pickBy(columns, function (col) { return col && !(col === null || col === void 0 ? void 0 : col.hideInList); })).map(function (column) {
            var _a, _b;
            return __assign(__assign({}, columns[column]), { label: ((_a = columns[column]) === null || _a === void 0 ? void 0 : _a.label) || _this.getFieldLabel({ label: column }), id: ((_b = columns[column]) === null || _b === void 0 ? void 0 : _b.id) || column });
        });
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ValueFormatService), i0.ɵɵdirectiveInject(i3.SnackbarService), i0.ɵɵdirectiveInject(i4.DataAdapterService), i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["mat-administration-list"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "list", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["matColumnDef", "entities"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "list-image", 3, "src", "alt"], [3, "innerHTML"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["entitiesMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Edit", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-button", "", "color", "primary", 3, "routerLink"], ["color", "warn"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListComponent_div_0_Template, 2, 0, "div", 0);
            i0.ɵɵpipe(1, "async");
            i0.ɵɵtemplate(2, ListComponent_ng_container_2_Template, 15, 14, "ng-container", 1);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵtemplate(4, ListComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(5);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 3, ctx.isLoading$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
        } }, directives: [i5.NgIf, i6.MatSpinner, i7.BreadcrumbsComponent, i8.MatToolbar, i9.MatButton, i1.RouterLink, i10.MatIcon, i11.MatTable, i5.NgForOf, i11.MatColumnDef, i11.MatHeaderCellDef, i11.MatCellDef, i11.MatHeaderRowDef, i11.MatRowDef, i11.MatHeaderCell, i11.MatCell, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i12.MatMenuTrigger, i12._MatMenu, i12.MatMenuItem, i11.MatHeaderRow, i11.MatRow, i13.MatCard, i9.MatAnchor, i1.RouterLinkWithHref, i14.MatChipList, i14.MatChip], pipes: [i5.AsyncPipe, i5.TitleCasePipe], styles: ["[_nghost-%COMP%]{position:relative;display:block}table[_ngcontent-%COMP%]{width:100%}.list-image[_ngcontent-%COMP%]{max-height:5rem;padding:1rem}.mat-column-id[_ngcontent-%COMP%]{max-width:2rem;overflow:hidden;text-overflow:ellipsis;padding-right:1rem}"] });
    return ListComponent;
}(MetadataComponent));
export { ListComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ValueFormatService }, { type: i3.SnackbarService }, { type: i4.DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNScEMsOEJBRUU7SUFBQSxpQ0FBeUM7SUFDM0MsaUJBQU07OztJQW1CRSw4QkFDdUI7SUFBQSxZQUFrQjtJQUFBLGlCQUFLOzs7SUFBdkIsZUFBa0I7SUFBbEIsNkVBQWtCOzs7SUFJckMsNkJBQ0U7SUFBQSwwQkFJRjs7SUFBQSwwQkFBZTs7Ozs7SUFGUixlQUE2QjtJQUE3QixrR0FBNkI7SUFGN0Isc0lBQTZDLGtEQUFBOzs7SUFNcEQsNkJBQ0U7SUFBQSwyQkFDaUU7O0lBQ25FLDBCQUFlOzs7OztJQUZQLGVBQTZCO0lBQTdCLGtHQUE2QjtJQUM3Qiw2SUFBbUQ7OztJQVovRCw4QkFFRTtJQUFBLGlDQUNFO0lBQUEsNElBQ0U7SUFNRiw0SUFDRTtJQUdKLDBCQUFlO0lBQ2pCLGlCQUFLOzs7SUFiVyxlQUEyQjtJQUEzQix3RUFBMkI7SUFDekIsZUFBdUI7SUFBdkIsc0NBQXVCOzs7SUFQM0MsaUNBRUU7SUFBQSxtSEFDdUI7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LENBQUM7YUFDckM7O3NCQVdJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgc2hhcmVSZXBsYXksIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFZhbHVlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZhbHVlLWZvcm1hdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcGlja0J5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTWV0YWRhdGFDb21wb25lbnQgfSBmcm9tICcuLi9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbmFja2JhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbmFja2Jhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERhdGFBZGFwdGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtYWRhcHRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWFkbWluaXN0cmF0aW9uLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBNZXRhZGF0YUNvbXBvbmVudCB7XHJcbiAgZGlzcGxheWVkQ29sdW1ucyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG4gIGRpc3BsYXllZENvbHVtbnNOYW1lcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG4gIGxpc3QkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSB2YWx1ZUZvcm1hdFNlcnZpY2U6IFZhbHVlRm9ybWF0U2VydmljZSxcclxuICAgIHByaXZhdGUgc25hY2tiYXI6IFNuYWNrYmFyU2VydmljZSxcclxuICAgIHB1YmxpYyBkYXRhQWRhcHRlclNlcnZpY2U6IERhdGFBZGFwdGVyU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ01BVF9BRE1JTklTVFJBVElPTl9NRVRBREFUQScpIHB1YmxpYyBtZXRhZGF0YTogYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcihyb3V0ZSwgZGF0YUFkYXB0ZXJTZXJ2aWNlLCBtZXRhZGF0YSk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zJCA9IHRoaXMuZ2V0RGlzcGxheWVkQ29sdW1ucygpO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zTmFtZXMkID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zJC5waXBlKG1hcChjb2x1bW5zID0+IGNvbHVtbnMubWFwKGNvbHVtbiA9PiBjb2x1bW4/LmlkKSkpO1xyXG4gICAgdGhpcy5saXN0JCA9IHRoaXMuY29sbGVjdGlvbk5hbWUkLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcChjb2xsZWN0aW9uID0+IHRoaXMuZGF0YUFkYXB0ZXJTZXJ2aWNlLmxpc3QoY29sbGVjdGlvbiwgdGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uaWRGaWVsZCB8fCAnaWQnKSksXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSkpLFxyXG4gICAgICBzaGFyZVJlcGxheSgxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKGVsZW1lbnQsIGNvbHVtbikge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGEkLnBpcGUobWFwKFxyXG4gICAgICBtZXRhZGF0YSA9PiB0aGlzLnZhbHVlRm9ybWF0U2VydmljZS50cmFuc2Zvcm0oZWxlbWVudFtjb2x1bW5dLCBtZXRhZGF0YT8uZmllbGRzW2NvbHVtbl0/LnR5cGUsIG1ldGFkYXRhPy5maWVsZHNbY29sdW1uXSlcclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nJC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kYXRhQWRhcHRlclNlcnZpY2UuZGVsZXRlKHRoaXMuY29sbGVjdGlvbk5hbWUkLmdldFZhbHVlKCksIGVsZW1lbnQ/LmlkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHRoaXMuc25hY2tiYXIuc3VjY2VzcyhgJHtjYXBpdGFsaXplKHRoaXMubWV0YWRhdGEkLmdldFZhbHVlKCk/LnNpbmdsZSl9IGFkZGVkIHN1Y2Nlc3NmdWxseSFgKSxcclxuICAgICAgICAoKSA9PiB0aGlzLnNuYWNrYmFyLmVycm9yKGBUaGVyZSB3YXMgYW4gZXJyb3IgYWRkaW5nICR7dGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uc2luZ2xlfSFgKSxcclxuICAgICAgICAoKSA9PiB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGlzcGxheWVkQ29sdW1ucygpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhJC5waXBlKFxyXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLnN1YkNvbGxlY3Rpb25zJCksXHJcbiAgICAgIG1hcCgoW21ldGFkYXRhLCBzdWJDb2xsZWN0aW9uc10pID0+IHtcclxuICAgICAgICBjb25zdCBjb2xsdW1ucyA9IHRoaXMuZ2V0RGlzcGxheWFibGVDb2x1bW5zKG1ldGFkYXRhPy5maWVsZHMpO1xyXG4gICAgICAgIGlmIChzdWJDb2xsZWN0aW9ucykge1xyXG4gICAgICAgICAgY29sbHVtbnMucHVzaCh7IGlkOiAnZW50aXRpZXMnLCBsYWJlbDogJ01hbmFnZScgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGx1bW5zLnB1c2goeyBpZDogJ2FjdGlvbnMnLCBsYWJlbDogJ0FjdGlvbnMnIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29sbHVtbnM7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzaGFyZVJlcGxheSgxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGlzcGxheWFibGVDb2x1bW5zKGNvbHVtbnMpIHtcclxuICAgIGlmICghY29sdW1ucykge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBpY2tCeShjb2x1bW5zLCBjb2wgPT4gY29sICYmICFjb2w/LmhpZGVJbkxpc3QpKS5tYXAoY29sdW1uID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jb2x1bW5zW2NvbHVtbl0sXHJcbiAgICAgICAgbGFiZWw6IGNvbHVtbnNbY29sdW1uXT8ubGFiZWwgfHwgdGhpcy5nZXRGaWVsZExhYmVsKHsgbGFiZWw6IGNvbHVtbiB9KSxcclxuICAgICAgICBpZDogY29sdW1uc1tjb2x1bW5dPy5pZCB8fCBjb2x1bW5cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibG9hZGluZy1ib3gtb3ZlcmZsb3dcIlxyXG4gICAgICpuZ0lmPVwiaXNMb2FkaW5nJCB8IGFzeW5jXCI+XHJcbiAgPG1hdC1zcGlubmVyIGRpYW1ldGVyPVwiNTBcIj48L21hdC1zcGlubmVyPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1ldGFkYXRhJCB8IGFzeW5jIGFzIG1ldGFkYXRhOyBlbHNlIG5vTWV0YWRhdGFcIj5cclxuICA8bWF0LWFkbWluaXN0cmF0aW9uLWJyZWFkY3J1bWJzIFtjb2xsZWN0aW9uTmFtZV09XCJjb2xsZWN0aW9uTmFtZSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJsaXN0XCI+PC9tYXQtYWRtaW5pc3RyYXRpb24tYnJlYWRjcnVtYnM+XHJcbiAgPG1hdC10b29sYmFyIGNsYXNzPVwianVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICA8aDE+TWFuYWdlIHt7bWV0YWRhdGE/LnBsdXJhbH19PC9oMT5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgcm91dGVyTGluaz1cIi97e2NvbGxlY3Rpb25QYXRoJCB8IGFzeW5jfX0vYWRkXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPiBBZGQge3ttZXRhZGF0YT8uc2luZ2xlfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvbWF0LXRvb2xiYXI+XHJcbiAgPHRhYmxlIG1hdC10YWJsZVxyXG4gICAgICAgICAqbmdJZj1cIihsaXN0JCB8IGFzeW5jKT8ubGVuZ3RoXCJcclxuICAgICAgICAgW2RhdGFTb3VyY2VdPVwibGlzdCQgfCBhc3luY1wiXHJcbiAgICAgICAgIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGRpc3BsYXllZENvbHVtbnMkIHwgYXN5bmNcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbj8uaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sdW1uPy5pZCAhPSAnYWN0aW9ucycgJiYgY29sdW1uPy5pZCAhPSAnZW50aXRpZXMnXCI+XHJcbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbFxyXG4gICAgICAgICAgICAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x1bW4/LmxhYmVsfX0gPC90aD5cclxuICAgICAgICA8dGQgbWF0LWNlbGxcclxuICAgICAgICAgICAgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29sdW1uPy5mb3JtYXRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2ltYWdlJ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgW3NyY109XCJnZXRWYWx1ZShlbGVtZW50LCBjb2x1bW4/LmlkKSB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwiY29sdW1uPy5zdHlsZT8ubGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICBbYWx0XT1cImNvbHVtbj8uaWRcIiAvPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgICAgICA8c3BhbiBbc3R5bGVdPVwiY29sdW1uPy5zdHlsZT8ubGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJnZXRWYWx1ZShlbGVtZW50LCBjb2x1bW4/LmlkKSB8IGFzeW5jXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJlbnRpdGllc1wiPlxyXG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsXHJcbiAgICAgICAgICAqbWF0SGVhZGVyQ2VsbERlZj5NYW5hZ2U8L3RoPlxyXG4gICAgICA8dGQgbWF0LWNlbGxcclxuICAgICAgICAgICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwiZW50aXRpZXNNZW51XCI+TW9yZS4uLjwvYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtbWVudSAjZW50aXRpZXNNZW51PVwibWF0TWVudVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgc3ViQ29sbGVjdGlvbiBvZiBzdWJDb2xsZWN0aW9ucyQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgIG1hdC1tZW51LWl0ZW1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1hbmFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCIve3tjb2xsZWN0aW9uTmFtZSQgfCBhc3luY319Ont7ZWxlbWVudC5pZH19Ont7c3ViQ29sbGVjdGlvbj8uaWR9fS9saXN0XCI+XHJcbiAgICAgICAgICAgIHt7c3ViQ29sbGVjdGlvbj8ucGx1cmFsIHwgdGl0bGVjYXNlfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LW1lbnU+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImFjdGlvbnNcIj5cclxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbFxyXG4gICAgICAgICAgKm1hdEhlYWRlckNlbGxEZWY+PC90aD5cclxuICAgICAgPHRkIG1hdC1jZWxsXHJcbiAgICAgICAgICAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCIve3tjb2xsZWN0aW9uUGF0aCQgfCBhc3luY319L3VwZGF0ZS97e2VsZW1lbnQuaWR9fVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGVsZXRlKGVsZW1lbnQpXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90ZD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDx0ciBtYXQtaGVhZGVyLXJvd1xyXG4gICAgICAgICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zTmFtZXMkIHwgYXN5bmNcIj48L3RyPlxyXG4gICAgPHRyIG1hdC1yb3dcclxuICAgICAgICAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc05hbWVzJCB8IGFzeW5jO1wiPjwvdHI+XHJcbiAgPC90YWJsZT5cclxuXHJcbiAgPG1hdC1jYXJkICpuZ0lmPVwiIShsaXN0JCB8IGFzeW5jKT8ubGVuZ3RoXCI+XHJcbiAgICBObyB7e21ldGFkYXRhPy5wbHVyYWx9fSBhZGRlZC4gPGEgbWF0LWJ1dHRvblxyXG4gICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgIHJvdXRlckxpbms9XCIve3tjb2xsZWN0aW9uUGF0aCQgfCBhc3luY319L2FkZFwiPkFkZCB7e21ldGFkYXRhPy5zaW5nbGV9fTwvYT5cclxuICA8L21hdC1jYXJkPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbm9NZXRhZGF0YT5cclxuICA8bWF0LWNoaXAtbGlzdD5cclxuICAgIDxtYXQtY2hpcCBjb2xvcj1cIndhcm5cIj5ObyBlbnRpdHkgbWV0YWRhdGEgZGVmaW5lZCBmb3ImbmJzcDs8c3Ryb25nPnt7Y29sbGVjdGlvbk5hbWUkIHwgYXN5bmN9fTwvc3Ryb25nPiE8L21hdC1jaGlwPlxyXG4gIDwvbWF0LWNoaXAtbGlzdD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19