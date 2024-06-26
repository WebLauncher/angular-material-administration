import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatFileInputComponent } from './file-input.component';

describe('MatFileInputComponent', () => {
  let component: MatFileInputComponent;
  let fixture: ComponentFixture<MatFileInputComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MatFileInputComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
