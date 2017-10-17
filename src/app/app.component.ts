import {Component} from '@angular/core';
import {Application} from './models/application';
import {ApplicationSelectionService} from './services/application-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApplicationSelectionService]
})

export class AppComponent {
  titleLink = 'https://github.com/dhruvkb/parche/';
  credits = 'Composed by Dhruv Bhanushali';
  creditsLink = 'https://dhruvkb.github.io/';

  application1: Application;

  selectedApplication: Application;

  constructor(private applicationSelectionService: ApplicationSelectionService) {
    this.application1 = new Application();
    this.application1.name = 'Application1';
    this.application1.description = 'This is an application. Such app, much wow!';
    this.application1.developers = 'developer11, developer12';
    this.application1.designers = 'designer11, designer12';
    this.application1.mentors = 'mentor11, mentor12';

    applicationSelectionService.applicationSelected$.subscribe(
      application => {
        this.selectedApplication = application;
      }
    );
  }
}
