import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  providers: [UserService]
})

export class UserCardComponent implements OnInit, AfterViewInit {
  user: User;

  constructor(private userService: UserService) {
  }

  getUser(): void {
    this.userService.getUser().then(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  ngAfterViewInit(): void {
  }
}
