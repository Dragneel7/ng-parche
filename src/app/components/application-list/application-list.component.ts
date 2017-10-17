import {Component, Input} from '@angular/core';
import {Application} from '../../models/application';
import {ApplicationSelectionService} from '../../services/application-selection.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})

export class ApplicationListComponent {
  @Input() applications: Application[];

  applicationSelected(application: Application): void {
    this.applicationSelectionService.selectApplication(application);
  }

  constructor(private applicationSelectionService: ApplicationSelectionService) {
  }
}
