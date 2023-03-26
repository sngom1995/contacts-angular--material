import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  sidenav: any;
  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter<any>();

}
