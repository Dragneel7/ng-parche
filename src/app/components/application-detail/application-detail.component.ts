import {Component, Input, OnInit} from '@angular/core';
import {Application} from '../../models/application';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})

export class ApplicationDetailComponent implements OnInit {
  @Input() application: Application;

  constructor() {
  }

  ngOnInit() {
  }

}
