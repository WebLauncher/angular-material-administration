import { __assign, __read, __spread, __extends } from 'tslib';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, Optional, Inject, ɵɵelementContainerStart, ɵɵpipe, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵtemplate, ɵɵproperty, Input, ɵɵelementContainer, ɵɵreference, ɵɵpureFunction1, ɵɵelement, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵsanitizeUrl, EventEmitter, ɵɵtemplateRefExtractor, ChangeDetectionStrategy, Output, ɵɵpropertyInterpolate1, ɵɵInheritDefinitionFeature, ɵɵstyleMap, ɵɵsanitizeHtml, ɵɵpropertyInterpolate3, ɵɵpropertyInterpolate2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { from, Subject, BehaviorSubject, forkJoin, of, combineLatest } from 'rxjs';
import { finalize, filter, map, tap, takeUntil, shareReplay, switchMap, catchError, take, withLatestFrom } from 'rxjs/operators';
import { capitalize, pickBy } from 'lodash';
import { ActivatedRoute, RouterLinkWithHref, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { firestore } from 'firebase/app';
import { v4 } from 'uuid';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe, NgForOf, NgIf, AsyncPipe, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, TitleCasePipe, CommonModule } from '@angular/common';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DefaultLayoutDirective, DefaultLayoutAlignDirective } from '@angular/flex-layout/flex';
import { MatAnchor, MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatCard, MatCardModule } from '@angular/material/card';
import { Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, DefaultValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DefaultStyleDirective } from '@angular/flex-layout/extended';
import { CKEditorComponent, CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatFormField, MatLabel, MatSuffix, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatNativeDateModule } from '@angular/material/core';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFileInputComponent, MatFileInputModule } from '@weblauncher/material-file-input';
import { MatChipList, MatChip, MatChipsModule } from '@angular/material/chips';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTableModule } from '@angular/material/table';
import { MatMenuTrigger, _MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatNavList, MatListItem, MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { CdkTableModule } from '@angular/cdk/table';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var DataAdapterService = /** @class */ (function () {
    function DataAdapterService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    DataAdapterService.prototype.get = function (collection, id) {
        return this.db.collection(collection).doc(id).valueChanges();
    };
    DataAdapterService.prototype.list = function (collection, idField) {
        return this.db.collection(collection).valueChanges({ idField: idField });
    };
    DataAdapterService.prototype.add = function (collection, item) {
        return from(this.db.collection(collection).add(item));
    };
    DataAdapterService.prototype.update = function (collection, id, item) {
        return from(this.db.collection(collection).doc(id).update(item));
    };
    DataAdapterService.prototype.delete = function (collection, id) {
        return from(this.db.collection(collection).doc(id).delete());
    };
    DataAdapterService.prototype.upload = function (file) {
        var path = v4() + '_' + (file === null || file === void 0 ? void 0 : file.name);
        var fileRef = this.storage.ref(path);
        var task = this.storage.upload(path, file);
        var downloadData$ = new Subject();
        task.snapshotChanges().pipe(finalize(function () {
            fileRef.getDownloadURL().subscribe(function (downloadUrl) {
                downloadData$.next({
                    downloadUrl: downloadUrl,
                    path: path
                });
                downloadData$.complete();
            });
        })).subscribe();
        return downloadData$.pipe(filter(Boolean));
    };
    DataAdapterService.prototype.removeUpload = function (filePath) {
        return this.storage.ref(filePath).delete();
    };
    DataAdapterService.prototype.getTimestamp = function () {
        return firestore.FieldValue.serverTimestamp();
    };
    DataAdapterService.ɵfac = function DataAdapterService_Factory(t) { return new (t || DataAdapterService)(ɵɵinject(AngularFirestore), ɵɵinject(AngularFireStorage)); };
    DataAdapterService.ɵprov = ɵɵdefineInjectable({ token: DataAdapterService, factory: DataAdapterService.ɵfac, providedIn: 'root' });
    return DataAdapterService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataAdapterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AngularFirestore }, { type: AngularFireStorage }]; }, null); })();

var MetadataComponent = /** @class */ (function () {
    function MetadataComponent(route, dataAdapterService, metadata) {
        var _this = this;
        this.route = route;
        this.dataAdapterService = dataAdapterService;
        this.metadata = metadata;
        this.metadata$ = new BehaviorSubject(null);
        this.collectionPath$ = new BehaviorSubject(null);
        this.collectionName$ = new BehaviorSubject(null);
        this.subCollections$ = new BehaviorSubject(null);
        this.isLoading$ = new BehaviorSubject(true);
        this.destroyed$ = new Subject();
        this.route.params.pipe(map(function (params) { return params === null || params === void 0 ? void 0 : params.collection; }), tap(function () { return _this.isLoading$.next(true); }), takeUntil(this.destroyed$))
            .subscribe(this.collectionPath$);
        this.collectionPath$.pipe(map(function (collectionPath) { return collectionPath.replace(/\:/gi, '\/'); }), shareReplay(1))
            .subscribe(this.collectionName$);
        this.collectionName$.pipe(map(function (name) { return _this.getMetadata(name, metadata); }), shareReplay(1)).subscribe(this.metadata$);
        this.metadata$.pipe(map(function (metadata) {
            if (!(metadata === null || metadata === void 0 ? void 0 : metadata.entities)) {
                return null;
            }
            return Object.keys(metadata.entities).map(function (key) {
                return __assign({ id: key }, metadata.entities[key]);
            });
        })).subscribe(this.subCollections$);
    }
    MetadataComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    MetadataComponent.prototype.getFieldLabel = function (field) {
        if (typeof field === 'string') {
            return capitalize(field);
        }
        return capitalize(field === null || field === void 0 ? void 0 : field.label);
    };
    MetadataComponent.prototype.getFields = function () {
        var _this = this;
        return this.metadata$.pipe(map(function (metadata) {
            var entries = Object.entries(metadata === null || metadata === void 0 ? void 0 : metadata.fields);
            return entries
                .map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                var _c;
                return typeof value === 'object' ? __assign(__assign({}, value), { name: key, label: (((_c = value) === null || _c === void 0 ? void 0 : _c.label) || _this.getFieldLabel(key)) }) :
                    { name: key, label: _this.getFieldLabel(key) };
            })
                .filter(function (field) { return _this.showField(metadata, field); });
        }), switchMap(function (fields) { return forkJoin(fields.map(function (field) { return _this.addAdditionalMetadata(field); })); }), catchError(function (error) {
            console.error(error);
            return of([]);
        }), shareReplay(1));
    };
    MetadataComponent.prototype.processUploads = function (item, metadata, action) {
        var _this = this;
        var filesKeys = Object.keys(item)
            .filter(function (key) { return Array.isArray(item[key]) && item[key][0] instanceof File; });
        if (filesKeys.length) {
            var itemUpdates_1 = {};
            return forkJoin(filesKeys.map(function (key) {
                return _this.dataAdapterService.upload(item[key][0]).pipe(map(function (downloadData) {
                    return { key: key, downloadData: downloadData };
                }), catchError(function (error) {
                    console.error(error);
                    return of(null);
                }));
            })).pipe(map(function (uploadedFiles) {
                if (uploadedFiles) {
                    uploadedFiles.forEach(function (uploadedFile) {
                        var _a, _b;
                        itemUpdates_1[uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.key] = (_a = uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.downloadData) === null || _a === void 0 ? void 0 : _a.downloadUrl;
                        itemUpdates_1[(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.key) + 'Path'] = (_b = uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.downloadData) === null || _b === void 0 ? void 0 : _b.path;
                    });
                }
                return __assign(__assign({}, item), itemUpdates_1);
            }));
        }
        return of(item);
    };
    MetadataComponent.prototype.getWithTimestamps = function (item, action) {
        var _a, _b, _c, _d;
        var newItem = __assign({}, item);
        var timestamp = this.dataAdapterService.getTimestamp();
        if (action === 'add' && ((_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.createdTimestamp)) {
            newItem[(_b = this.metadata$.getValue()) === null || _b === void 0 ? void 0 : _b.createdTimestamp] = timestamp;
        }
        if ((_c = this.metadata$.getValue()) === null || _c === void 0 ? void 0 : _c.updatedTimestamp) {
            newItem[(_d = this.metadata$.getValue()) === null || _d === void 0 ? void 0 : _d.updatedTimestamp] = timestamp;
        }
        return newItem;
    };
    MetadataComponent.prototype.getFieldMedatada = function (field) {
        var _a, _b;
        return (_b = (_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.entities) === null || _b === void 0 ? void 0 : _b[field];
    };
    MetadataComponent.prototype.getMetadata = function (collectionName, metadata) {
        var nameParts = collectionName.split('/');
        if (nameParts.length === 1) {
            return metadata.entities[nameParts[0]] || null;
        }
        return this.getMetadata(nameParts.slice(2).join('/'), metadata.entities[nameParts[0]]);
    };
    MetadataComponent.prototype.addAdditionalMetadata = function (field) {
        var _a, _b, _c;
        if (((field === null || field === void 0 ? void 0 : field.inputType) === 'select' || (field === null || field === void 0 ? void 0 : field.inputType) === 'radio') && ((_a = field === null || field === void 0 ? void 0 : field.data) === null || _a === void 0 ? void 0 : _a.type) === 'collection') {
            return this.dataAdapterService.list((_b = field === null || field === void 0 ? void 0 : field.data) === null || _b === void 0 ? void 0 : _b.collection, (_c = field === null || field === void 0 ? void 0 : field.data) === null || _c === void 0 ? void 0 : _c.collectionValue)
                .pipe(take(1), map(function (docs) {
                return __assign(__assign({}, field), { options: docs.map(function (doc) {
                        var _a, _b;
                        return {
                            value: doc[(_a = field === null || field === void 0 ? void 0 : field.data) === null || _a === void 0 ? void 0 : _a.collectionValue],
                            label: doc[(_b = field === null || field === void 0 ? void 0 : field.data) === null || _b === void 0 ? void 0 : _b.collectionLabel]
                        };
                    }) });
            }));
        }
        return of(field);
    };
    MetadataComponent.prototype.showField = function (metadata, field) {
        return field.name !== 'id' &&
            (!(metadata === null || metadata === void 0 ? void 0 : metadata.createdTimestamp) || (metadata === null || metadata === void 0 ? void 0 : metadata.createdTimestamp) !== field.name) &&
            (!(metadata === null || metadata === void 0 ? void 0 : metadata.updatedTimestamp) || (metadata === null || metadata === void 0 ? void 0 : metadata.updatedTimestamp) !== field.name);
    };
    MetadataComponent.ɵfac = function MetadataComponent_Factory(t) { return new (t || MetadataComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(DataAdapterService), ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    MetadataComponent.ɵcmp = ɵɵdefineComponent({ type: MetadataComponent, selectors: [["mat-administration-metadata"]], decls: 2, vars: 0, template: function MetadataComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, "metadata works!");
            ɵɵelementEnd();
        } }, styles: [""] });
    return MetadataComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MetadataComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-metadata',
                templateUrl: './metadata.component.html',
                styleUrls: ['./metadata.component.scss']
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();

var SnackbarService = /** @class */ (function () {
    function SnackbarService(snackbar) {
        this.snackbar = snackbar;
    }
    SnackbarService.prototype.error = function (message) {
        this.snackbar.open(message, 'Close', {
            duration: 3000,
            panelClass: 'snackbar-error'
        });
    };
    SnackbarService.prototype.success = function (message) {
        this.snackbar.open(message, 'Close', {
            duration: 3000,
            panelClass: 'snackbar-success'
        });
    };
    SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(ɵɵinject(MatSnackBar)); };
    SnackbarService.ɵprov = ɵɵdefineInjectable({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });
    return SnackbarService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SnackbarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: MatSnackBar }]; }, null); })();

var ValueFormatService = /** @class */ (function () {
    function ValueFormatService(datePipe, metadata) {
        this.datePipe = datePipe;
        this.metadata = metadata;
    }
    ValueFormatService.prototype.transform = function (value, type, options) {
        if (options === void 0) { options = null; }
        var _a;
        switch (type) {
            case 'timestamp':
                return this.datePipe.transform(value === null || value === void 0 ? void 0 : value.toDate(), (options === null || options === void 0 ? void 0 : options.format) || ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.timestampFormat), options.timezone, options === null || options === void 0 ? void 0 : options.locale);
            default:
                return value;
        }
    };
    ValueFormatService.ɵfac = function ValueFormatService_Factory(t) { return new (t || ValueFormatService)(ɵɵinject(DatePipe), ɵɵinject('MAT_ADMINISTRATION_METADATA', 8)); };
    ValueFormatService.ɵprov = ɵɵdefineInjectable({ token: ValueFormatService, factory: ValueFormatService.ɵfac, providedIn: 'root' });
    return ValueFormatService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ValueFormatService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: DatePipe }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();

function BreadcrumbsComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, item_r1.source), " ");
} }
function BreadcrumbsComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r1.name, " ");
} }
function BreadcrumbsComponent_ng_container_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "arrow_right");
    ɵɵelementEnd();
} }
function BreadcrumbsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "a", 3);
    ɵɵtemplate(3, BreadcrumbsComponent_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 4);
    ɵɵtemplate(4, BreadcrumbsComponent_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵtemplate(5, BreadcrumbsComponent_ng_container_1_mat_icon_5_Template, 2, 0, "mat-icon", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var last_r2 = ctx.last;
    ɵɵadvance(2);
    ɵɵproperty("routerLink", item_r1.url);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.source);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !item_r1.source);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !last_r2);
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
    BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8), ɵɵdirectiveInject(DataAdapterService)); };
    BreadcrumbsComponent.ɵcmp = ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["mat-administration-breadcrumbs"]], inputs: { collectionName: "collectionName", action: "action" }, decls: 3, vars: 3, consts: [["fxLayout", "row", "fxAlign", "start"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-button", "", 3, "routerLink"], [4, "ngIf"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, BreadcrumbsComponent_ng_container_1_Template, 6, 4, "ng-container", 1);
            ɵɵpipe(2, "async");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx.links$));
        } }, directives: [DefaultLayoutDirective, NgForOf, DefaultLayoutAlignDirective, MatAnchor, RouterLinkWithHref, NgIf, MatIcon], pipes: [AsyncPipe], styles: [""] });
    return BreadcrumbsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbsComponent, [{
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
            }] }, { type: DataAdapterService }]; }, { collectionName: [{
            type: Input
        }], action: [{
            type: Input
        }] }); })();

function FormComponent_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { field: a0 }; };
function FormComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, FormComponent_ng_container_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r4 = ctx.$implicit;
    ɵɵnextContext(2);
    var _r1 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, field_r4));
} }
function FormComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FormComponent_ng_container_1_div_1_Template, 2, 4, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵelementStart(3, "button", 5);
    ɵɵtext(4, "Save ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.fields);
} }
function FormComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "ckeditor", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    var ctx_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("editor", ctx_r7.Editor);
} }
function FormComponent_ng_template_2_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "textarea", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
} }
function FormComponent_ng_template_2_mat_form_field_4_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r20 = ctx.$implicit;
    ɵɵproperty("value", option_r20 == null ? null : option_r20.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r20 == null ? null : option_r20.label, " ");
} }
function FormComponent_ng_template_2_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 17);
    ɵɵtemplate(4, FormComponent_ng_template_2_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", field_r6 == null ? null : field_r6.options);
} }
function FormComponent_ng_template_2_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r23 = ctx.$implicit;
    ɵɵproperty("value", option_r23 == null ? null : option_r23.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r23 == null ? null : option_r23.label);
} }
function FormComponent_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-radio-group", 21);
    ɵɵtemplate(4, FormComponent_ng_template_2_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", field_r6 == null ? null : field_r6.label, ":");
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", field_r6 == null ? null : field_r6.options);
} }
function FormComponent_ng_template_2_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "input", 22);
    ɵɵelement(4, "mat-datepicker-toggle", 23);
    ɵɵelement(5, "mat-datepicker", 24, 25);
    ɵɵelementEnd();
} if (rf & 2) {
    var _r25 = ɵɵreference(6);
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("matDatepicker", _r25);
    ɵɵadvance(1);
    ɵɵproperty("for", _r25);
} }
function FormComponent_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵelementStart(1, "mat-checkbox", 27);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("value", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
} }
function FormComponent_ng_template_2_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵelementStart(1, "mat-slide-toggle", 21);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", field_r6 == null ? null : field_r6.label, " ");
} }
function FormComponent_ng_template_2_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "mat-file-input", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
} }
function FormComponent_ng_template_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 29);
    ɵɵelement(4, "img", 30);
    ɵɵelementStart(5, "button", 31);
    ɵɵlistener("click", function FormComponent_ng_template_2_div_10_div_1_Template_button_click_5_listener() { ɵɵrestoreView(_r34); var field_r6 = ɵɵnextContext(2).field; var ctx_r32 = ɵɵnextContext(); return ctx_r32.removeImage(field_r6); });
    ɵɵtext(6, "Remove");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext(2).field;
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(2);
    ɵɵproperty("src", field_r6 == null ? null : field_r6.value, ɵɵsanitizeUrl);
} }
function FormComponent_ng_template_2_div_10_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "mat-file-input", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext(2).field;
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
} }
function FormComponent_ng_template_2_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, FormComponent_ng_template_2_div_10_div_1_Template, 7, 2, "div", 1);
    ɵɵtemplate(2, FormComponent_ng_template_2_div_10_mat_form_field_2_Template, 4, 3, "mat-form-field", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r6 == null ? null : field_r6.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(field_r6 == null ? null : field_r6.value));
} }
function FormComponent_ng_template_2_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "input", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ɵɵnextContext().field;
    ɵɵadvance(2);
    ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    ɵɵadvance(1);
    ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
} }
function FormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementContainerStart(1, 8);
    ɵɵtemplate(2, FormComponent_ng_template_2_div_2_Template, 4, 3, "div", 9);
    ɵɵtemplate(3, FormComponent_ng_template_2_mat_form_field_3_Template, 4, 2, "mat-form-field", 10);
    ɵɵtemplate(4, FormComponent_ng_template_2_mat_form_field_4_Template, 5, 3, "mat-form-field", 10);
    ɵɵtemplate(5, FormComponent_ng_template_2_div_5_Template, 5, 3, "div", 11);
    ɵɵtemplate(6, FormComponent_ng_template_2_mat_form_field_6_Template, 7, 4, "mat-form-field", 10);
    ɵɵtemplate(7, FormComponent_ng_template_2_div_7_Template, 3, 3, "div", 12);
    ɵɵtemplate(8, FormComponent_ng_template_2_div_8_Template, 3, 2, "div", 12);
    ɵɵtemplate(9, FormComponent_ng_template_2_mat_form_field_9_Template, 4, 3, "mat-form-field", 10);
    ɵɵtemplate(10, FormComponent_ng_template_2_div_10_Template, 3, 2, "div", 10);
    ɵɵtemplate(11, FormComponent_ng_template_2_mat_form_field_11_Template, 4, 3, "mat-form-field", 13);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r6 = ctx.field;
    ɵɵproperty("ngStyle", field_r6 == null ? null : field_r6.style == null ? null : field_r6.style.form);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", field_r6 == null ? null : field_r6.inputType);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "ckeditor");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "textarea");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "select");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "radio");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "datepicker");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "toggle");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "file");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "image");
} }
var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.save = new EventEmitter();
        this.valueChanges = new EventEmitter();
        this.Editor = ClassicEditor;
        this.destroyed$ = new Subject();
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        if (this.fields) {
            this.form = this.formBuilder.group((_a = this.fields) === null || _a === void 0 ? void 0 : _a.reduce(function (prev, cur) {
                var _a;
                return __assign(__assign({}, prev), (_a = {}, _a[cur === null || cur === void 0 ? void 0 : cur.name] = [_this.getFieldValue(cur), _this.getFieldValidators(cur)], _a));
            }, {}));
            this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(this.valueChanges);
        }
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    FormComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.save.emit(this.form.value);
        }
    };
    FormComponent.prototype.removeImage = function (field) {
        field.value = null;
        this.form.get(field.name).setValue(null);
    };
    FormComponent.prototype.getFieldValue = function (field) {
        return field === null || field === void 0 ? void 0 : field.value;
    };
    FormComponent.prototype.getFieldValidators = function (field) {
        return [Validators.required];
    };
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(ɵɵdirectiveInject(FormBuilder)); };
    FormComponent.ɵcmp = ɵɵdefineComponent({ type: FormComponent, selectors: [["mat-administration-form"]], inputs: { fields: "fields" }, outputs: { save: "save", valueChanges: "valueChanges" }, decls: 4, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [4, "ngIf"], ["formField", ""], [4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-field-container", 3, "ngStyle"], [3, "ngSwitch"], ["class", "ckeditor", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "radio", 4, "ngSwitchCase"], ["class", "checkbox", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ckeditor"], [3, "formControlName", "editor"], ["matInput", "", 3, "formControlName"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "radio"], ["color", "primary", 3, "formControlName"], ["matInput", "", 3, "formControlName", "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], [1, "checkbox"], ["color", "primary", 3, "formControlName", "value"], [3, "formControlName", "placeholder"], ["fxLayout", "row", "fxLayoutAlign", "start"], ["alt", "field?.label", 1, "file-input-image", 3, "src"], ["type", "button", "mat-raised-button", "", 3, "click"], ["matInput", "", 3, "formControlName", "placeholder"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵlistener("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
            ɵɵtemplate(1, FormComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
            ɵɵtemplate(2, FormComponent_ng_template_2_Template, 12, 11, "ng-template", null, 2, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.fields);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, NgForOf, MatButton, NgTemplateOutlet, NgStyle, DefaultStyleDirective, NgSwitch, NgSwitchCase, NgSwitchDefault, CKEditorComponent, NgControlStatus, FormControlName, MatFormField, MatLabel, MatInput, DefaultValueAccessor, MatSelect, MatOption, MatRadioGroup, MatRadioButton, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCheckbox, MatSlideToggle, MatFileInputComponent, DefaultLayoutDirective, DefaultLayoutAlignDirective], styles: ["[_nghost-%COMP%]{display:block}mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}.ckeditor[_ngcontent-%COMP%]{margin-bottom:1rem}.ckeditor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{opacity:.54;transform:scale(.75)}.radio[_ngcontent-%COMP%]{margin-bottom:1rem}.radio[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{margin-right:1rem}.radio[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin-right:.5rem}.file-input-image[_ngcontent-%COMP%]{max-height:3rem;margin-right:1rem}"], changeDetection: 0 });
    return FormComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FormBuilder }]; }, { fields: [{
            type: Input
        }], save: [{
            type: Output
        }], valueChanges: [{
            type: Output
        }] }); })();

function AddComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "mat-spinner", 4);
    ɵɵelementEnd();
} }
function AddComponent_ng_container_2_mat_administration_form_12_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-administration-form", 9);
    ɵɵlistener("save", function AddComponent_ng_container_2_mat_administration_form_12_Template_mat_administration_form_save_0_listener($event) { ɵɵrestoreView(_r7); var ctx_r6 = ɵɵnextContext(2); return ctx_r6.save($event); });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("fields", ɵɵpipeBind1(1, 1, ctx_r5.fields$));
} }
function AddComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "mat-administration-breadcrumbs", 5);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "mat-toolbar", 6);
    ɵɵelementStart(4, "h1");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "a", 7);
    ɵɵpipe(7, "async");
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9, "keyboard_backspace");
    ɵɵelementEnd();
    ɵɵtext(10, " Cancel ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "mat-card");
    ɵɵtemplate(12, AddComponent_ng_container_2_mat_administration_form_12_Template, 2, 3, "mat-administration-form", 8);
    ɵɵpipe(13, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var metadata_r4 = ctx.ngIf;
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("collectionName", ɵɵpipeBind1(2, 4, ctx_r1.collectionName$));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("Add ", metadata_r4 == null ? null : metadata_r4.single, "");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("routerLink", "/", ɵɵpipeBind1(7, 6, ctx_r1.collectionPath$), "/list");
    ɵɵadvance(6);
    ɵɵproperty("ngIf", ɵɵpipeBind1(13, 8, ctx_r1.fields$));
} }
function AddComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-chip-list");
    ɵɵelementStart(1, "mat-chip", 10);
    ɵɵtext(2, "No entity metadata defined for\u00A0");
    ɵɵelementStart(3, "strong");
    ɵɵtext(4);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵtext(6, "!");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
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
    AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(SnackbarService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(DataAdapterService), ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    AddComponent.ɵcmp = ɵɵdefineComponent({ type: AddComponent, selectors: [["mat-administration-add"]], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "add", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [3, "fields", "save", 4, "ngIf"], [3, "fields", "save"], ["color", "warn"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, AddComponent_div_0_Template, 2, 0, "div", 0);
            ɵɵpipe(1, "async");
            ɵɵtemplate(2, AddComponent_ng_container_2_Template, 14, 10, "ng-container", 1);
            ɵɵpipe(3, "async");
            ɵɵtemplate(4, AddComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r2 = ɵɵreference(5);
            ɵɵproperty("ngIf", ɵɵpipeBind1(1, 3, ctx.isLoading$));
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
        } }, directives: [NgIf, MatSpinner, BreadcrumbsComponent, MatToolbar, MatAnchor, RouterLinkWithHref, MatIcon, MatCard, FormComponent, MatChipList, MatChip], pipes: [AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;position:relative}"] });
    return AddComponent;
}(MetadataComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.scss']
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: SnackbarService }, { type: Router }, { type: DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();

function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "mat-spinner", 4);
    ɵɵelementEnd();
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var column_r14 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", column_r14 == null ? null : column_r14.label, " ");
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 25);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r19 = ɵɵnextContext().$implicit;
    var column_r14 = ɵɵnextContext(2).$implicit;
    var ctx_r20 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵstyleMap(column_r14 == null ? null : column_r14.style == null ? null : column_r14.style.list);
    ɵɵproperty("src", ɵɵpipeBind1(2, 4, ctx_r20.getValue(element_r19, column_r14 == null ? null : column_r14.id)), ɵɵsanitizeUrl)("alt", column_r14 == null ? null : column_r14.id);
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 26);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r19 = ɵɵnextContext().$implicit;
    var column_r14 = ɵɵnextContext(2).$implicit;
    var ctx_r21 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵstyleMap(column_r14 == null ? null : column_r14.style == null ? null : column_r14.style.list);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(2, 3, ctx_r21.getValue(element_r19, column_r14 == null ? null : column_r14.id)), ɵɵsanitizeHtml);
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 21);
    ɵɵelementContainerStart(1, 22);
    ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_2_Template, 3, 6, "ng-container", 23);
    ɵɵtemplate(3, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_3_Template, 3, 5, "ng-container", 24);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var column_r14 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", column_r14 == null ? null : column_r14.format);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "image");
} }
function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 19);
    ɵɵtemplate(1, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_th_1_Template, 2, 1, "th", 13);
    ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_Template, 4, 2, "td", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r14 = ɵɵnextContext().$implicit;
    ɵɵproperty("matColumnDef", column_r14 == null ? null : column_r14.id);
} }
function ListComponent_ng_container_2_table_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 18);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (column_r14 == null ? null : column_r14.id) != "actions" && (column_r14 == null ? null : column_r14.id) != "entities");
} }
function ListComponent_ng_container_2_table_11_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 20);
    ɵɵtext(1, "Manage");
    ɵɵelementEnd();
} }
function ListComponent_ng_container_2_table_11_td_6_button_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 30);
    ɵɵpipe(1, "async");
    ɵɵtext(2);
    ɵɵpipe(3, "titlecase");
    ɵɵelementEnd();
} if (rf & 2) {
    var subCollection_r31 = ctx.$implicit;
    var element_r28 = ɵɵnextContext().$implicit;
    var ctx_r30 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate3("routerLink", "/", ɵɵpipeBind1(1, 4, ctx_r30.collectionName$), ":", element_r28.id, ":", subCollection_r31 == null ? null : subCollection_r31.id, "/list");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, subCollection_r31 == null ? null : subCollection_r31.plural), " ");
} }
function ListComponent_ng_container_2_table_11_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 21);
    ɵɵelementStart(1, "button", 27);
    ɵɵtext(2, "More...");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-menu", null, 28);
    ɵɵtemplate(5, ListComponent_ng_container_2_table_11_td_6_button_5_Template, 4, 8, "button", 29);
    ɵɵpipe(6, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r29 = ɵɵreference(4);
    var ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r29);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 2, ctx_r9.subCollections$));
} }
function ListComponent_ng_container_2_table_11_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th", 20);
} }
function ListComponent_ng_container_2_table_11_td_9_Template(rf, ctx) { if (rf & 1) {
    var _r35 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 21);
    ɵɵelementStart(1, "button", 31);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "mat-icon");
    ɵɵtext(4, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 32);
    ɵɵlistener("click", function ListComponent_ng_container_2_table_11_td_9_Template_button_click_5_listener() { ɵɵrestoreView(_r35); var element_r33 = ctx.$implicit; var ctx_r34 = ɵɵnextContext(3); return ctx_r34.delete(element_r33); });
    ɵɵelementStart(6, "mat-icon");
    ɵɵtext(7, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r33 = ctx.$implicit;
    var ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate2("routerLink", "/", ɵɵpipeBind1(2, 2, ctx_r11.collectionPath$), "/update/", element_r33.id, "");
} }
function ListComponent_ng_container_2_table_11_tr_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 33);
} }
function ListComponent_ng_container_2_table_11_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 34);
} }
function ListComponent_ng_container_2_table_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "table", 10);
    ɵɵpipe(1, "async");
    ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_Template, 2, 1, "ng-container", 11);
    ɵɵpipe(3, "async");
    ɵɵelementContainerStart(4, 12);
    ɵɵtemplate(5, ListComponent_ng_container_2_table_11_th_5_Template, 2, 0, "th", 13);
    ɵɵtemplate(6, ListComponent_ng_container_2_table_11_td_6_Template, 7, 4, "td", 14);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(7, 15);
    ɵɵtemplate(8, ListComponent_ng_container_2_table_11_th_8_Template, 1, 0, "th", 13);
    ɵɵtemplate(9, ListComponent_ng_container_2_table_11_td_9_Template, 8, 4, "td", 14);
    ɵɵelementContainerEnd();
    ɵɵtemplate(10, ListComponent_ng_container_2_table_11_tr_10_Template, 1, 0, "tr", 16);
    ɵɵpipe(11, "async");
    ɵɵtemplate(12, ListComponent_ng_container_2_table_11_tr_12_Template, 1, 0, "tr", 17);
    ɵɵpipe(13, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("dataSource", ɵɵpipeBind1(1, 4, ctx_r5.list$));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 6, ctx_r5.displayedColumns$));
    ɵɵadvance(8);
    ɵɵproperty("matHeaderRowDef", ɵɵpipeBind1(11, 8, ctx_r5.displayedColumnsNames$));
    ɵɵadvance(2);
    ɵɵproperty("matRowDefColumns", ɵɵpipeBind1(13, 10, ctx_r5.displayedColumnsNames$));
} }
function ListComponent_ng_container_2_mat_card_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-card");
    ɵɵtext(1);
    ɵɵelementStart(2, "a", 35);
    ɵɵpipe(3, "async");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var metadata_r4 = ɵɵnextContext().ngIf;
    var ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" No ", metadata_r4 == null ? null : metadata_r4.plural, " added. ");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("routerLink", "/", ɵɵpipeBind1(3, 3, ctx_r6.collectionPath$), "/add");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Add ", metadata_r4 == null ? null : metadata_r4.single, "");
} }
function ListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "mat-administration-breadcrumbs", 5);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "mat-toolbar", 6);
    ɵɵelementStart(4, "h1");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 7);
    ɵɵpipe(7, "async");
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9, "add");
    ɵɵelementEnd();
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(11, ListComponent_ng_container_2_table_11_Template, 14, 12, "table", 8);
    ɵɵpipe(12, "async");
    ɵɵtemplate(13, ListComponent_ng_container_2_mat_card_13_Template, 5, 5, "mat-card", 9);
    ɵɵpipe(14, "async");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var metadata_r4 = ctx.ngIf;
    var ctx_r1 = ɵɵnextContext();
    var tmp_4_0 = null;
    var currVal_4 = (tmp_4_0 = ɵɵpipeBind1(12, 10, ctx_r1.list$)) == null ? null : tmp_4_0.length;
    var tmp_5_0 = null;
    var currVal_5 = !((tmp_5_0 = ɵɵpipeBind1(14, 12, ctx_r1.list$)) == null ? null : tmp_5_0.length);
    ɵɵadvance(1);
    ɵɵproperty("collectionName", ɵɵpipeBind1(2, 6, ctx_r1.collectionName$));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("Manage ", metadata_r4 == null ? null : metadata_r4.plural, "");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("routerLink", "/", ɵɵpipeBind1(7, 8, ctx_r1.collectionPath$), "/add");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" Add ", metadata_r4 == null ? null : metadata_r4.single, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", currVal_4);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", currVal_5);
} }
function ListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-chip-list");
    ɵɵelementStart(1, "mat-chip", 36);
    ɵɵtext(2, "No entity metadata defined for\u00A0");
    ɵɵelementStart(3, "strong");
    ɵɵtext(4);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵtext(6, "!");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
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
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ValueFormatService), ɵɵdirectiveInject(SnackbarService), ɵɵdirectiveInject(DataAdapterService), ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    ListComponent.ɵcmp = ɵɵdefineComponent({ type: ListComponent, selectors: [["mat-administration-list"]], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "list", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["matColumnDef", "entities"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "list-image", 3, "src", "alt"], [3, "innerHTML"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["entitiesMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Edit", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-button", "", "color", "primary", 3, "routerLink"], ["color", "warn"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, ListComponent_div_0_Template, 2, 0, "div", 0);
            ɵɵpipe(1, "async");
            ɵɵtemplate(2, ListComponent_ng_container_2_Template, 15, 14, "ng-container", 1);
            ɵɵpipe(3, "async");
            ɵɵtemplate(4, ListComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r2 = ɵɵreference(5);
            ɵɵproperty("ngIf", ɵɵpipeBind1(1, 3, ctx.isLoading$));
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
        } }, directives: [NgIf, MatSpinner, BreadcrumbsComponent, MatToolbar, MatButton, RouterLink, MatIcon, MatTable, NgForOf, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, NgSwitch, NgSwitchCase, NgSwitchDefault, MatMenuTrigger, _MatMenu, MatMenuItem, MatHeaderRow, MatRow, MatCard, MatAnchor, RouterLinkWithHref, MatChipList, MatChip], pipes: [AsyncPipe, TitleCasePipe], styles: ["[_nghost-%COMP%]{position:relative;display:block}table[_ngcontent-%COMP%]{width:100%}.list-image[_ngcontent-%COMP%]{max-height:5rem;padding:1rem}.mat-column-id[_ngcontent-%COMP%]{max-width:2rem;overflow:hidden;text-overflow:ellipsis;padding-right:1rem}"] });
    return ListComponent;
}(MetadataComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: ValueFormatService }, { type: SnackbarService }, { type: DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();

function UpdateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "mat-spinner", 4);
    ɵɵelementEnd();
} }
function UpdateComponent_ng_container_2_mat_toolbar_18_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 12);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵtext(3);
    ɵɵpipe(4, "titlecase");
    ɵɵelementEnd();
} if (rf & 2) {
    var subCollection_r9 = ctx.$implicit;
    var ctx_r8 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate3("routerLink", "/", ɵɵpipeBind1(1, 4, ctx_r8.collectionName$), ":", ɵɵpipeBind1(2, 6, ctx_r8.id$), ":", subCollection_r9 == null ? null : subCollection_r9.id, "/list");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, subCollection_r9 == null ? null : subCollection_r9.plural), " ");
} }
function UpdateComponent_ng_container_2_mat_toolbar_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-toolbar");
    ɵɵtemplate(1, UpdateComponent_ng_container_2_mat_toolbar_18_a_1_Template, 5, 10, "a", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    var subCollections_r7 = ctx.ngIf;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", subCollections_r7);
} }
function UpdateComponent_ng_container_2_mat_administration_form_21_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-administration-form", 13);
    ɵɵlistener("save", function UpdateComponent_ng_container_2_mat_administration_form_21_Template_mat_administration_form_save_0_listener($event) { ɵɵrestoreView(_r11); var ctx_r10 = ɵɵnextContext(2); return ctx_r10.save($event); });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("fields", ɵɵpipeBind1(1, 1, ctx_r6.fields$));
} }
function UpdateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "mat-administration-breadcrumbs", 5);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "mat-toolbar", 6);
    ɵɵelementStart(4, "h1");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 7);
    ɵɵtext(7);
    ɵɵpipe(8, "async");
    ɵɵelement(9, "br");
    ɵɵelementStart(10, "small");
    ɵɵtext(11);
    ɵɵpipe(12, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "a", 8);
    ɵɵpipe(14, "async");
    ɵɵelementStart(15, "mat-icon");
    ɵɵtext(16, "keyboard_backspace");
    ɵɵelementEnd();
    ɵɵtext(17, " Cancel ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(18, UpdateComponent_ng_container_2_mat_toolbar_18_Template, 2, 1, "mat-toolbar", 9);
    ɵɵpipe(19, "async");
    ɵɵelementStart(20, "mat-card");
    ɵɵtemplate(21, UpdateComponent_ng_container_2_mat_administration_form_21_Template, 2, 3, "mat-administration-form", 10);
    ɵɵpipe(22, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var metadata_r4 = ctx.ngIf;
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("collectionName", ɵɵpipeBind1(2, 7, ctx_r1.collectionName$));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("Update ", metadata_r4 == null ? null : metadata_r4.single, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 9, ctx_r1.entityTitle$));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("#", ɵɵpipeBind1(12, 11, ctx_r1.id$), "");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("routerLink", "/", ɵɵpipeBind1(14, 13, ctx_r1.collectionPath$), "/list");
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ɵɵpipeBind1(19, 15, ctx_r1.subCollections$));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(22, 17, ctx_r1.fields$));
} }
function UpdateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-chip-list");
    ɵɵelementStart(1, "mat-chip", 14);
    ɵɵtext(2, "No entity metadata defined for\u00A0");
    ɵɵelementStart(3, "strong");
    ɵɵtext(4);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵtext(6, "!");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
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
    UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(SnackbarService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(DataAdapterService), ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    UpdateComponent.ɵcmp = ɵɵdefineComponent({ type: UpdateComponent, selectors: [["mat-administration-update"]], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "update", 3, "collectionName"], [1, "justify-between", "toolbar-main"], [1, "entity-title"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [4, "ngIf"], [3, "fields", "save", 4, "ngIf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink"], [3, "fields", "save"], ["color", "warn"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, UpdateComponent_div_0_Template, 2, 0, "div", 0);
            ɵɵpipe(1, "async");
            ɵɵtemplate(2, UpdateComponent_ng_container_2_Template, 23, 19, "ng-container", 1);
            ɵɵpipe(3, "async");
            ɵɵtemplate(4, UpdateComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r2 = ɵɵreference(5);
            ɵɵproperty("ngIf", ɵɵpipeBind1(1, 3, ctx.isLoading$));
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
        } }, directives: [NgIf, MatSpinner, BreadcrumbsComponent, MatToolbar, MatAnchor, RouterLinkWithHref, MatIcon, MatCard, NgForOf, FormComponent, MatChipList, MatChip], pipes: [AsyncPipe, TitleCasePipe], styles: [".entity-title[_ngcontent-%COMP%]{font-size:1rem;line-height:1rem}.entity-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-weight:400}.toolbar-main[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}"] });
    return UpdateComponent;
}(MetadataComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(UpdateComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-update',
                templateUrl: './update.component.html',
                styleUrls: ['./update.component.scss']
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: SnackbarService }, { type: Router }, { type: DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();

function MenuComponent_ng_container_1_mat_divider_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-divider");
} }
function MenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "titlecase");
    ɵɵelementEnd();
    ɵɵtemplate(4, MenuComponent_ng_container_1_mat_divider_4_Template, 1, 0, "mat-divider", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var entity_r1 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("routerLink", entity_r1.id);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, entity_r1.plural), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entity_r1 == null ? null : entity_r1.showMenuDividerAfter);
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
    MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
    MenuComponent.ɵcmp = ɵɵdefineComponent({ type: MenuComponent, selectors: [["mat-administration-menu"]], decls: 2, vars: 1, consts: [["color", "primary"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "color", "primary", "routerLinkActive", "active", 3, "routerLink"], [4, "ngIf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-nav-list", 0);
            ɵɵtemplate(1, MenuComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.entities);
        } }, directives: [MatNavList, NgForOf, MatListItem, RouterLinkWithHref, RouterLinkActive, NgIf, MatDivider], pipes: [TitleCasePipe], styles: [".active[_ngcontent-%COMP%]{color:#fff!important;background-color:#000!important}"] });
    return MenuComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MenuComponent, [{
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

var MaterialAdministrationModule = /** @class */ (function () {
    function MaterialAdministrationModule() {
    }
    MaterialAdministrationModule.forRoot = function (configFactory, appNameFactory) {
        if (appNameFactory === void 0) { appNameFactory = function () { return undefined; }; }
        return {
            ngModule: MaterialAdministrationModule,
            providers: [
                {
                    provide: FIREBASE_OPTIONS,
                    useValue: configFactory
                },
                {
                    provide: FIREBASE_APP_NAME,
                    useFactory: appNameFactory
                },
                ValueFormatService
            ]
        };
    };
    MaterialAdministrationModule.ɵmod = ɵɵdefineNgModule({ type: MaterialAdministrationModule });
    MaterialAdministrationModule.ɵinj = ɵɵdefineInjector({ factory: function MaterialAdministrationModule_Factory(t) { return new (t || MaterialAdministrationModule)(); }, providers: [
            ValueFormatService,
            DatePipe
        ], imports: [[
                CommonModule,
                MatChipsModule,
                MatCardModule,
                MatIconModule,
                MatToolbarModule,
                RouterModule,
                MatProgressSpinnerModule,
                CdkTableModule,
                MatTableModule,
                FormsModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatFileInputModule,
                MatButtonModule,
                CKEditorModule,
                MatInputModule,
                MatSelectModule,
                MatRadioModule,
                MatCheckboxModule,
                MatSlideToggleModule,
                MatDatepickerModule,
                MatSnackBarModule,
                MatNativeDateModule,
                MatPaginatorModule,
                MatSortModule,
                AngularFirestoreModule,
                AngularFireStorageModule,
                FlexLayoutModule,
                MatMenuModule,
                MatSidenavModule,
                MatListModule
            ],
            RouterModule,
            BrowserAnimationsModule,
            AngularFirestoreModule,
            AngularFireStorageModule] });
    return MaterialAdministrationModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MaterialAdministrationModule, { declarations: [ListComponent,
        AddComponent,
        UpdateComponent,
        MetadataComponent,
        FormComponent,
        BreadcrumbsComponent,
        MenuComponent], imports: [CommonModule,
        MatChipsModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        RouterModule,
        MatProgressSpinnerModule,
        CdkTableModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatFileInputModule,
        MatButtonModule,
        CKEditorModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSortModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        FlexLayoutModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule], exports: [ListComponent,
        AddComponent,
        UpdateComponent,
        MetadataComponent,
        FormComponent,
        MenuComponent,
        BreadcrumbsComponent,
        RouterModule,
        BrowserAnimationsModule,
        AngularFirestoreModule,
        AngularFireStorageModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaterialAdministrationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ListComponent,
                    AddComponent,
                    UpdateComponent,
                    MetadataComponent,
                    FormComponent,
                    BreadcrumbsComponent,
                    MenuComponent
                ],
                imports: [
                    CommonModule,
                    MatChipsModule,
                    MatCardModule,
                    MatIconModule,
                    MatToolbarModule,
                    RouterModule,
                    MatProgressSpinnerModule,
                    CdkTableModule,
                    MatTableModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatFileInputModule,
                    MatButtonModule,
                    CKEditorModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    MatCheckboxModule,
                    MatSlideToggleModule,
                    MatDatepickerModule,
                    MatSnackBarModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatSortModule,
                    AngularFirestoreModule,
                    AngularFireStorageModule,
                    FlexLayoutModule,
                    MatMenuModule,
                    MatSidenavModule,
                    MatListModule
                ],
                providers: [
                    ValueFormatService,
                    DatePipe
                ],
                exports: [
                    ListComponent,
                    AddComponent,
                    UpdateComponent,
                    MetadataComponent,
                    FormComponent,
                    MenuComponent,
                    BreadcrumbsComponent,
                    RouterModule,
                    BrowserAnimationsModule,
                    AngularFirestoreModule,
                    AngularFireStorageModule
                ]
            }]
    }], null, null); })();

var materialAdministrationRoutes = [
    {
        path: ':collection/list',
        component: ListComponent
    },
    {
        path: ':collection/add',
        component: AddComponent
    },
    {
        path: ':collection/update/:id',
        component: UpdateComponent
    },
    {
        path: ':collection',
        redirectTo: ':collection/list'
    }
];

/*
 * Public API Surface of material-administration
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddComponent, BreadcrumbsComponent, DataAdapterService, FormComponent, ListComponent, MaterialAdministrationModule, MenuComponent, MetadataComponent, SnackbarService, UpdateComponent, ValueFormatService, materialAdministrationRoutes };
//# sourceMappingURL=material-administration.js.map
