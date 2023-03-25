import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
      <mat-icon>face</mat-icon>
      click me!
    </button>
    <mat-checkbox></mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent {

}
