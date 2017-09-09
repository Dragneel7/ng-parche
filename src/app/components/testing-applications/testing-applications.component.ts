import {Component, OnInit} from '@angular/core';
import {TestingApplicationsService} from '../../services/testing-applications.service';
import {Application} from '../../models/application';

@Component({
  selector: 'app-testing-applications',
  templateUrl: './testing-applications.component.html',
  styleUrls: ['./testing-applications.component.css'],
  providers: [TestingApplicationsService]
})

export class TestingApplicationsComponent implements OnInit {
  testingApplications: Application[];

  constructor(private testingApplicationsService: TestingApplicationsService) {
  }

  getTestingApplications(): void {
    this.testingApplicationsService.getTestingApplications().then(testingApplications => {
      this.testingApplications = testingApplications;
    });
  }

  ngOnInit() {
    this.getTestingApplications();
  }
}
