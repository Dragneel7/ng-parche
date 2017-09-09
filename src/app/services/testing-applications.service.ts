import {Injectable} from '@angular/core';
import {Application} from '../models/application';

@Injectable()
export class TestingApplicationsService {

  constructor() {
  }

  getTestingApplications(): Promise<Application[]> {
    const applications: Application[] = [];
    const application1 = new Application();
    const application2 = new Application();
    const application3 = new Application();
    application1.name = 'Application1';
    application1.description = 'This is an application. Such app, much wow!';
    application1.developers = 'developer11, developer12';
    application1.designers = 'designer11, designer12';
    application2.name = 'Application2';
    application2.description = 'This is an application. Such app, much wow!';
    application2.developers = 'developer21, developer22';
    application2.designers = 'designer21, designer22';
    application3.name = 'Application3';
    application3.description = 'This is an application. Such app, much wow!';
    application3.developers = 'developer31, developer32';
    application3.designers = 'designer31, designer32';
    applications.push(application1);
    applications.push(application2);
    applications.push(application3  );
    return Promise.resolve(applications);
  }

}
