import {
 ChangeDetectionStrategy, Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  tab$ = this.route.paramMap.pipe(map(params => params.get('tab')));

  importData = `
  \`\`\`typescript
  import { MatFormModule } from '@weblauncher/material-form';
  \`\`\``;

  constructor(private route: ActivatedRoute) {

  }
}
