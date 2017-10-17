import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Application} from '../models/application';

@Injectable()
export class ApplicationSelectionService {

  applicationSelectedSource = new Subject<Application>();

  applicationSelected$ = this.applicationSelectedSource.asObservable();

  selectApplication(application: Application) {
    this.applicationSelectedSource.next(application);
  }

  constructor() {
  }

}
