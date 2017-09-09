import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {UserCardComponent} from './components/user-card/user-card.component';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TestingApplicationsComponent } from './components/testing-applications/testing-applications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserCardComponent,
    LeaderboardComponent,
    ApplicationListComponent,
    UserListComponent,
    TestingApplicationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
