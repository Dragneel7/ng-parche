import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Aspect, Severity} from '../../models/bug';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  title = new FormControl();
  description = new FormControl();
  stepsToReproduce = new FormControl();
  additionalInformation = new FormControl();

  aspectOptions: string[] = [];
  severityOptions: string[] = [];

  onSubmit(): void {

  }

  ngOnInit() {
    this.aspectOptions = Object.keys(Aspect)
      .map(k => Aspect[k])
      .filter(v => typeof v === 'string')
      .map(v => v.charAt(0) + v.substr(1).toLowerCase());

    this.severityOptions = Object.keys(Severity)
      .map(k => Severity[k])
      .filter(v => typeof v === 'string')
      .map(v => v.charAt(0) + v.substr(1).toLowerCase());
  }
}
