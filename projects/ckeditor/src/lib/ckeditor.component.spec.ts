import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialCkeditorComponent } from './ckeditor.component';

describe('MaterialCkeditorComponent', () => {
  let component: MaterialCkeditorComponent;
  let fixture: ComponentFixture<MaterialCkeditorComponent>;

  beforeEach(waitForAsync(() => {
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
