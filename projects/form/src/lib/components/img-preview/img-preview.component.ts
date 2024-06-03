import { CommonModule } from '@angular/common';
import {
 ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mat-img-preview',
  template: `<img class="file-input-image" [src]="src$ | async" [alt]="alt" style="width: 4rem"/>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})

export class ImgPreviewComponent implements OnInit {
  @Input() file!: File;

  @Input() alt!: string;

  src$ = new BehaviorSubject<string>('');

  constructor() { }

  ngOnInit() {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.src$.next(e.target?.result as string);
    };

    reader.readAsDataURL(this.file);
  }
}
