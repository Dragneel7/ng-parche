import {Injectable} from '@angular/core';
import {User} from '../models/user';

@Injectable()
export class LeaderboardService {

  constructor() {
  }

  getTopReporters(): Promise<User[]> {
    const users: User[] = [];
    const user1 = new User();
    const user2 = new User();
    const user3 = new User();
    user1.name = 'Reporter1';
    user1.emailAddressHash = '0eab64adad056cff2492e7c407a9aa21';
    user1.bugsReported = 11;
    user2.name = 'Reporter2';
    user2.emailAddressHash = '7ddf32e17a6ac5ce04a8ecbf782ca509';
    user2.bugsReported = 10;
    user3.name = 'Reporter3';
    user3.emailAddressHash = '32ff2c202fb4b6f93e09db8e2f2176ce';
    user3.bugsReported = 9;
    users.push(user1);
    users.push(user2);
    users.push(user3);
    return Promise.resolve(users);
  }

  getTopFixers(): Promise<User[]> {
    const users: User[] = [];
    const user1 = new User();
    const user2 = new User();
    const user3 = new User();
    user1.name = 'Fixer1';
    user1.emailAddressHash = '0eab64adad056cff2492e7c407a9aa21';
    user1.bugsFixed = 11;
    user2.name = 'Fixer2';
    user2.emailAddressHash = '7ddf32e17a6ac5ce04a8ecbf782ca509';
    user2.bugsFixed = 10;
    user3.name = 'Fixer3';
    user3.emailAddressHash = '32ff2c202fb4b6f93e09db8e2f2176ce';
    user3.bugsFixed = 9;
    users.push(user1);
    users.push(user2);
    users.push(user3);
    return Promise.resolve(users);
  }

}
