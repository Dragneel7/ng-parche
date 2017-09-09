import {Component, Input} from '@angular/core';
import {Application} from '../../models/application';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})

export class ApplicationListComponent {
  @Input() applications: Application[];

  constructor() {
  }
}
