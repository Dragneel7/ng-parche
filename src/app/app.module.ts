import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {UserCardComponent} from './components/user-card/user-card.component';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import {ApplicationListComponent} from './components/application-list/application-list.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {TestingApplicationsComponent} from './components/testing-applications/testing-applications.component';
import {HomeComponent} from './pages/home/home.component';
import {ReportComponent} from './pages/report/report.component';
import {ReportFormComponent} from './components/report-form/report-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChoiceButtonsComponent} from './components/choice-buttons/choice-buttons.component';
import {ApplicationComponent} from './pages/application/application.component';
import {ApplicationDetailComponent} from './components/application-detail/application-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserCardComponent,
    LeaderboardComponent,
    ApplicationListComponent,
    UserListComponent,
    TestingApplicationsComponent,
    HomeComponent,
    ReportComponent,
    ReportFormComponent,
    ChoiceButtonsComponent,
    ApplicationComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
