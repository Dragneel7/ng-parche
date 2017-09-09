import {Component, Input} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  @Input() users: User[];

  @Input() preContent: string;
  @Input() postContent: string;
  @Input() property: string;

  constructor() {
  }
}