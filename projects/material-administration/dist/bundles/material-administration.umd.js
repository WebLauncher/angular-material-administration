(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('lodash'), require('@angular/router'), require('firebase/app'), require('uuid'), require('@angular/fire/firestore'), require('@angular/fire/storage'), require('@angular/material/snack-bar'), require('@angular/common'), require('@angular/material/progress-spinner'), require('@angular/flex-layout/flex'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/toolbar'), require('@angular/material/card'), require('@angular/forms'), require('@ckeditor/ckeditor5-build-classic'), require('@angular/flex-layout/extended'), require('@ckeditor/ckeditor5-angular'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/radio'), require('@angular/material/datepicker'), require('@angular/material/checkbox'), require('@angular/material/slide-toggle'), require('@weblauncher/material-file-input'), require('@angular/material/chips'), require('@angular/material/table'), require('@angular/material/menu'), require('@angular/material/list'), require('@angular/material/divider'), require('@angular/cdk/table'), require('@angular/fire'), require('@angular/flex-layout'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/sidenav'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('material-administration', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'lodash', '@angular/router', 'firebase/app', 'uuid', '@angular/fire/firestore', '@angular/fire/storage', '@angular/material/snack-bar', '@angular/common', '@angular/material/progress-spinner', '@angular/flex-layout/flex', '@angular/material/button', '@angular/material/icon', '@angular/material/toolbar', '@angular/material/card', '@angular/forms', '@ckeditor/ckeditor5-build-classic', '@angular/flex-layout/extended', '@ckeditor/ckeditor5-angular', '@angular/material/form-field', '@angular/material/input', '@angular/material/select', '@angular/material/core', '@angular/material/radio', '@angular/material/datepicker', '@angular/material/checkbox', '@angular/material/slide-toggle', '@weblauncher/material-file-input', '@angular/material/chips', '@angular/material/table', '@angular/material/menu', '@angular/material/list', '@angular/material/divider', '@angular/cdk/table', '@angular/fire', '@angular/flex-layout', '@angular/material/paginator', '@angular/material/sort', '@angular/material/sidenav', '@angular/platform-browser/animations'], factory) :
    (global = global || self, factory(global['material-administration'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.lodash, global.ng.router, global.app, global.uuid, global.ng.fire.firestore, global.ng.fire.storage, global.ng.material.snackBar, global.ng.common, global.ng.material.progressSpinner, global.ng.flexLayout.flex, global.ng.material.button, global.ng.material.icon, global.ng.material.toolbar, global.ng.material.card, global.ng.forms, global.ClassicEditor, global.ng.flexLayout.extended, global.ckeditor5Angular, global.ng.material.formField, global.ng.material.input, global.ng.material.select, global.ng.material.core, global.ng.material.radio, global.ng.material.datepicker, global.ng.material.checkbox, global.ng.material.slideToggle, global.materialFileInput, global.ng.material.chips, global.ng.material.table, global.ng.material.menu, global.ng.material.list, global.ng.material.divider, global.ng.cdk.table, global.ng.fire, global.ng.flexLayout, global.ng.material.paginator, global.ng.material.sort, global.ng.material.sidenav, global.ng.platformBrowser.animations));
}(this, (function (exports, core, rxjs, operators, lodash, router, app, uuid, firestore, storage, snackBar, common, progressSpinner, flex, button, icon, toolbar, card, forms, ClassicEditor, extended, ckeditor5Angular, formField, input, select, core$1, radio, datepicker, checkbox, slideToggle, materialFileInput, chips, table, menu, list, divider, table$1, fire, flexLayout, paginator, sort, sidenav, animations) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            return rxjs.from(this.db.collection(collection).add(item));
        };
        DataAdapterService.prototype.update = function (collection, id, item) {
            return rxjs.from(this.db.collection(collection).doc(id).update(item));
        };
        DataAdapterService.prototype.delete = function (collection, id) {
            return rxjs.from(this.db.collection(collection).doc(id).delete());
        };
        DataAdapterService.prototype.upload = function (file) {
            var path = uuid.v4() + '_' + (file === null || file === void 0 ? void 0 : file.name);
            var fileRef = this.storage.ref(path);
            var task = this.storage.upload(path, file);
            var downloadData$ = new rxjs.Subject();
            task.snapshotChanges().pipe(operators.finalize(function () {
                fileRef.getDownloadURL().subscribe(function (downloadUrl) {
                    downloadData$.next({
                        downloadUrl: downloadUrl,
                        path: path
                    });
                    downloadData$.complete();
                });
            })).subscribe();
            return downloadData$.pipe(operators.filter(Boolean));
        };
        DataAdapterService.prototype.removeUpload = function (filePath) {
            return this.storage.ref(filePath).delete();
        };
        DataAdapterService.prototype.getTimestamp = function () {
            return app.firestore.FieldValue.serverTimestamp();
        };
        DataAdapterService.ɵfac = function DataAdapterService_Factory(t) { return new (t || DataAdapterService)(core.ɵɵinject(firestore.AngularFirestore), core.ɵɵinject(storage.AngularFireStorage)); };
        DataAdapterService.ɵprov = core.ɵɵdefineInjectable({ token: DataAdapterService, factory: DataAdapterService.ɵfac, providedIn: 'root' });
        return DataAdapterService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DataAdapterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: firestore.AngularFirestore }, { type: storage.AngularFireStorage }]; }, null); })();

    var MetadataComponent = /** @class */ (function () {
        function MetadataComponent(route, dataAdapterService, metadata) {
            var _this = this;
            this.route = route;
            this.dataAdapterService = dataAdapterService;
            this.metadata = metadata;
            this.metadata$ = new rxjs.BehaviorSubject(null);
            this.collectionPath$ = new rxjs.BehaviorSubject(null);
            this.collectionName$ = new rxjs.BehaviorSubject(null);
            this.subCollections$ = new rxjs.BehaviorSubject(null);
            this.isLoading$ = new rxjs.BehaviorSubject(true);
            this.destroyed$ = new rxjs.Subject();
            this.route.params.pipe(operators.map(function (params) { return params === null || params === void 0 ? void 0 : params.collection; }), operators.tap(function () { return _this.isLoading$.next(true); }), operators.takeUntil(this.destroyed$))
                .subscribe(this.collectionPath$);
            this.collectionPath$.pipe(operators.map(function (collectionPath) { return collectionPath.replace(/\:/gi, '\/'); }), operators.shareReplay(1))
                .subscribe(this.collectionName$);
            this.collectionName$.pipe(operators.map(function (name) { return _this.getMetadata(name, metadata); }), operators.shareReplay(1)).subscribe(this.metadata$);
            this.metadata$.pipe(operators.map(function (metadata) {
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
                return lodash.capitalize(field);
            }
            return lodash.capitalize(field === null || field === void 0 ? void 0 : field.label);
        };
        MetadataComponent.prototype.getFields = function () {
            var _this = this;
            return this.metadata$.pipe(operators.map(function (metadata) {
                var entries = Object.entries(metadata === null || metadata === void 0 ? void 0 : metadata.fields);
                return entries
                    .map(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    var _c;
                    return typeof value === 'object' ? __assign(__assign({}, value), { name: key, label: (((_c = value) === null || _c === void 0 ? void 0 : _c.label) || _this.getFieldLabel(key)) }) :
                        { name: key, label: _this.getFieldLabel(key) };
                })
                    .filter(function (field) { return _this.showField(metadata, field); });
            }), operators.switchMap(function (fields) { return rxjs.forkJoin(fields.map(function (field) { return _this.addAdditionalMetadata(field); })); }), operators.catchError(function (error) {
                console.error(error);
                return rxjs.of([]);
            }), operators.shareReplay(1));
        };
        MetadataComponent.prototype.processUploads = function (item, metadata, action) {
            var _this = this;
            var filesKeys = Object.keys(item)
                .filter(function (key) { return Array.isArray(item[key]) && item[key][0] instanceof File; });
            if (filesKeys.length) {
                var itemUpdates_1 = {};
                return rxjs.forkJoin(filesKeys.map(function (key) {
                    return _this.dataAdapterService.upload(item[key][0]).pipe(operators.map(function (downloadData) {
                        return { key: key, downloadData: downloadData };
                    }), operators.catchError(function (error) {
                        console.error(error);
                        return rxjs.of(null);
                    }));
                })).pipe(operators.map(function (uploadedFiles) {
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
            return rxjs.of(item);
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
                    .pipe(operators.take(1), operators.map(function (docs) {
                    return __assign(__assign({}, field), { options: docs.map(function (doc) {
                            var _a, _b;
                            return {
                                value: doc[(_a = field === null || field === void 0 ? void 0 : field.data) === null || _a === void 0 ? void 0 : _a.collectionValue],
                                label: doc[(_b = field === null || field === void 0 ? void 0 : field.data) === null || _b === void 0 ? void 0 : _b.collectionLabel]
                            };
                        }) });
                }));
            }
            return rxjs.of(field);
        };
        MetadataComponent.prototype.showField = function (metadata, field) {
            return field.name !== 'id' &&
                (!(metadata === null || metadata === void 0 ? void 0 : metadata.createdTimestamp) || (metadata === null || metadata === void 0 ? void 0 : metadata.createdTimestamp) !== field.name) &&
                (!(metadata === null || metadata === void 0 ? void 0 : metadata.updatedTimestamp) || (metadata === null || metadata === void 0 ? void 0 : metadata.updatedTimestamp) !== field.name);
        };
        MetadataComponent.ɵfac = function MetadataComponent_Factory(t) { return new (t || MetadataComponent)(core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(DataAdapterService), core.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
        MetadataComponent.ɵcmp = core.ɵɵdefineComponent({ type: MetadataComponent, selectors: [["mat-administration-metadata"]], decls: 2, vars: 0, template: function MetadataComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, "metadata works!");
                core.ɵɵelementEnd();
            } }, styles: [""] });
        return MetadataComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MetadataComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-administration-metadata',
                    templateUrl: './metadata.component.html',
                    styleUrls: ['./metadata.component.scss']
                }]
        }], function () { return [{ type: router.ActivatedRoute }, { type: DataAdapterService }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
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
        SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(core.ɵɵinject(snackBar.MatSnackBar)); };
        SnackbarService.ɵprov = core.ɵɵdefineInjectable({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });
        return SnackbarService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SnackbarService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: snackBar.MatSnackBar }]; }, null); })();

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
        ValueFormatService.ɵfac = function ValueFormatService_Factory(t) { return new (t || ValueFormatService)(core.ɵɵinject(common.DatePipe), core.ɵɵinject('MAT_ADMINISTRATION_METADATA', 8)); };
        ValueFormatService.ɵprov = core.ɵɵdefineInjectable({ token: ValueFormatService, factory: ValueFormatService.ɵfac, providedIn: 'root' });
        return ValueFormatService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ValueFormatService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: common.DatePipe }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: ['MAT_ADMINISTRATION_METADATA']
                }] }]; }, null); })();

    function BreadcrumbsComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var item_r1 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, item_r1.source), " ");
    } }
    function BreadcrumbsComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var item_r1 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", item_r1.name, " ");
    } }
    function BreadcrumbsComponent_ng_container_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "arrow_right");
        core.ɵɵelementEnd();
    } }
    function BreadcrumbsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵelementStart(2, "a", 3);
        core.ɵɵtemplate(3, BreadcrumbsComponent_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 4);
        core.ɵɵtemplate(4, BreadcrumbsComponent_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 4);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, BreadcrumbsComponent_ng_container_1_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var last_r2 = ctx.last;
        core.ɵɵadvance(2);
        core.ɵɵproperty("routerLink", item_r1.url);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", item_r1.source);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !item_r1.source);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !last_r2);
    } }
    var BreadcrumbsComponent = /** @class */ (function () {
        function BreadcrumbsComponent(metadata, dataAdapterService) {
            this.metadata = metadata;
            this.dataAdapterService = dataAdapterService;
            this.collectionName$ = new rxjs.BehaviorSubject('');
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
            this.links$ = this.collectionName$.pipe(operators.map(function (collectionName) {
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
                source: this.dataAdapterService.get(collection, itemId).pipe(operators.map(function (data) { return data === null || data === void 0 ? void 0 : data[metadata.titleField || 'title']; })),
                url: ["" + baseUrl + collection + "/update/" + itemId]
            };
        };
        BreadcrumbsComponent.prototype.getPartUrls = function (part, metadata, baseUrl, action, itemId) {
            if (baseUrl === void 0) { baseUrl = ''; }
            if (action === void 0) { action = 'list'; }
            if (itemId === void 0) { itemId = ''; }
            if (action === 'list') {
                return [{
                        name: lodash.capitalize(metadata.plural),
                        url: ["" + baseUrl + part + "/list"]
                    }];
            }
            if (action === 'add') {
                return [
                    {
                        name: lodash.capitalize(metadata.plural),
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
                        name: lodash.capitalize(metadata.plural),
                        url: ["" + baseUrl + part + "/list"]
                    },
                    {
                        name: "Update " + metadata.single,
                        url: null
                    }
                ];
            }
        };
        BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(core.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8), core.ɵɵdirectiveInject(DataAdapterService)); };
        BreadcrumbsComponent.ɵcmp = core.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["mat-administration-breadcrumbs"]], inputs: { collectionName: "collectionName", action: "action" }, decls: 3, vars: 3, consts: [["fxLayout", "row", "fxAlign", "start"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-button", "", 3, "routerLink"], [4, "ngIf"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵtemplate(1, BreadcrumbsComponent_ng_container_1_Template, 6, 4, "ng-container", 1);
                core.ɵɵpipe(2, "async");
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(2, 1, ctx.links$));
            } }, directives: [flex.DefaultLayoutDirective, common.NgForOf, flex.DefaultLayoutAlignDirective, button.MatAnchor, router.RouterLinkWithHref, common.NgIf, icon.MatIcon], pipes: [common.AsyncPipe], styles: [""] });
        return BreadcrumbsComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BreadcrumbsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-administration-breadcrumbs',
                    templateUrl: './breadcrumbs.component.html',
                    styleUrls: ['./breadcrumbs.component.css']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: ['MAT_ADMINISTRATION_METADATA']
                }] }, { type: DataAdapterService }]; }, { collectionName: [{
                type: core.Input
            }], action: [{
                type: core.Input
            }] }); })();

    function FormComponent_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c0 = function (a0) { return { field: a0 }; };
    function FormComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, FormComponent_ng_container_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 6);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r4 = ctx.$implicit;
        core.ɵɵnextContext(2);
        var _r1 = core.ɵɵreference(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c0, field_r4));
    } }
    function FormComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, FormComponent_ng_container_1_div_1_Template, 2, 4, "div", 3);
        core.ɵɵelementStart(2, "div", 4);
        core.ɵɵelementStart(3, "button", 5);
        core.ɵɵtext(4, "Save ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r0.fields);
    } }
    function FormComponent_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 14);
        core.ɵɵelementStart(1, "label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "ckeditor", 15);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        var ctx_r7 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("editor", ctx_r7.Editor);
    } }
    function FormComponent_ng_template_2_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "textarea", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
    } }
    function FormComponent_ng_template_2_mat_form_field_4_mat_option_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 19);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r20 = ctx.$implicit;
        core.ɵɵproperty("value", option_r20 == null ? null : option_r20.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r20 == null ? null : option_r20.label, " ");
    } }
    function FormComponent_ng_template_2_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-select", 17);
        core.ɵɵtemplate(4, FormComponent_ng_template_2_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", field_r6 == null ? null : field_r6.options);
    } }
    function FormComponent_ng_template_2_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 19);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r23 = ctx.$implicit;
        core.ɵɵproperty("value", option_r23 == null ? null : option_r23.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(option_r23 == null ? null : option_r23.label);
    } }
    function FormComponent_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 20);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-radio-group", 21);
        core.ɵɵtemplate(4, FormComponent_ng_template_2_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("", field_r6 == null ? null : field_r6.label, ":");
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", field_r6 == null ? null : field_r6.options);
    } }
    function FormComponent_ng_template_2_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "input", 22);
        core.ɵɵelement(4, "mat-datepicker-toggle", 23);
        core.ɵɵelement(5, "mat-datepicker", 24, 25);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r25 = core.ɵɵreference(6);
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("matDatepicker", _r25);
        core.ɵɵadvance(1);
        core.ɵɵproperty("for", _r25);
    } }
    function FormComponent_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 26);
        core.ɵɵelementStart(1, "mat-checkbox", 27);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("value", true);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
    } }
    function FormComponent_ng_template_2_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 26);
        core.ɵɵelementStart(1, "mat-slide-toggle", 21);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", field_r6 == null ? null : field_r6.label, " ");
    } }
    function FormComponent_ng_template_2_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "mat-file-input", 28);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
    } }
    function FormComponent_ng_template_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r34 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 29);
        core.ɵɵelement(4, "img", 30);
        core.ɵɵelementStart(5, "button", 31);
        core.ɵɵlistener("click", function FormComponent_ng_template_2_div_10_div_1_Template_button_click_5_listener() { core.ɵɵrestoreView(_r34); var field_r6 = core.ɵɵnextContext(2).field; var ctx_r32 = core.ɵɵnextContext(); return ctx_r32.removeImage(field_r6); });
        core.ɵɵtext(6, "Remove");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext(2).field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(2);
        core.ɵɵproperty("src", field_r6 == null ? null : field_r6.value, core.ɵɵsanitizeUrl);
    } }
    function FormComponent_ng_template_2_div_10_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "mat-file-input", 28);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext(2).field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
    } }
    function FormComponent_ng_template_2_div_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, FormComponent_ng_template_2_div_10_div_1_Template, 7, 2, "div", 1);
        core.ɵɵtemplate(2, FormComponent_ng_template_2_div_10_mat_form_field_2_Template, 4, 3, "mat-form-field", 1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r6 == null ? null : field_r6.value);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !(field_r6 == null ? null : field_r6.value));
    } }
    function FormComponent_ng_template_2_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "input", 32);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = core.ɵɵnextContext().field;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(field_r6 == null ? null : field_r6.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControlName", field_r6 == null ? null : field_r6.name)("placeholder", field_r6 == null ? null : field_r6.placeholder);
    } }
    function FormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 7);
        core.ɵɵelementContainerStart(1, 8);
        core.ɵɵtemplate(2, FormComponent_ng_template_2_div_2_Template, 4, 3, "div", 9);
        core.ɵɵtemplate(3, FormComponent_ng_template_2_mat_form_field_3_Template, 4, 2, "mat-form-field", 10);
        core.ɵɵtemplate(4, FormComponent_ng_template_2_mat_form_field_4_Template, 5, 3, "mat-form-field", 10);
        core.ɵɵtemplate(5, FormComponent_ng_template_2_div_5_Template, 5, 3, "div", 11);
        core.ɵɵtemplate(6, FormComponent_ng_template_2_mat_form_field_6_Template, 7, 4, "mat-form-field", 10);
        core.ɵɵtemplate(7, FormComponent_ng_template_2_div_7_Template, 3, 3, "div", 12);
        core.ɵɵtemplate(8, FormComponent_ng_template_2_div_8_Template, 3, 2, "div", 12);
        core.ɵɵtemplate(9, FormComponent_ng_template_2_mat_form_field_9_Template, 4, 3, "mat-form-field", 10);
        core.ɵɵtemplate(10, FormComponent_ng_template_2_div_10_Template, 3, 2, "div", 10);
        core.ɵɵtemplate(11, FormComponent_ng_template_2_mat_form_field_11_Template, 4, 3, "mat-form-field", 13);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r6 = ctx.field;
        core.ɵɵproperty("ngStyle", field_r6 == null ? null : field_r6.style == null ? null : field_r6.style.form);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", field_r6 == null ? null : field_r6.inputType);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "ckeditor");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "textarea");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "select");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "radio");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "datepicker");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "toggle");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "file");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "image");
    } }
    var FormComponent = /** @class */ (function () {
        function FormComponent(formBuilder) {
            this.formBuilder = formBuilder;
            this.save = new core.EventEmitter();
            this.valueChanges = new core.EventEmitter();
            this.Editor = ClassicEditor;
            this.destroyed$ = new rxjs.Subject();
        }
        FormComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            if (this.fields) {
                this.form = this.formBuilder.group((_a = this.fields) === null || _a === void 0 ? void 0 : _a.reduce(function (prev, cur) {
                    var _a;
                    return __assign(__assign({}, prev), (_a = {}, _a[cur === null || cur === void 0 ? void 0 : cur.name] = [_this.getFieldValue(cur), _this.getFieldValidators(cur)], _a));
                }, {}));
                this.form.valueChanges.pipe(operators.takeUntil(this.destroyed$)).subscribe(this.valueChanges);
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
            return [forms.Validators.required];
        };
        FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(core.ɵɵdirectiveInject(forms.FormBuilder)); };
        FormComponent.ɵcmp = core.ɵɵdefineComponent({ type: FormComponent, selectors: [["mat-administration-form"]], inputs: { fields: "fields" }, outputs: { save: "save", valueChanges: "valueChanges" }, decls: 4, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [4, "ngIf"], ["formField", ""], [4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-field-container", 3, "ngStyle"], [3, "ngSwitch"], ["class", "ckeditor", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "radio", 4, "ngSwitchCase"], ["class", "checkbox", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ckeditor"], [3, "formControlName", "editor"], ["matInput", "", 3, "formControlName"], [3, "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "radio"], ["color", "primary", 3, "formControlName"], ["matInput", "", 3, "formControlName", "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], [1, "checkbox"], ["color", "primary", 3, "formControlName", "value"], [3, "formControlName", "placeholder"], ["fxLayout", "row", "fxLayoutAlign", "start"], ["alt", "field?.label", 1, "file-input-image", 3, "src"], ["type", "button", "mat-raised-button", "", 3, "click"], ["matInput", "", 3, "formControlName", "placeholder"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "form", 0);
                core.ɵɵlistener("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
                core.ɵɵtemplate(1, FormComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
                core.ɵɵtemplate(2, FormComponent_ng_template_2_Template, 12, 11, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.fields);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgIf, common.NgForOf, button.MatButton, common.NgTemplateOutlet, common.NgStyle, extended.DefaultStyleDirective, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, ckeditor5Angular.CKEditorComponent, forms.NgControlStatus, forms.FormControlName, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, select.MatSelect, core$1.MatOption, radio.MatRadioGroup, radio.MatRadioButton, datepicker.MatDatepickerInput, datepicker.MatDatepickerToggle, formField.MatSuffix, datepicker.MatDatepicker, checkbox.MatCheckbox, slideToggle.MatSlideToggle, materialFileInput.MatFileInputComponent, flex.DefaultLayoutDirective, flex.DefaultLayoutAlignDirective], styles: ["[_nghost-%COMP%]{display:block}mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}.ckeditor[_ngcontent-%COMP%]{margin-bottom:1rem}.ckeditor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{opacity:.54;transform:scale(.75)}.radio[_ngcontent-%COMP%]{margin-bottom:1rem}.radio[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{margin-right:1rem}.radio[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin-right:.5rem}.file-input-image[_ngcontent-%COMP%]{max-height:3rem;margin-right:1rem}"], changeDetection: 0 });
        return FormComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FormComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-administration-form',
                    templateUrl: './form.component.html',
                    styleUrls: ['./form.component.scss'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: forms.FormBuilder }]; }, { fields: [{
                type: core.Input
            }], save: [{
                type: core.Output
            }], valueChanges: [{
                type: core.Output
            }] }); })();

    function AddComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵelement(1, "mat-spinner", 4);
        core.ɵɵelementEnd();
    } }
    function AddComponent_ng_container_2_mat_administration_form_12_Template(rf, ctx) { if (rf & 1) {
        var _r7 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-administration-form", 9);
        core.ɵɵlistener("save", function AddComponent_ng_container_2_mat_administration_form_12_Template_mat_administration_form_save_0_listener($event) { core.ɵɵrestoreView(_r7); var ctx_r6 = core.ɵɵnextContext(2); return ctx_r6.save($event); });
        core.ɵɵpipe(1, "async");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext(2);
        core.ɵɵproperty("fields", core.ɵɵpipeBind1(1, 1, ctx_r5.fields$));
    } }
    function AddComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "mat-administration-breadcrumbs", 5);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementStart(3, "mat-toolbar", 6);
        core.ɵɵelementStart(4, "h1");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "a", 7);
        core.ɵɵpipe(7, "async");
        core.ɵɵelementStart(8, "mat-icon");
        core.ɵɵtext(9, "keyboard_backspace");
        core.ɵɵelementEnd();
        core.ɵɵtext(10, " Cancel ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "mat-card");
        core.ɵɵtemplate(12, AddComponent_ng_container_2_mat_administration_form_12_Template, 2, 3, "mat-administration-form", 8);
        core.ɵɵpipe(13, "async");
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var metadata_r4 = ctx.ngIf;
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("collectionName", core.ɵɵpipeBind1(2, 4, ctx_r1.collectionName$));
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1("Add ", metadata_r4 == null ? null : metadata_r4.single, "");
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate1("routerLink", "/", core.ɵɵpipeBind1(7, 6, ctx_r1.collectionPath$), "/list");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(13, 8, ctx_r1.fields$));
    } }
    function AddComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-chip-list");
        core.ɵɵelementStart(1, "mat-chip", 10);
        core.ɵɵtext(2, "No entity metadata defined for\u00A0");
        core.ɵɵelementStart(3, "strong");
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "async");
        core.ɵɵelementEnd();
        core.ɵɵtext(6, "!");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
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
            _this.fields$ = _this.getFields().pipe(operators.tap(function () { _this.isLoading$.next(false); }));
            return _this;
        }
        AddComponent.prototype.save = function (item) {
            var _this = this;
            this.isLoading$.next(true);
            rxjs.combineLatest([
                this.metadata$,
                this.collectionName$
            ])
                .pipe(operators.take(1), operators.switchMap(function (_a) {
                var _b = __read(_a, 2), metadata = _b[0], collectionName = _b[1];
                return _this.processUploads(item, metadata, 'add').pipe(operators.map(function (updatedItem) {
                    return [
                        metadata,
                        collectionName,
                        updatedItem
                    ];
                }));
            }), operators.switchMap(function (_a) {
                var _b = __read(_a, 3), _ = _b[0], collectionName = _b[1], updatedItem = _b[2];
                return _this.dataAdapterService.add(collectionName, _this.getWithTimestamps(updatedItem, 'add'));
            })).subscribe(function () {
                var _a;
                _this.snackbar.success(lodash.capitalize((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + " added successfully!");
                _this.router.navigate(["/" + _this.collectionPath$.getValue() + "/list"]);
            }, function () { var _a; return _this.snackbar.error("There was an error adding " + ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + "!"); }, function () { return _this.isLoading$.next(false); });
        };
        AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(SnackbarService), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(DataAdapterService), core.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
        AddComponent.ɵcmp = core.ɵɵdefineComponent({ type: AddComponent, selectors: [["mat-administration-add"]], features: [core.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "add", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [3, "fields", "save", 4, "ngIf"], [3, "fields", "save"], ["color", "warn"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, AddComponent_div_0_Template, 2, 0, "div", 0);
                core.ɵɵpipe(1, "async");
                core.ɵɵtemplate(2, AddComponent_ng_container_2_Template, 14, 10, "ng-container", 1);
                core.ɵɵpipe(3, "async");
                core.ɵɵtemplate(4, AddComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r2 = core.ɵɵreference(5);
                core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(1, 3, ctx.isLoading$));
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
            } }, directives: [common.NgIf, progressSpinner.MatSpinner, BreadcrumbsComponent, toolbar.MatToolbar, button.MatAnchor, router.RouterLinkWithHref, icon.MatIcon, card.MatCard, FormComponent, chips.MatChipList, chips.MatChip], pipes: [common.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;position:relative}"] });
        return AddComponent;
    }(MetadataComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AddComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-administration-add',
                    templateUrl: './add.component.html',
                    styleUrls: ['./add.component.scss']
                }]
        }], function () { return [{ type: router.ActivatedRoute }, { type: SnackbarService }, { type: router.Router }, { type: DataAdapterService }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: ['MAT_ADMINISTRATION_METADATA']
                }] }]; }, null); })();

    function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵelement(1, "mat-spinner", 4);
        core.ɵɵelementEnd();
    } }
    function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 20);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var column_r14 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", column_r14 == null ? null : column_r14.label, " ");
    } }
    function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "img", 25);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r19 = core.ɵɵnextContext().$implicit;
        var column_r14 = core.ɵɵnextContext(2).$implicit;
        var ctx_r20 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵstyleMap(column_r14 == null ? null : column_r14.style == null ? null : column_r14.style.list);
        core.ɵɵproperty("src", core.ɵɵpipeBind1(2, 4, ctx_r20.getValue(element_r19, column_r14 == null ? null : column_r14.id)), core.ɵɵsanitizeUrl)("alt", column_r14 == null ? null : column_r14.id);
    } }
    function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "span", 26);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r19 = core.ɵɵnextContext().$implicit;
        var column_r14 = core.ɵɵnextContext(2).$implicit;
        var ctx_r21 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵstyleMap(column_r14 == null ? null : column_r14.style == null ? null : column_r14.style.list);
        core.ɵɵproperty("innerHTML", core.ɵɵpipeBind1(2, 3, ctx_r21.getValue(element_r19, column_r14 == null ? null : column_r14.id)), core.ɵɵsanitizeHtml);
    } }
    function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 21);
        core.ɵɵelementContainerStart(1, 22);
        core.ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_2_Template, 3, 6, "ng-container", 23);
        core.ɵɵtemplate(3, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_ng_container_3_Template, 3, 5, "ng-container", 24);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var column_r14 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", column_r14 == null ? null : column_r14.format);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "image");
    } }
    function ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0, 19);
        core.ɵɵtemplate(1, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_th_1_Template, 2, 1, "th", 13);
        core.ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_td_2_Template, 4, 2, "td", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var column_r14 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("matColumnDef", column_r14 == null ? null : column_r14.id);
    } }
    function ListComponent_ng_container_2_table_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, ListComponent_ng_container_2_table_11_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 18);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var column_r14 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (column_r14 == null ? null : column_r14.id) != "actions" && (column_r14 == null ? null : column_r14.id) != "entities");
    } }
    function ListComponent_ng_container_2_table_11_th_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 20);
        core.ɵɵtext(1, "Manage");
        core.ɵɵelementEnd();
    } }
    function ListComponent_ng_container_2_table_11_td_6_button_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "button", 30);
        core.ɵɵpipe(1, "async");
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "titlecase");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var subCollection_r31 = ctx.$implicit;
        var element_r28 = core.ɵɵnextContext().$implicit;
        var ctx_r30 = core.ɵɵnextContext(3);
        core.ɵɵpropertyInterpolate3("routerLink", "/", core.ɵɵpipeBind1(1, 4, ctx_r30.collectionName$), ":", element_r28.id, ":", subCollection_r31 == null ? null : subCollection_r31.id, "/list");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 6, subCollection_r31 == null ? null : subCollection_r31.plural), " ");
    } }
    function ListComponent_ng_container_2_table_11_td_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 21);
        core.ɵɵelementStart(1, "button", 27);
        core.ɵɵtext(2, "More...");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-menu", null, 28);
        core.ɵɵtemplate(5, ListComponent_ng_container_2_table_11_td_6_button_5_Template, 4, 8, "button", 29);
        core.ɵɵpipe(6, "async");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r29 = core.ɵɵreference(4);
        var ctx_r9 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matMenuTriggerFor", _r29);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(6, 2, ctx_r9.subCollections$));
    } }
    function ListComponent_ng_container_2_table_11_th_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "th", 20);
    } }
    function ListComponent_ng_container_2_table_11_td_9_Template(rf, ctx) { if (rf & 1) {
        var _r35 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "td", 21);
        core.ɵɵelementStart(1, "button", 31);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementStart(3, "mat-icon");
        core.ɵɵtext(4, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "button", 32);
        core.ɵɵlistener("click", function ListComponent_ng_container_2_table_11_td_9_Template_button_click_5_listener() { core.ɵɵrestoreView(_r35); var element_r33 = ctx.$implicit; var ctx_r34 = core.ɵɵnextContext(3); return ctx_r34.delete(element_r33); });
        core.ɵɵelementStart(6, "mat-icon");
        core.ɵɵtext(7, "delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r33 = ctx.$implicit;
        var ctx_r11 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate2("routerLink", "/", core.ɵɵpipeBind1(2, 2, ctx_r11.collectionPath$), "/update/", element_r33.id, "");
    } }
    function ListComponent_ng_container_2_table_11_tr_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "tr", 33);
    } }
    function ListComponent_ng_container_2_table_11_tr_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "tr", 34);
    } }
    function ListComponent_ng_container_2_table_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "table", 10);
        core.ɵɵpipe(1, "async");
        core.ɵɵtemplate(2, ListComponent_ng_container_2_table_11_ng_container_2_Template, 2, 1, "ng-container", 11);
        core.ɵɵpipe(3, "async");
        core.ɵɵelementContainerStart(4, 12);
        core.ɵɵtemplate(5, ListComponent_ng_container_2_table_11_th_5_Template, 2, 0, "th", 13);
        core.ɵɵtemplate(6, ListComponent_ng_container_2_table_11_td_6_Template, 7, 4, "td", 14);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementContainerStart(7, 15);
        core.ɵɵtemplate(8, ListComponent_ng_container_2_table_11_th_8_Template, 1, 0, "th", 13);
        core.ɵɵtemplate(9, ListComponent_ng_container_2_table_11_td_9_Template, 8, 4, "td", 14);
        core.ɵɵelementContainerEnd();
        core.ɵɵtemplate(10, ListComponent_ng_container_2_table_11_tr_10_Template, 1, 0, "tr", 16);
        core.ɵɵpipe(11, "async");
        core.ɵɵtemplate(12, ListComponent_ng_container_2_table_11_tr_12_Template, 1, 0, "tr", 17);
        core.ɵɵpipe(13, "async");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext(2);
        core.ɵɵproperty("dataSource", core.ɵɵpipeBind1(1, 4, ctx_r5.list$));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(3, 6, ctx_r5.displayedColumns$));
        core.ɵɵadvance(8);
        core.ɵɵproperty("matHeaderRowDef", core.ɵɵpipeBind1(11, 8, ctx_r5.displayedColumnsNames$));
        core.ɵɵadvance(2);
        core.ɵɵproperty("matRowDefColumns", core.ɵɵpipeBind1(13, 10, ctx_r5.displayedColumnsNames$));
    } }
    function ListComponent_ng_container_2_mat_card_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-card");
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "a", 35);
        core.ɵɵpipe(3, "async");
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var metadata_r4 = core.ɵɵnextContext().ngIf;
        var ctx_r6 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" No ", metadata_r4 == null ? null : metadata_r4.plural, " added. ");
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate1("routerLink", "/", core.ɵɵpipeBind1(3, 3, ctx_r6.collectionPath$), "/add");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("Add ", metadata_r4 == null ? null : metadata_r4.single, "");
    } }
    function ListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "mat-administration-breadcrumbs", 5);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementStart(3, "mat-toolbar", 6);
        core.ɵɵelementStart(4, "h1");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "button", 7);
        core.ɵɵpipe(7, "async");
        core.ɵɵelementStart(8, "mat-icon");
        core.ɵɵtext(9, "add");
        core.ɵɵelementEnd();
        core.ɵɵtext(10);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(11, ListComponent_ng_container_2_table_11_Template, 14, 12, "table", 8);
        core.ɵɵpipe(12, "async");
        core.ɵɵtemplate(13, ListComponent_ng_container_2_mat_card_13_Template, 5, 5, "mat-card", 9);
        core.ɵɵpipe(14, "async");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var metadata_r4 = ctx.ngIf;
        var ctx_r1 = core.ɵɵnextContext();
        var tmp_4_0 = null;
        var currVal_4 = (tmp_4_0 = core.ɵɵpipeBind1(12, 10, ctx_r1.list$)) == null ? null : tmp_4_0.length;
        var tmp_5_0 = null;
        var currVal_5 = !((tmp_5_0 = core.ɵɵpipeBind1(14, 12, ctx_r1.list$)) == null ? null : tmp_5_0.length);
        core.ɵɵadvance(1);
        core.ɵɵproperty("collectionName", core.ɵɵpipeBind1(2, 6, ctx_r1.collectionName$));
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1("Manage ", metadata_r4 == null ? null : metadata_r4.plural, "");
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate1("routerLink", "/", core.ɵɵpipeBind1(7, 8, ctx_r1.collectionPath$), "/add");
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1(" Add ", metadata_r4 == null ? null : metadata_r4.single, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", currVal_4);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", currVal_5);
    } }
    function ListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-chip-list");
        core.ɵɵelementStart(1, "mat-chip", 36);
        core.ɵɵtext(2, "No entity metadata defined for\u00A0");
        core.ɵɵelementStart(3, "strong");
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "async");
        core.ɵɵelementEnd();
        core.ɵɵtext(6, "!");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
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
            _this.displayedColumnsNames$ = _this.displayedColumns$.pipe(operators.map(function (columns) { return columns.map(function (column) { return column === null || column === void 0 ? void 0 : column.id; }); }));
            _this.list$ = _this.collectionName$.pipe(operators.switchMap(function (collection) { var _a; return _this.dataAdapterService.list(collection, ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.idField) || 'id'); }), operators.tap(function () { return _this.isLoading$.next(false); }), operators.shareReplay(1));
            return _this;
        }
        ListComponent.prototype.getValue = function (element, column) {
            var _this = this;
            return this.metadata$.pipe(operators.map(function (metadata) { var _a; return _this.valueFormatService.transform(element[column], (_a = metadata === null || metadata === void 0 ? void 0 : metadata.fields[column]) === null || _a === void 0 ? void 0 : _a.type, metadata === null || metadata === void 0 ? void 0 : metadata.fields[column]); }));
        };
        ListComponent.prototype.delete = function (element) {
            var _this = this;
            this.isLoading$.next(true);
            this.dataAdapterService.delete(this.collectionName$.getValue(), element === null || element === void 0 ? void 0 : element.id)
                .subscribe(function () { var _a; return _this.snackbar.success(lodash.capitalize((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + " added successfully!"); }, function () { var _a; return _this.snackbar.error("There was an error adding " + ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + "!"); }, function () { return _this.isLoading$.next(false); });
        };
        ListComponent.prototype.getDisplayedColumns = function () {
            var _this = this;
            return this.metadata$.pipe(operators.withLatestFrom(this.subCollections$), operators.map(function (_a) {
                var _b = __read(_a, 2), metadata = _b[0], subCollections = _b[1];
                var collumns = _this.getDisplayableColumns(metadata === null || metadata === void 0 ? void 0 : metadata.fields);
                if (subCollections) {
                    collumns.push({ id: 'entities', label: 'Manage' });
                }
                collumns.push({ id: 'actions', label: 'Actions' });
                return collumns;
            }), operators.shareReplay(1));
        };
        ListComponent.prototype.getDisplayableColumns = function (columns) {
            var _this = this;
            if (!columns) {
                return [];
            }
            return Object.keys(lodash.pickBy(columns, function (col) { return col && !(col === null || col === void 0 ? void 0 : col.hideInList); })).map(function (column) {
                var _a, _b;
                return __assign(__assign({}, columns[column]), { label: ((_a = columns[column]) === null || _a === void 0 ? void 0 : _a.label) || _this.getFieldLabel({ label: column }), id: ((_b = columns[column]) === null || _b === void 0 ? void 0 : _b.id) || column });
            });
        };
        ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(ValueFormatService), core.ɵɵdirectiveInject(SnackbarService), core.ɵɵdirectiveInject(DataAdapterService), core.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
        ListComponent.ɵcmp = core.ɵɵdefineComponent({ type: ListComponent, selectors: [["mat-administration-list"]], features: [core.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "list", 3, "collectionName"], [1, "justify-between"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["matColumnDef", "entities"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "list-image", 3, "src", "alt"], [3, "innerHTML"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], ["entitiesMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "aria-label", "Manage", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Edit", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", "aria-label", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-button", "", "color", "primary", 3, "routerLink"], ["color", "warn"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, ListComponent_div_0_Template, 2, 0, "div", 0);
                core.ɵɵpipe(1, "async");
                core.ɵɵtemplate(2, ListComponent_ng_container_2_Template, 15, 14, "ng-container", 1);
                core.ɵɵpipe(3, "async");
                core.ɵɵtemplate(4, ListComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r2 = core.ɵɵreference(5);
                core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(1, 3, ctx.isLoading$));
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
            } }, directives: [common.NgIf, progressSpinner.MatSpinner, BreadcrumbsComponent, toolbar.MatToolbar, button.MatButton, router.RouterLink, icon.MatIcon, table.MatTable, common.NgForOf, table.MatColumnDef, table.MatHeaderCellDef, table.MatCellDef, table.MatHeaderRowDef, table.MatRowDef, table.MatHeaderCell, table.MatCell, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, menu.MatMenuTrigger, menu._MatMenu, menu.MatMenuItem, table.MatHeaderRow, table.MatRow, card.MatCard, button.MatAnchor, router.RouterLinkWithHref, chips.MatChipList, chips.MatChip], pipes: [common.AsyncPipe, common.TitleCasePipe], styles: ["[_nghost-%COMP%]{position:relative;display:block}table[_ngcontent-%COMP%]{width:100%}.list-image[_ngcontent-%COMP%]{max-height:5rem;padding:1rem}.mat-column-id[_ngcontent-%COMP%]{max-width:2rem;overflow:hidden;text-overflow:ellipsis;padding-right:1rem}"] });
        return ListComponent;
    }(MetadataComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-administration-list',
                    templateUrl: './list.component.html',
                    styleUrls: ['./list.component.scss']
                }]
        }], function () { return [{ type: router.ActivatedRoute }, { type: ValueFormatService }, { type: SnackbarService }, { type: DataAdapterService }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: ['MAT_ADMINISTRATION_METADATA']
                }] }]; }, null); })();

    function UpdateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵelement(1, "mat-spinner", 4);
        core.ɵɵelementEnd();
    } }
    function UpdateComponent_ng_container_2_mat_toolbar_18_a_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 12);
        core.ɵɵpipe(1, "async");
        core.ɵɵpipe(2, "async");
        core.ɵɵtext(3);
        core.ɵɵpipe(4, "titlecase");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var subCollection_r9 = ctx.$implicit;
        var ctx_r8 = core.ɵɵnextContext(3);
        core.ɵɵpropertyInterpolate3("routerLink", "/", core.ɵɵpipeBind1(1, 4, ctx_r8.collectionName$), ":", core.ɵɵpipeBind1(2, 6, ctx_r8.id$), ":", subCollection_r9 == null ? null : subCollection_r9.id, "/list");
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(4, 8, subCollection_r9 == null ? null : subCollection_r9.plural), " ");
    } }
    function UpdateComponent_ng_container_2_mat_toolbar_18_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-toolbar");
        core.ɵɵtemplate(1, UpdateComponent_ng_container_2_mat_toolbar_18_a_1_Template, 5, 10, "a", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var subCollections_r7 = ctx.ngIf;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", subCollections_r7);
    } }
    function UpdateComponent_ng_container_2_mat_administration_form_21_Template(rf, ctx) { if (rf & 1) {
        var _r11 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-administration-form", 13);
        core.ɵɵlistener("save", function UpdateComponent_ng_container_2_mat_administration_form_21_Template_mat_administration_form_save_0_listener($event) { core.ɵɵrestoreView(_r11); var ctx_r10 = core.ɵɵnextContext(2); return ctx_r10.save($event); });
        core.ɵɵpipe(1, "async");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r6 = core.ɵɵnextContext(2);
        core.ɵɵproperty("fields", core.ɵɵpipeBind1(1, 1, ctx_r6.fields$));
    } }
    function UpdateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "mat-administration-breadcrumbs", 5);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementStart(3, "mat-toolbar", 6);
        core.ɵɵelementStart(4, "h1");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "span", 7);
        core.ɵɵtext(7);
        core.ɵɵpipe(8, "async");
        core.ɵɵelement(9, "br");
        core.ɵɵelementStart(10, "small");
        core.ɵɵtext(11);
        core.ɵɵpipe(12, "async");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "a", 8);
        core.ɵɵpipe(14, "async");
        core.ɵɵelementStart(15, "mat-icon");
        core.ɵɵtext(16, "keyboard_backspace");
        core.ɵɵelementEnd();
        core.ɵɵtext(17, " Cancel ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(18, UpdateComponent_ng_container_2_mat_toolbar_18_Template, 2, 1, "mat-toolbar", 9);
        core.ɵɵpipe(19, "async");
        core.ɵɵelementStart(20, "mat-card");
        core.ɵɵtemplate(21, UpdateComponent_ng_container_2_mat_administration_form_21_Template, 2, 3, "mat-administration-form", 10);
        core.ɵɵpipe(22, "async");
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var metadata_r4 = ctx.ngIf;
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("collectionName", core.ɵɵpipeBind1(2, 7, ctx_r1.collectionName$));
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1("Update ", metadata_r4 == null ? null : metadata_r4.single, "");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(8, 9, ctx_r1.entityTitle$));
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1("#", core.ɵɵpipeBind1(12, 11, ctx_r1.id$), "");
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate1("routerLink", "/", core.ɵɵpipeBind1(14, 13, ctx_r1.collectionPath$), "/list");
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(19, 15, ctx_r1.subCollections$));
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(22, 17, ctx_r1.fields$));
    } }
    function UpdateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-chip-list");
        core.ɵɵelementStart(1, "mat-chip", 14);
        core.ɵɵtext(2, "No entity metadata defined for\u00A0");
        core.ɵɵelementStart(3, "strong");
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "async");
        core.ɵɵelementEnd();
        core.ɵɵtext(6, "!");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(5, 1, ctx_r3.collectionName$));
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
            _this.id$ = new rxjs.BehaviorSubject(null);
            _this.route.params.pipe(operators.map(function (params) { return params.id; }), operators.takeUntil(_this.destroyed$)).subscribe(_this.id$);
            _this.doc$ = _this.getDoc();
            _this.fields$ = rxjs.combineLatest([_this.getFields(), _this.doc$])
                .pipe(operators.map(function (_a) {
                var _b = __read(_a, 2), fields = _b[0], doc = _b[1];
                return fields.map(function (field) {
                    return __assign(__assign({}, field), { value: _this.getFieldValue(field, doc) });
                });
            }));
            _this.entityTitle$ = _this.doc$.pipe(operators.map(function (doc) { var _a; return doc === null || doc === void 0 ? void 0 : doc[((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.titleField) || 'title']; }));
            return _this;
        }
        UpdateComponent.prototype.save = function (item) {
            var _this = this;
            this.isLoading$.next(true);
            rxjs.combineLatest([
                this.metadata$,
                this.collectionName$
            ])
                .pipe(operators.take(1), operators.switchMap(function (_a) {
                var _b = __read(_a, 2), metadata = _b[0], collectionName = _b[1];
                return _this.processUploads(item, metadata, 'update').pipe(operators.map(function (updatedItem) {
                    return [
                        metadata,
                        collectionName,
                        updatedItem
                    ];
                }));
            }), operators.switchMap(function (_a) {
                var _b = __read(_a, 3), _ = _b[0], collectionName = _b[1], updatedItem = _b[2];
                return _this.dataAdapterService.update(collectionName, _this.id$.getValue(), _this.getWithTimestamps(updatedItem, 'update'));
            })).subscribe(function () {
                var _a;
                _this.snackbar.success(lodash.capitalize((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + " updated successfully!");
                _this.router.navigate(["/" + _this.collectionPath$.getValue() + "/list"]);
            }, function () { var _a; return _this.snackbar.error("There was an error updating " + ((_a = _this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.single) + "!"); }, function () { return _this.isLoading$.next(false); });
        };
        UpdateComponent.prototype.getDoc = function () {
            var _this = this;
            return this.dataAdapterService.get(this.collectionName$.getValue(), this.id$.getValue()).pipe(operators.tap(function () { return _this.isLoading$.next(false); }), operators.shareReplay(1));
        };
        UpdateComponent.prototype.getFieldValue = function (field, doc) {
            var _a;
            if ((field === null || field === void 0 ? void 0 : field.type) === 'timestamp') {
                return (_a = doc === null || doc === void 0 ? void 0 : doc[field === null || field === void 0 ? void 0 : field.name]) === null || _a === void 0 ? void 0 : _a.toDate();
            }
            return doc === null || doc === void 0 ? void 0 : doc[field === null || field === void 0 ? void 0 : field.name];
        };
        UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(SnackbarService), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(DataAdapterService), core.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
        UpdateComponent.ɵcmp = core.ɵɵdefineComponent({ type: UpdateComponent, selectors: [["mat-administration-update"]], features: [core.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [["class", "loading-box-overflow", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noMetadata", ""], [1, "loading-box-overflow"], ["diameter", "50"], ["action", "update", 3, "collectionName"], [1, "justify-between", "toolbar-main"], [1, "entity-title"], ["mat-raised-button", "", "color", "warn", 3, "routerLink"], [4, "ngIf"], [3, "fields", "save", 4, "ngIf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "aria-label", "Manage", 3, "routerLink"], [3, "fields", "save"], ["color", "warn"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, UpdateComponent_div_0_Template, 2, 0, "div", 0);
                core.ɵɵpipe(1, "async");
                core.ɵɵtemplate(2, UpdateComponent_ng_container_2_Template, 23, 19, "ng-container", 1);
                core.ɵɵpipe(3, "async");
                core.ɵɵtemplate(4, UpdateComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r2 = core.ɵɵreference(5);
                core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(1, 3, ctx.isLoading$));
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(3, 5, ctx.metadata$))("ngIfElse", _r2);
            } }, directives: [common.NgIf, progressSpinner.MatSpinner, BreadcrumbsComponent, toolbar.MatToolbar, button.MatAnchor, router.RouterLinkWithHref, icon.MatIcon, card.MatCard, common.NgForOf, FormComponent, chips.MatChipList, chips.MatChip], pipes: [common.AsyncPipe, common.TitleCasePipe], styles: [".entity-title[_ngcontent-%COMP%]{font-size:1rem;line-height:1rem}.entity-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-weight:400}.toolbar-main[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}"] });
        return UpdateComponent;
    }(MetadataComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UpdateComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-administration-update',
                    templateUrl: './update.component.html',
                    styleUrls: ['./update.component.scss']
                }]
        }], function () { return [{ type: router.ActivatedRoute }, { type: SnackbarService }, { type: router.Router }, { type: DataAdapterService }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: ['MAT_ADMINISTRATION_METADATA']
                }] }]; }, null); })();

    function MenuComponent_ng_container_1_mat_divider_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "mat-divider");
    } }
    function MenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "a", 2);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "titlecase");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, MenuComponent_ng_container_1_mat_divider_4_Template, 1, 0, "mat-divider", 3);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entity_r1 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("routerLink", entity_r1.id);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 3, entity_r1.plural), " ");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", entity_r1 == null ? null : entity_r1.showMenuDividerAfter);
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
        MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(core.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
        MenuComponent.ɵcmp = core.ɵɵdefineComponent({ type: MenuComponent, selectors: [["mat-administration-menu"]], decls: 2, vars: 1, consts: [["color", "primary"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "color", "primary", "routerLinkActive", "active", 3, "routerLink"], [4, "ngIf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-nav-list", 0);
                core.ɵɵtemplate(1, MenuComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.entities);
            } }, directives: [list.MatNavList, common.NgForOf, list.MatListItem, router.RouterLinkWithHref, router.RouterLinkActive, common.NgIf, divider.MatDivider], pipes: [common.TitleCasePipe], styles: [".active[_ngcontent-%COMP%]{color:#fff!important;background-color:#000!important}"] });
        return MenuComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MenuComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-administration-menu',
                    templateUrl: './menu.component.html',
                    styleUrls: ['./menu.component.css']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
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
                        provide: fire.FIREBASE_OPTIONS,
                        useValue: configFactory
                    },
                    {
                        provide: fire.FIREBASE_APP_NAME,
                        useFactory: appNameFactory
                    },
                    ValueFormatService
                ]
            };
        };
        MaterialAdministrationModule.ɵmod = core.ɵɵdefineNgModule({ type: MaterialAdministrationModule });
        MaterialAdministrationModule.ɵinj = core.ɵɵdefineInjector({ factory: function MaterialAdministrationModule_Factory(t) { return new (t || MaterialAdministrationModule)(); }, providers: [
                ValueFormatService,
                common.DatePipe
            ], imports: [[
                    common.CommonModule,
                    chips.MatChipsModule,
                    card.MatCardModule,
                    icon.MatIconModule,
                    toolbar.MatToolbarModule,
                    router.RouterModule,
                    progressSpinner.MatProgressSpinnerModule,
                    table$1.CdkTableModule,
                    table.MatTableModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    formField.MatFormFieldModule,
                    materialFileInput.MatFileInputModule,
                    button.MatButtonModule,
                    ckeditor5Angular.CKEditorModule,
                    input.MatInputModule,
                    select.MatSelectModule,
                    radio.MatRadioModule,
                    checkbox.MatCheckboxModule,
                    slideToggle.MatSlideToggleModule,
                    datepicker.MatDatepickerModule,
                    snackBar.MatSnackBarModule,
                    core$1.MatNativeDateModule,
                    paginator.MatPaginatorModule,
                    sort.MatSortModule,
                    firestore.AngularFirestoreModule,
                    storage.AngularFireStorageModule,
                    flexLayout.FlexLayoutModule,
                    menu.MatMenuModule,
                    sidenav.MatSidenavModule,
                    list.MatListModule
                ],
                router.RouterModule,
                animations.BrowserAnimationsModule,
                firestore.AngularFirestoreModule,
                storage.AngularFireStorageModule] });
        return MaterialAdministrationModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(MaterialAdministrationModule, { declarations: [ListComponent,
            AddComponent,
            UpdateComponent,
            MetadataComponent,
            FormComponent,
            BreadcrumbsComponent,
            MenuComponent], imports: [common.CommonModule,
            chips.MatChipsModule,
            card.MatCardModule,
            icon.MatIconModule,
            toolbar.MatToolbarModule,
            router.RouterModule,
            progressSpinner.MatProgressSpinnerModule,
            table$1.CdkTableModule,
            table.MatTableModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            formField.MatFormFieldModule,
            materialFileInput.MatFileInputModule,
            button.MatButtonModule,
            ckeditor5Angular.CKEditorModule,
            input.MatInputModule,
            select.MatSelectModule,
            radio.MatRadioModule,
            checkbox.MatCheckboxModule,
            slideToggle.MatSlideToggleModule,
            datepicker.MatDatepickerModule,
            snackBar.MatSnackBarModule,
            core$1.MatNativeDateModule,
            paginator.MatPaginatorModule,
            sort.MatSortModule,
            firestore.AngularFirestoreModule,
            storage.AngularFireStorageModule,
            flexLayout.FlexLayoutModule,
            menu.MatMenuModule,
            sidenav.MatSidenavModule,
            list.MatListModule], exports: [ListComponent,
            AddComponent,
            UpdateComponent,
            MetadataComponent,
            FormComponent,
            MenuComponent,
            BreadcrumbsComponent,
            router.RouterModule,
            animations.BrowserAnimationsModule,
            firestore.AngularFirestoreModule,
            storage.AngularFireStorageModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MaterialAdministrationModule, [{
            type: core.NgModule,
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
                        common.CommonModule,
                        chips.MatChipsModule,
                        card.MatCardModule,
                        icon.MatIconModule,
                        toolbar.MatToolbarModule,
                        router.RouterModule,
                        progressSpinner.MatProgressSpinnerModule,
                        table$1.CdkTableModule,
                        table.MatTableModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        formField.MatFormFieldModule,
                        materialFileInput.MatFileInputModule,
                        button.MatButtonModule,
                        ckeditor5Angular.CKEditorModule,
                        input.MatInputModule,
                        select.MatSelectModule,
                        radio.MatRadioModule,
                        checkbox.MatCheckboxModule,
                        slideToggle.MatSlideToggleModule,
                        datepicker.MatDatepickerModule,
                        snackBar.MatSnackBarModule,
                        core$1.MatNativeDateModule,
                        paginator.MatPaginatorModule,
                        sort.MatSortModule,
                        firestore.AngularFirestoreModule,
                        storage.AngularFireStorageModule,
                        flexLayout.FlexLayoutModule,
                        menu.MatMenuModule,
                        sidenav.MatSidenavModule,
                        list.MatListModule
                    ],
                    providers: [
                        ValueFormatService,
                        common.DatePipe
                    ],
                    exports: [
                        ListComponent,
                        AddComponent,
                        UpdateComponent,
                        MetadataComponent,
                        FormComponent,
                        MenuComponent,
                        BreadcrumbsComponent,
                        router.RouterModule,
                        animations.BrowserAnimationsModule,
                        firestore.AngularFirestoreModule,
                        storage.AngularFireStorageModule
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

    exports.AddComponent = AddComponent;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.DataAdapterService = DataAdapterService;
    exports.FormComponent = FormComponent;
    exports.ListComponent = ListComponent;
    exports.MaterialAdministrationModule = MaterialAdministrationModule;
    exports.MenuComponent = MenuComponent;
    exports.MetadataComponent = MetadataComponent;
    exports.SnackbarService = SnackbarService;
    exports.UpdateComponent = UpdateComponent;
    exports.ValueFormatService = ValueFormatService;
    exports.materialAdministrationRoutes = materialAdministrationRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-administration.umd.js.map
