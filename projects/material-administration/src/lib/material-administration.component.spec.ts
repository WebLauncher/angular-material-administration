import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAdministrationComponent } from './material-administration.component';

describe('MaterialAdministrationComponent', () => {
  let component: MaterialAdministrationComponent;
  let fixture: ComponentFixture<MaterialAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
