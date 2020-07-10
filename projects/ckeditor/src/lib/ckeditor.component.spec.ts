import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCkeditorComponent } from './ckeditor.component';

describe('MaterialCkeditorComponent', () => {
  let component: MaterialCkeditorComponent;
  let fixture: ComponentFixture<MaterialCkeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialCkeditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCkeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
