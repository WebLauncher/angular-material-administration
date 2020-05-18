import { Component, Optional, Inject } from '@angular/core';
import { BehaviorSubject, of, forkJoin, Subject } from 'rxjs';
import { map, shareReplay, switchMap, take, catchError, takeUntil, tap } from 'rxjs/operators';
import { capitalize } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/data-adapter.service";
export class MetadataComponent {
    constructor(route, dataAdapterService, metadata) {
        this.route = route;
        this.dataAdapterService = dataAdapterService;
        this.metadata = metadata;
        this.metadata$ = new BehaviorSubject(null);
        this.collectionPath$ = new BehaviorSubject(null);
        this.collectionName$ = new BehaviorSubject(null);
        this.subCollections$ = new BehaviorSubject(null);
        this.isLoading$ = new BehaviorSubject(true);
        this.destroyed$ = new Subject();
        this.route.params.pipe(map(params => params === null || params === void 0 ? void 0 : params.collection), tap(() => this.isLoading$.next(true)), takeUntil(this.destroyed$))
            .subscribe(this.collectionPath$);
        this.collectionPath$.pipe(map(collectionPath => collectionPath.replace(/\:/gi, '\/')), shareReplay(1))
            .subscribe(this.collectionName$);
        this.collectionName$.pipe(map(name => this.getMetadata(name, metadata)), shareReplay(1)).subscribe(this.metadata$);
        this.metadata$.pipe(map(metadata => {
            if (!(metadata === null || metadata === void 0 ? void 0 : metadata.entities)) {
                return null;
            }
            return Object.keys(metadata.entities).map(key => {
                return Object.assign({ id: key }, metadata.entities[key]);
            });
        })).subscribe(this.subCollections$);
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    getFieldLabel(field) {
        if (typeof field === 'string') {
            return capitalize(field);
        }
        return capitalize(field === null || field === void 0 ? void 0 : field.label);
    }
    getFields() {
        return this.metadata$.pipe(map(metadata => {
            const entries = Object.entries(metadata === null || metadata === void 0 ? void 0 : metadata.fields);
            return entries
                .map(([key, value]) => {
                var _a;
                return typeof value === 'object' ? Object.assign(Object.assign({}, value), { name: key, label: (((_a = value) === null || _a === void 0 ? void 0 : _a.label) || this.getFieldLabel(key)) }) :
                    { name: key, label: this.getFieldLabel(key) };
            })
                .filter(field => this.showField(metadata, field));
        }), switchMap(fields => forkJoin(fields.map(field => this.addAdditionalMetadata(field)))), catchError(error => {
            console.error(error);
            return of([]);
        }), shareReplay(1));
    }
    processUploads(item, metadata, action) {
        const filesKeys = Object.keys(item)
            .filter(key => Array.isArray(item[key]) && item[key][0] instanceof File);
        if (filesKeys.length) {
            const itemUpdates = {};
            return forkJoin(filesKeys.map(key => {
                return this.dataAdapterService.upload(item[key][0]).pipe(map(downloadData => {
                    return { key, downloadData };
                }), catchError(error => {
                    console.error(error);
                    return of(null);
                }));
            })).pipe(map((uploadedFiles) => {
                if (uploadedFiles) {
                    uploadedFiles.forEach(uploadedFile => {
                        var _a, _b;
                        itemUpdates[uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.key] = (_a = uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.downloadData) === null || _a === void 0 ? void 0 : _a.downloadUrl;
                        itemUpdates[(uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.key) + 'Path'] = (_b = uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.downloadData) === null || _b === void 0 ? void 0 : _b.path;
                    });
                }
                return Object.assign(Object.assign({}, item), itemUpdates);
            }));
        }
        return of(item);
    }
    getWithTimestamps(item, action) {
        var _a, _b, _c, _d;
        const newItem = Object.assign({}, item);
        const timestamp = this.dataAdapterService.getTimestamp();
        if (action === 'add' && ((_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.createdTimestamp)) {
            newItem[(_b = this.metadata$.getValue()) === null || _b === void 0 ? void 0 : _b.createdTimestamp] = timestamp;
        }
        if ((_c = this.metadata$.getValue()) === null || _c === void 0 ? void 0 : _c.updatedTimestamp) {
            newItem[(_d = this.metadata$.getValue()) === null || _d === void 0 ? void 0 : _d.updatedTimestamp] = timestamp;
        }
        return newItem;
    }
    getFieldMedatada(field) {
        var _a, _b;
        return (_b = (_a = this.metadata$.getValue()) === null || _a === void 0 ? void 0 : _a.entities) === null || _b === void 0 ? void 0 : _b[field];
    }
    getMetadata(collectionName, metadata) {
        const nameParts = collectionName.split('/');
        if (nameParts.length === 1) {
            return metadata.entities[nameParts[0]] || null;
        }
        return this.getMetadata(nameParts.slice(2).join('/'), metadata.entities[nameParts[0]]);
    }
    addAdditionalMetadata(field) {
        var _a, _b, _c;
        if (((field === null || field === void 0 ? void 0 : field.inputType) === 'select' || (field === null || field === void 0 ? void 0 : field.inputType) === 'radio') && ((_a = field === null || field === void 0 ? void 0 : field.data) === null || _a === void 0 ? void 0 : _a.type) === 'collection') {
            return this.dataAdapterService.list((_b = field === null || field === void 0 ? void 0 : field.data) === null || _b === void 0 ? void 0 : _b.collection, (_c = field === null || field === void 0 ? void 0 : field.data) === null || _c === void 0 ? void 0 : _c.collectionValue)
                .pipe(take(1), map(docs => {
                return Object.assign(Object.assign({}, field), { options: docs.map(doc => {
                        var _a, _b;
                        return {
                            value: doc[(_a = field === null || field === void 0 ? void 0 : field.data) === null || _a === void 0 ? void 0 : _a.collectionValue],
                            label: doc[(_b = field === null || field === void 0 ? void 0 : field.data) === null || _b === void 0 ? void 0 : _b.collectionLabel]
                        };
                    }) });
            }));
        }
        return of(field);
    }
    showField(metadata, field) {
        return field.name !== 'id' &&
            (!(metadata === null || metadata === void 0 ? void 0 : metadata.createdTimestamp) || (metadata === null || metadata === void 0 ? void 0 : metadata.createdTimestamp) !== field.name) &&
            (!(metadata === null || metadata === void 0 ? void 0 : metadata.updatedTimestamp) || (metadata === null || metadata === void 0 ? void 0 : metadata.updatedTimestamp) !== field.name);
    }
}
MetadataComponent.ɵfac = function MetadataComponent_Factory(t) { return new (t || MetadataComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.DataAdapterService), i0.ɵɵdirectiveInject('MAT_ADMINISTRATION_METADATA', 8)); };
MetadataComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MetadataComponent, selectors: [["mat-administration-metadata"]], decls: 2, vars: 0, template: function MetadataComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "metadata works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MetadataComponent, [{
        type: Component,
        args: [{
                selector: 'mat-administration-metadata',
                templateUrl: './metadata.component.html',
                styleUrls: ['./metadata.component.scss']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.DataAdapterService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['MAT_ADMINISTRATION_METADATA']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUUxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OztBQVVwQyxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLFlBQ1MsS0FBcUIsRUFDckIsa0JBQXNDLEVBQ2EsUUFBYTtRQUZoRSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ2EsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVZ6RSxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELG9CQUFlLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLG9CQUFlLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLG9CQUFlLEdBQStDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hGLGVBQVUsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsZUFBVSxHQUFH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YUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxnQkFBZ0IsTUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7a0ZBL0tVLGlCQUFpQiw2R0FXTiw2QkFBNkI7c0RBWHhDLGlCQUFpQjtRQ2Q5Qix5QkFBRztRQUFBLCtCQUFlO1FBQUEsaUJBQUk7O2tERGNULGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekM7O3NCQVlJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBvZiwgZm9ya0pvaW4sIFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRha2UsIGNhdGNoRXJyb3IsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRGF0YUFkYXB0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS1hZGFwdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEb3dubG9hZERhdGEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IE1hdEFkbWluaXN0cmF0aW9uRW50aXR5IH0gZnJvbSAnLi4vLi4vdHlwZXMvbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24tbWV0YWRhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtYWRtaW5pc3RyYXRpb24tbWV0YWRhdGEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWV0YWRhdGEuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIG1ldGFkYXRhJDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gIGNvbGxlY3Rpb25QYXRoJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gIGNvbGxlY3Rpb25OYW1lJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gIHN1YkNvbGxlY3Rpb25zJDogQmVoYXZpb3JTdWJqZWN0PE1hdEFkbWluaXN0cmF0aW9uRW50aXR5W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuICBpc0xvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG4gIGRlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwdWJsaWMgZGF0YUFkYXB0ZXJTZXJ2aWNlOiBEYXRhQWRhcHRlclNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCdNQVRfQURNSU5JU1RSQVRJT05fTUVUQURBVEEnKSBwdWJsaWMgbWV0YWRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShcclxuICAgICAgbWFwKHBhcmFtcyA9PiBwYXJhbXM/LmNvbGxlY3Rpb24pLFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5pc0xvYWRpbmckLm5leHQodHJ1ZSkpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxyXG4gICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHRoaXMuY29sbGVjdGlvblBhdGgkKTtcclxuXHJcbiAgICB0aGlzLmNvbGxlY3Rpb25QYXRoJC5waXBlKFxyXG4gICAgICBtYXAoY29sbGVjdGlvblBhdGggPT4gY29sbGVjdGlvblBhdGgucmVwbGFjZSgvXFw6L2dpLCAnXFwvJykpLFxyXG4gICAgICBzaGFyZVJlcGxheSgxKVxyXG4gICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHRoaXMuY29sbGVjdGlvbk5hbWUkKTtcclxuXHJcbiAgICB0aGlzLmNvbGxlY3Rpb25OYW1lJC5waXBlKFxyXG4gICAgICBtYXAobmFtZSA9PiB0aGlzLmdldE1ldGFkYXRhKG5hbWUsIG1ldGFkYXRhKSksXHJcbiAgICAgIHNoYXJlUmVwbGF5KDEpXHJcbiAgICApLnN1YnNjcmliZSh0aGlzLm1ldGFkYXRhJCk7XHJcblxyXG4gICAgdGhpcy5tZXRhZGF0YSQucGlwZShcclxuICAgICAgbWFwKG1ldGFkYXRhID0+IHtcclxuICAgICAgICBpZiAoIW1ldGFkYXRhPy5lbnRpdGllcykge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWV0YWRhdGEuZW50aXRpZXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICAgICAgLi4ubWV0YWRhdGEuZW50aXRpZXNba2V5XVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICkuc3Vic2NyaWJlKHRoaXMuc3ViQ29sbGVjdGlvbnMkKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRMYWJlbChmaWVsZDogYW55KTogc3RyaW5nIHtcclxuICAgIGlmICh0eXBlb2YgZmllbGQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBjYXBpdGFsaXplKGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FwaXRhbGl6ZShmaWVsZD8ubGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YWRhdGEkLnBpcGUoXHJcbiAgICAgIG1hcChtZXRhZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG1ldGFkYXRhPy5maWVsZHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50cmllc1xyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgKFtrZXksIHZhbHVlXSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/XHJcbiAgICAgICAgICAgICAgeyAuLi52YWx1ZSwgbmFtZToga2V5LCBsYWJlbDogKCh2YWx1ZSBhcyBhbnkpPy5sYWJlbCB8fCB0aGlzLmdldEZpZWxkTGFiZWwoa2V5KSkgfSA6XHJcbiAgICAgICAgICAgICAgeyBuYW1lOiBrZXksIGxhYmVsOiB0aGlzLmdldEZpZWxkTGFiZWwoa2V5KSB9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuZmlsdGVyKGZpZWxkID0+IHRoaXMuc2hvd0ZpZWxkKG1ldGFkYXRhLCBmaWVsZCkpO1xyXG4gICAgICB9KSxcclxuICAgICAgc3dpdGNoTWFwKGZpZWxkcyA9PiBmb3JrSm9pbihmaWVsZHMubWFwKGZpZWxkID0+IHRoaXMuYWRkQWRkaXRpb25hbE1ldGFkYXRhKGZpZWxkKSkpKSxcclxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBvZihbXSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzaGFyZVJlcGxheSgxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NVcGxvYWRzKGl0ZW0sIG1ldGFkYXRhLCBhY3Rpb246ICdhZGQnIHwgJ3VwZGF0ZScpIHtcclxuICAgIGNvbnN0IGZpbGVzS2V5cyA9IE9iamVjdC5rZXlzKGl0ZW0pXHJcbiAgICAgIC5maWx0ZXIoa2V5ID0+IEFycmF5LmlzQXJyYXkoaXRlbVtrZXldKSAmJiBpdGVtW2tleV1bMF0gaW5zdGFuY2VvZiBGaWxlKTtcclxuXHJcbiAgICBpZiAoZmlsZXNLZXlzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBpdGVtVXBkYXRlcyA9IHt9O1xyXG5cclxuICAgICAgcmV0dXJuIGZvcmtKb2luKGZpbGVzS2V5cy5tYXAoa2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhQWRhcHRlclNlcnZpY2UudXBsb2FkKGl0ZW1ba2V5XVswXSkucGlwZShcclxuICAgICAgICAgIG1hcChkb3dubG9hZERhdGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXksIGRvd25sb2FkRGF0YSB9O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICkgYXMgT2JzZXJ2YWJsZTx7IGtleTogc3RyaW5nLCBkb3dubG9hZERhdGE6IERvd25sb2FkRGF0YSB9PjtcclxuICAgICAgfSkpLnBpcGUoXHJcbiAgICAgICAgbWFwKCh1cGxvYWRlZEZpbGVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAodXBsb2FkZWRGaWxlcykge1xyXG4gICAgICAgICAgICB1cGxvYWRlZEZpbGVzLmZvckVhY2godXBsb2FkZWRGaWxlID0+IHtcclxuICAgICAgICAgICAgICBpdGVtVXBkYXRlc1t1cGxvYWRlZEZpbGU/LmtleV0gPSB1cGxvYWRlZEZpbGU/LmRvd25sb2FkRGF0YT8uZG93bmxvYWRVcmw7XHJcbiAgICAgICAgICAgICAgaXRlbVVwZGF0ZXNbdXBsb2FkZWRGaWxlPy5rZXkgKyAnUGF0aCddID0gdXBsb2FkZWRGaWxlPy5kb3dubG9hZERhdGE/LnBhdGg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgIC4uLml0ZW1VcGRhdGVzXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9mKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2l0aFRpbWVzdGFtcHMoaXRlbSwgYWN0aW9uOiAnYWRkJyB8ICd1cGRhdGUnKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0geyAuLi5pdGVtIH07XHJcblxyXG4gICAgY29uc3QgdGltZXN0YW1wID0gdGhpcy5kYXRhQWRhcHRlclNlcnZpY2UuZ2V0VGltZXN0YW1wKCk7XHJcbiAgICBpZiAoYWN0aW9uID09PSAnYWRkJyAmJiB0aGlzLm1ldGFkYXRhJC5nZXRWYWx1ZSgpPy5jcmVhdGVkVGltZXN0YW1wKSB7XHJcbiAgICAgIG5ld0l0ZW1bdGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uY3JlYXRlZFRpbWVzdGFtcF0gPSB0aW1lc3RhbXA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8udXBkYXRlZFRpbWVzdGFtcCkge1xyXG4gICAgICBuZXdJdGVtW3RoaXMubWV0YWRhdGEkLmdldFZhbHVlKCk/LnVwZGF0ZWRUaW1lc3RhbXBdID0gdGltZXN0YW1wO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdJdGVtO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRNZWRhdGFkYShmaWVsZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YSQuZ2V0VmFsdWUoKT8uZW50aXRpZXM/LltmaWVsZF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1ldGFkYXRhKGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsIG1ldGFkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IG5hbWVQYXJ0cyA9IGNvbGxlY3Rpb25OYW1lLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgaWYgKG5hbWVQYXJ0cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIG1ldGFkYXRhLmVudGl0aWVzW25hbWVQYXJ0c1swXV0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YShuYW1lUGFydHMuc2xpY2UoMikuam9pbignLycpLCBtZXRhZGF0YS5lbnRpdGllc1tuYW1lUGFydHNbMF1dKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQWRkaXRpb25hbE1ldGFkYXRhKGZpZWxkKSB7XHJcbiAgICBpZiAoKGZpZWxkPy5pbnB1dFR5cGUgPT09ICdzZWxlY3QnIHx8IGZpZWxkPy5pbnB1dFR5cGUgPT09ICdyYWRpbycpICYmIGZpZWxkPy5kYXRhPy50eXBlID09PSAnY29sbGVjdGlvbicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0YUFkYXB0ZXJTZXJ2aWNlLmxpc3QoZmllbGQ/LmRhdGE/LmNvbGxlY3Rpb24sIGZpZWxkPy5kYXRhPy5jb2xsZWN0aW9uVmFsdWUpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgICAgbWFwKGRvY3MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmZpZWxkLFxyXG4gICAgICAgICAgICAgIG9wdGlvbnM6IGRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZG9jW2ZpZWxkPy5kYXRhPy5jb2xsZWN0aW9uVmFsdWVdLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZG9jW2ZpZWxkPy5kYXRhPy5jb2xsZWN0aW9uTGFiZWxdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9mKGZpZWxkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0ZpZWxkKG1ldGFkYXRhLCBmaWVsZCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLm5hbWUgIT09ICdpZCcgJiZcclxuICAgICAgKCFtZXRhZGF0YT8uY3JlYXRlZFRpbWVzdGFtcCB8fCBtZXRhZGF0YT8uY3JlYXRlZFRpbWVzdGFtcCAhPT0gZmllbGQubmFtZSkgJiZcclxuICAgICAgKCFtZXRhZGF0YT8udXBkYXRlZFRpbWVzdGFtcCB8fCBtZXRhZGF0YT8udXBkYXRlZFRpbWVzdGFtcCAhPT0gZmllbGQubmFtZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwPm1ldGFkYXRhIHdvcmtzITwvcD5cbiJdfQ==