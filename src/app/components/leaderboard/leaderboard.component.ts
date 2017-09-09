import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {LeaderboardService} from '../../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [LeaderboardService]
})

export class LeaderboardComponent implements OnInit {
  topReporters: User[];
  topFixers: User[];

  constructor(private leaderboardService: LeaderboardService) {
  }

  getTopReporters(): void {
    this.leaderboardService.getTopReporters().then(topReporters => {
      this.topReporters = topReporters;
    });
  }

  getTopFixers(): void {
    this.leaderboardService.getTopFixers().then(topFixers => {
      this.topFixers = topFixers;
    });
  }

  ngOnInit() {
    this.getTopReporters();
    this.getTopFixers();
  }

}
