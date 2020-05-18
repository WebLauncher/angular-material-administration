import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';
import * as firebase from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import { finalize, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
import * as i2 from "@angular/fire/storage";
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
        var path = uuidv4() + '_' + (file === null || file === void 0 ? void 0 : file.name);
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
        return firebase.firestore.FieldValue.serverTimestamp();
    };
    DataAdapterService.ɵfac = function DataAdapterService_Factory(t) { return new (t || DataAdapterService)(i0.ɵɵinject(i1.AngularFirestore), i0.ɵɵinject(i2.AngularFireStorage)); };
    DataAdapterService.ɵprov = i0.ɵɵdefineInjectable({ token: DataAdapterService, factory: DataAdapterService.ɵfac, providedIn: 'root' });
    return DataAdapterService;
}());
export { DataAdapterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataAdapterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AngularFirestore }, { type: i2.AngularFireStorage }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXRlcmlhbC1hZG1pbmlzdHJhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLWFkYXB0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sS0FBSyxRQUFRLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFbEQ7SUFJRSw0QkFDVSxFQUFvQixFQUNwQixPQUEyQjtRQUQzQixPQUFFLEdBQUYsRUFBRSxDQUFrQjtRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtJQUNqQyxDQUFDO0lBRUwsZ0NBQUcsR0FBSCxVQUFJLFVBQWtCLEVBQUUsRUFBVTtRQUNoQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsaUNBQUksR0FBSixVQUFLLFVBQWtCLEVBQUUsT0FBZTtRQUN0QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsZ0NBQUcsR0FBSCxVQUFJLFVBQWtCLEVBQUUsSUFBUztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLFVBQWtCLEVBQUUsRUFBVSxFQUFFLElBQVM7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sVUFBa0IsRUFBRSxFQUFVO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLElBQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsSUFBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxDQUFBLENBQUM7UUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQU0sYUFBYSxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBRWxELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQ3pCLFFBQVEsQ0FBQztZQUNQLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO2dCQUM1QyxhQUFhLENBQUMsSUFBSSxDQUFDO29CQUNqQixXQUFXLGFBQUE7b0JBQ1gsSUFBSSxNQUFBO2lCQUNMLENBQUMsQ0FBQztnQkFDSCxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWQsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBNkIsQ0FBQztJQUN6RSxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLFFBQWdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pELENBQUM7d0ZBckRVLGtCQUFrQjs4REFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTs2QkFWcEI7Q0FrRUMsQUF6REQsSUF5REM7U0F0RFksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhQWRhcHRlckludGVyZmFjZSwgRG93bmxvYWREYXRhIH0gZnJvbSAnLi9kYXRhLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBmcm9tLCBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YUFkYXB0ZXJTZXJ2aWNlIGltcGxlbWVudHMgRGF0YUFkYXB0ZXJJbnRlcmZhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBkYjogQW5ndWxhckZpcmVzdG9yZSxcclxuICAgIHByaXZhdGUgc3RvcmFnZTogQW5ndWxhckZpcmVTdG9yYWdlXHJcbiAgKSB7IH1cclxuXHJcbiAgZ2V0KGNvbGxlY3Rpb246IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2MoaWQpLnZhbHVlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbGlzdChjb2xsZWN0aW9uOiBzdHJpbmcsIGlkRmllbGQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS52YWx1ZUNoYW5nZXMoeyBpZEZpZWxkIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkKGNvbGxlY3Rpb246IHN0cmluZywgaXRlbTogYW55KSB7XHJcbiAgICByZXR1cm4gZnJvbSh0aGlzLmRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuYWRkKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShjb2xsZWN0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGl0ZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGZyb20odGhpcy5kYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRvYyhpZCkudXBkYXRlKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShjb2xsZWN0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBmcm9tKHRoaXMuZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2MoaWQpLmRlbGV0ZSgpKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZChmaWxlOiBGaWxlKTogT2JzZXJ2YWJsZTxEb3dubG9hZERhdGE+IHtcclxuICAgIGNvbnN0IHBhdGggPSB1dWlkdjQoKSArICdfJyArIGZpbGU/Lm5hbWU7XHJcbiAgICBjb25zdCBmaWxlUmVmID0gdGhpcy5zdG9yYWdlLnJlZihwYXRoKTtcclxuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnN0b3JhZ2UudXBsb2FkKHBhdGgsIGZpbGUpO1xyXG4gICAgY29uc3QgZG93bmxvYWREYXRhJCA9IG5ldyBTdWJqZWN0PERvd25sb2FkRGF0YT4oKTtcclxuXHJcbiAgICB0YXNrLnNuYXBzaG90Q2hhbmdlcygpLnBpcGUoXHJcbiAgICAgIGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICBmaWxlUmVmLmdldERvd25sb2FkVVJMKCkuc3Vic2NyaWJlKGRvd25sb2FkVXJsID0+IHtcclxuICAgICAgICAgIGRvd25sb2FkRGF0YSQubmV4dCh7XHJcbiAgICAgICAgICAgIGRvd25sb2FkVXJsLFxyXG4gICAgICAgICAgICBwYXRoXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRvd25sb2FkRGF0YSQuY29tcGxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICkuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgcmV0dXJuIGRvd25sb2FkRGF0YSQucGlwZShmaWx0ZXIoQm9vbGVhbikpIGFzIE9ic2VydmFibGU8RG93bmxvYWREYXRhPjtcclxuICB9XHJcblxyXG4gIHJlbW92ZVVwbG9hZChmaWxlUGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnJlZihmaWxlUGF0aCkuZGVsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lc3RhbXAoKSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==