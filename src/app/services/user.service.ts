import {Injectable} from '@angular/core';
import {User} from '../models/user';

@Injectable()
export class UserService {
  constructor() {
  }

  getUser(): Promise<User> {
    const user = new User();
    user.name = 'Firstname Lastname';
    return Promise.resolve(user);
  }
}
