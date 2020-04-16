import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MetadataComponent } from '../metadata/metadata.component';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, shareReplay, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends MetadataComponent implements OnInit {
  fields$: Observable<any[]>;

  constructor(
    public route: ActivatedRoute,
    public db: AngularFirestore
  ) {
    super(route, db);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.fields$ = this.getFields();
  }

  save(doc: any) {
    console.log(doc);
  }
}
