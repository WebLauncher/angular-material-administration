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
    const column_r14 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r14 == null ? null : column_r14.label, " ");
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 25);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r19 = i0.ɵɵnextContext().$implicit;
    const column_r14 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
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
    const element_r19 = i0.ɵɵnextContext().$implicit;
    const column_r14 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(3);
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
    const column_r14 = i0.ɵɵnextContext(2).$implicit;
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
    const column_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("matColumnDef", column_r14 == null ? null : column_r14.id);
} }
function ListComponent_ng_container_2_table_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r14 = ctx.$implicit;
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
    const subCollection_r31 = ctx.$implicit;
    const element_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r30 = i0.ɵɵnextContext(3);
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
    const _r29 = i0.ɵɵreference(4);
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r29);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 2, ctx_r9.subCollections$));
} }
function ListComponent_ng_container_2_table_11_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 20);
} }
function ListComponent_ng_container_2_table_11_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelementStart(1, "button", 31);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 32);
    i0.ɵɵlistener("click", function ListComponent_ng_container_2_table_11_td_9_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r35); const element_r33 = ctx.$implicit; const ctx_r34 = i0.ɵɵnextContext(3); return ctx_r34.delete(element_r33); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(3);
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
    const ctx_r5 = i0.ɵɵnextContext(2);
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
    const metadata_r4 = i0.ɵɵnextContext().ngIf;
    const ctx_r6 = i0.ɵɵnextContext();
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
    const metadata_r4 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    var tmp_4_0 = null;
    const currVal_4 = (tmp_4_0 = i0.ɵɵpipeBind1(12, 10, ctx_r1.list$)) == null ? null : tmp_4_0.length;
    var tmp_5_0 = null;
    const currVal_5 = !((tmp_5_0 = i0.ɵɵpipeBind1(14, 12, ctx_r1.list$)) == null ? null : tmp_5_0.length);
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
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
} }
export class ListComponent extends MetadataComponent {
    constructor(route, valueFormatService, snackbar, dataAdapterService, metadata) {
        super(route, dataAdapterService, metadata);
        this.route = route;
        this.valueFormatService = valueFormatService;
        this.snackbar = snackbar;
        this.dataAdapterService = dataAdapterService;
        this.metadata = metadata;
        this.displayedColumns$ = this.getDisplayedColumns();
        this.displayedColumnsNames$ = this.displayedColumns$.pipe(map(columns => columns.map(column => column === null || column === void 0 ? void 0 : column.id)));
        this.list$ = this.collectionName$.pipe(switchMap(collection => { var _a; return this.dataAdapterService.list(collection, ((_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.idField) || 'id'); }), tap(() => this.isLoading$.next(false)), shareReplay(1));
    }
    getValue(element, column) {
        return this.metadata$.pipe(map(metadata => { var _a; return this.valueFormatService.transform(element[column], (_a = metadata === null || metadata === void 0 ? void 0 : metadata.fields[column]) === null || _a === void 0 ? void 0 : _a.type, metadata === null || metadata === void 0 ? void 0 : metadata.fields[column]); }));
    }
    delete(element) {
        this.isLoading$.next(true);
        this.dataAdapterService.delete(this.collectionName$.getValue(), element === null || element === void 0 ? void 0 : element.id)
            .subscribe(() => { var _a; return this.snackbar.success(`${capitalize((_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single)} added successfully!`); }, () => { var _a; return this.snackbar.error(`There was an error adding ${(_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single}!`); }, () => this.isLoading$.next(false));
    }
    getDisplayedColumns() {
        return this.metadata$.pipe(withLatestFrom(this.subCollections$), map(([metadata, subCollections]) => {
            const collumns = this.getDisplayableColumns(metadata === null || metadata === void 0 ? void 0 : metadata.fields);
            if (subCollections) {
                collumns.push({ id: 'entities', label: 'Manage' });
            }
            collumns.push({ id: 'actions', label: 'Actions' });
            return collumns;
        }), shareReplay(1));
    }
    getDisplayableColumns(columns) {
        if (!columns) {
            return [];
        }
        return Object.keys(pickBy(columns, col => col && !(col === null || col === void 0 ? void 0 : col.hideInList))).map(column => {
            var _a, _b;
            return Object.assign(Object.assign({}, columns[column]), { label: ((_a = columns[column]) === null || _a === void 0 ? void 0 : _a.label) || this.getFieldLabel({ label: column }), id: ((_b = columns[column]) === null || _b === void 0 ? void 0 : _b.id) || column });
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ValueFormatService), i0.ɵɵdirectiveInject(i3.SnackbarService), i0.ɵɵdirectiveInject(i4.DataAdapterService), i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["mat-administration-list"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "list", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["matColumnDef", "entities"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "list-image", 3, "src", "alt"], [3, "innerHTML"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["entitiesMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Edit", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-button", "", "color", "primary", 3, "routerLink"], ["color", "warn"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListComponent_div_0_Template, 2, 0, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, ListComponent_ng_container_2_Template, 15, 14, "ng-container", 1);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵtemplate(4, ListComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 3, ctx.isLoading$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
    } }, directives: [i5.NgIf, i6.MatSpinner, i7.BreadcrumbsComponent, i8.MatToolbar, i9.MatButton, i1.RouterLink, i10.MatIcon, i11.MatTable, i5.NgForOf, i11.MatColumnDef, i11.MatHeaderCellDef, i11.MatCellDef, i11.MatHeaderRowDef, i11.MatRowDef, i11.MatHeaderCell, i11.MatCell, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i12.MatMenuTrigger, i12._MatMenu, i12.MatMenuItem, i11.MatHeaderRow, i11.MatRow, i13.MatCard, i9.MatAnchor, i1.RouterLinkWithHref, i14.MatChipList, i14.MatChip], pipes: [i5.AsyncPipe, i5.TitleCasePipe], styles: ["[_nghost-%COMP%]{position:relative;display:block}table[_ngcontent-%COMP%]{width:100%}.list-image[_ngcontent-%COMP%]{max-height:5rem;padding:1rem}.mat-column-id[_ngcontent-%COMP%]{max-width:2rem;overflow:hidden;text-overflow:ellipsis;padding-right:1rem}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1JwQyw4QkFFRTtJQUFBLGlDQUF5QztJQUMzQyxpQkFBTTs7O0lBbUJFLDhCQUN1QjtJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixlQUFrQjtJQUFsQiw2RUFBa0I7OztJQUlyQyw2QkFDRTtJQUFBLDBCQUlGOztJQUFBLDBCQUFlOzs7OztJQUZSLGVBQTZCO0lBQTdCLGtHQUE2QjtJQUY3QixzSUFBNkMsa0RBQUE7OztJQU1wRCw2QkFDRTtJQUFBLDJCQUNpRTs7SUFDbkUsMEJBQWU7Ozs7O0lBRlAsZUFBNkI7SUFBN0Isa0dBQTZCO0lBQzdCLDZJQUFtRDs7O0lBWi9ELDhCQUVFO0lBQUEsaUNBQ0U7SUFBQSw0SUFDRTtJQU1GLDRJQUNFO0lBR0osMEJBQWU7SUFDakIsaUJBQUs7OztJQWJXLGVBQTJCO0lBQTNCLHdFQUEyQjtJQUN6QixlQUF1QjtJQUF2QixzQ0FBdUI7OztJQVAzQyxpQ0FFRTtJQUFBLG1IQUN1QjtJ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cm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBzaGFyZVJlcGxheSwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVmFsdWVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmFsdWUtZm9ybWF0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBwaWNrQnkgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YUNvbXBvbmVudCB9IGZyb20gJy4uL21ldGFkYXRhL21ldGFkYXRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNuYWNrYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NuYWNrYmFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRGF0YUFkYXB0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS1hZGFwdGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtYWRtaW5pc3RyYXRpb24tbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBleHRlbmRzIE1ldGFkYXRhQ29tcG9uZW50IHtcclxuICBkaXNwbGF5ZWRDb2x1bW5zJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcbiAgZGlzcGxheWVkQ29sdW1uc05hbWVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcbiAgbGlzdCQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHZhbHVlRm9ybWF0U2VydmljZTogVmFsdWVGb3JtYXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzbmFja2JhcjogU25hY2tiYXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIGRhdGFBZGFwdGVyU2VydmljZTogRGF0YUFkYXB0ZXJTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdCgnTUFUX0FETUlOSVNUUkFUSU9OX01FVEFEQVRBJykgcHVibGljIG1ldGFkYXRhOiBhbnlcclxuICApIHtcclxuICAgIHN1cGVyKHJvdXRlLCBkYXRhQWRhcHRlclNlcnZpY2UsIG1ldGFkYXRhKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMkID0gdGhpcy5nZXREaXNwbGF5ZWRDb2x1bW5zKCk7XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNOYW1lcyQgPSB0aGlzLmRpc3BsYXllZENvbHVtbnMkLnBpcGUobWFwKGNvbHVtbnMgPT4gY29sdW1ucy5tYXAoY29sdW1uID0+IGNvbHVtbj8uaWQpKSk7XHJcbiAgICB0aGlzLmxpc3QkID0gdGhpcy5jb2xsZWN0aW9uTmFtZSQucGlwZShcclxuICAgICAgc3dpdGNoTWFwKGNvbGxlY3Rpb24gPT4gdGhpcy5kYXRhQWRhcHRlclNlcnZpY2UubGlzdChjb2xsZWN0aW9uLCB0aGlzLm1ldGFkYXRhJC5nZXRWYWx1ZSgpPy5pZEZpZWxkIHx8ICdpZCcpKSxcclxuICAgICAgdGFwKCgpID0+IHRoaXMuaXNMb2FkaW5nJC5uZXh0KGZhbHNlKSksXHJcbiAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoZWxlbWVudCwgY29sdW1uKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YSQucGlwZShtYXAoXHJcbiAgICAgIG1ldGFkYXRhID0+IHRoaXMudmFsdWVGb3JtYXRTZXJ2aWNlLnRyYW5zZm9ybShlbGVtZW50W2NvbHVtbl0sIG1ldGFkYXRhPy5maWVsZHNbY29sdW1uXT8udHlwZSwgbWV0YWRhdGE/LmZpZWxkc1tjb2x1bW5dKVxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoZWxlbWVudCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmckLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRhdGFBZGFwdGVyU2VydmljZS5kZWxldGUodGhpcy5jb2xsZWN0aW9uTmFtZSQuZ2V0VmFsdWUoKSwgZWxlbWVudD8uaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zbmFja2Jhci5zdWNjZXNzKGAke2NhcGl0YWxpemUodGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uc2luZ2xlKX0gYWRkZWQgc3VjY2Vzc2Z1bGx5IWApLFxyXG4gICAgICAgICgpID0+IHRoaXMuc25hY2tiYXIuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvciBhZGRpbmcgJHt0aGlzLm1ldGFkYXRhJC5nZXRWYWx1ZSgpPy5zaW5nbGV9IWApLFxyXG4gICAgICAgICgpID0+IHRoaXMuaXNMb2FkaW5nJC5uZXh0KGZhbHNlKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREaXNwbGF5ZWRDb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGEkLnBpcGUoXHJcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuc3ViQ29sbGVjdGlvbnMkKSxcclxuICAgICAgbWFwKChbbWV0YWRhdGEsIHN1YkNvbGxlY3Rpb25zXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbGx1bW5zID0gdGhpcy5nZXREaXNwbGF5YWJsZUNvbHVtbnMobWV0YWRhdGE/LmZpZWxkcyk7XHJcbiAgICAgICAgaWYgKHN1YkNvbGxlY3Rpb25zKSB7XHJcbiAgICAgICAgICBjb2xsdW1ucy5wdXNoKHsgaWQ6ICdlbnRpdGllcycsIGxhYmVsOiAnTWFuYWdlJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sbHVtbnMucHVzaCh7IGlkOiAnYWN0aW9ucycsIGxhYmVsOiAnQWN0aW9ucycgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xsdW1ucztcclxuICAgICAgfSksXHJcbiAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREaXNwbGF5YWJsZUNvbHVtbnMoY29sdW1ucykge1xyXG4gICAgaWYgKCFjb2x1bW5zKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocGlja0J5KGNvbHVtbnMsIGNvbCA9PiBjb2wgJiYgIWNvbD8uaGlkZUluTGlzdCkpLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmNvbHVtbnNbY29sdW1uXSxcclxuICAgICAgICBsYWJlbDogY29sdW1uc1tjb2x1bW5dPy5sYWJlbCB8fCB0aGlzLmdldEZpZWxkTGFiZWwoeyBsYWJlbDogY29sdW1uIH0pLFxyXG4gICAgICAgIGlkOiBjb2x1bW5zW2NvbHVtbl0/LmlkIHx8IGNvbHVtblxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJsb2FkaW5nLWJveC1vdmVyZmxvd1wiXHJcbiAgICAgKm5nSWY9XCJpc0xvYWRpbmckIHwgYXN5bmNcIj5cclxuICA8bWF0LXNwaW5uZXIgZGlhbWV0ZXI9XCI1MFwiPjwvbWF0LXNwaW5uZXI+XHJcbjwvZGl2PlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibWV0YWRhdGEkIHwgYXN5bmMgYXMgbWV0YWRhdGE7IGVsc2Ugbm9NZXRhZGF0YVwiPlxyXG4gIDxtYXQtYWRtaW5pc3RyYXRpb24tYnJlYWRjcnVtYnMgW2NvbGxlY3Rpb25OYW1lXT1cImNvbGxlY3Rpb25OYW1lJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImxpc3RcIj48L21hdC1hZG1pbmlzdHJhdGlvbi1icmVhZGNydW1icz5cclxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgIDxoMT5NYW5hZ2Uge3ttZXRhZGF0YT8ucGx1cmFsfX08L2gxPlxyXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICByb3V0ZXJMaW5rPVwiL3t7Y29sbGVjdGlvblBhdGgkIHwgYXN5bmN9fS9hZGRcIj5cclxuICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+IEFkZCB7e21ldGFkYXRhPy5zaW5nbGV9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9tYXQtdG9vbGJhcj5cclxuICA8dGFibGUgbWF0LXRhYmxlXHJcbiAgICAgICAgICpuZ0lmPVwiKGxpc3QkIHwgYXN5bmMpPy5sZW5ndGhcIlxyXG4gICAgICAgICBbZGF0YVNvdXJjZV09XCJsaXN0JCB8IGFzeW5jXCJcclxuICAgICAgICAgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZGlzcGxheWVkQ29sdW1ucyQgfCBhc3luY1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29sdW1uPy5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2x1bW4/LmlkICE9ICdhY3Rpb25zJyAmJiBjb2x1bW4/LmlkICE9ICdlbnRpdGllcydcIj5cclxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsXHJcbiAgICAgICAgICAgICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbHVtbj8ubGFiZWx9fSA8L3RoPlxyXG4gICAgICAgIDx0ZCBtYXQtY2VsbFxyXG4gICAgICAgICAgICAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb2x1bW4/LmZvcm1hdFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaW1hZ2UnXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImdldFZhbHVlKGVsZW1lbnQsIGNvbHVtbj8uaWQpIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJjb2x1bW4/LnN0eWxlPy5saXN0XCJcclxuICAgICAgICAgICAgICAgICAgIFthbHRdPVwiY29sdW1uPy5pZFwiIC8+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgICAgICAgIDxzcGFuIFtzdHlsZV09XCJjb2x1bW4/LnN0eWxlPy5saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldFZhbHVlKGVsZW1lbnQsIGNvbHVtbj8uaWQpIHwgYXN5bmNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImVudGl0aWVzXCI+XHJcbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGxcclxuICAgICAgICAgICptYXRIZWFkZXJDZWxsRGVmPk1hbmFnZTwvdGg+XHJcbiAgICAgIDx0ZCBtYXQtY2VsbFxyXG4gICAgICAgICAgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJlbnRpdGllc01lbnVcIj5Nb3JlLi4uPC9idXR0b24+XHJcbiAgICAgICAgPG1hdC1tZW51ICNlbnRpdGllc01lbnU9XCJtYXRNZW51XCI+XHJcbiAgICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBzdWJDb2xsZWN0aW9uIG9mIHN1YkNvbGxlY3Rpb25zJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgbWF0LW1lbnUtaXRlbVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWFuYWdlXCJcclxuICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cIi97e2NvbGxlY3Rpb25OYW1lJCB8IGFzeW5jfX06e3tlbGVtZW50LmlkfX06e3tzdWJDb2xsZWN0aW9uPy5pZH19L2xpc3RcIj5cclxuICAgICAgICAgICAge3tzdWJDb2xsZWN0aW9uPy5wbHVyYWwgfCB0aXRsZWNhc2V9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtbWVudT5cclxuICAgICAgPC90ZD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aW9uc1wiPlxyXG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsXHJcbiAgICAgICAgICAqbWF0SGVhZGVyQ2VsbERlZj48L3RoPlxyXG4gICAgICA8dGQgbWF0LWNlbGxcclxuICAgICAgICAgICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgcm91dGVyTGluaz1cIi97e2NvbGxlY3Rpb25QYXRoJCB8IGFzeW5jfX0vdXBkYXRlL3t7ZWxlbWVudC5pZH19XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2FyblwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGUoZWxlbWVudClcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPHRyIG1hdC1oZWFkZXItcm93XHJcbiAgICAgICAgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNOYW1lcyQgfCBhc3luY1wiPjwvdHI+XHJcbiAgICA8dHIgbWF0LXJvd1xyXG4gICAgICAgICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zTmFtZXMkIHwgYXN5bmM7XCI+PC90cj5cclxuICA8L3RhYmxlPlxyXG5cclxuICA8bWF0LWNhcmQgKm5nSWY9XCIhKGxpc3QkIHwgYXN5bmMpPy5sZW5ndGhcIj5cclxuICAgIE5vIHt7bWV0YWRhdGE/LnBsdXJhbH19IGFkZGVkLiA8YSBtYXQtYnV0dG9uXHJcbiAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgcm91dGVyTGluaz1cIi97e2NvbGxlY3Rpb25QYXRoJCB8IGFzeW5jfX0vYWRkXCI+QWRkIHt7bWV0YWRhdGE/LnNpbmdsZX19PC9hPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNub01ldGFkYXRhPlxyXG4gIDxtYXQtY2hpcC1saXN0PlxyXG4gICAgPG1hdC1jaGlwIGNvbG9yPVwid2FyblwiPk5vIGVudGl0eSBtZXRhZGF0YSBkZWZpbmVkIGZvciZuYnNwOzxzdHJvbmc+e3tjb2xsZWN0aW9uTmFtZSQgfCBhc3luY319PC9zdHJvbmc+ITwvbWF0LWNoaXA+XHJcbiAgPC9tYXQtY2hpcC1saXN0PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=