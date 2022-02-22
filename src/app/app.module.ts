import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideCardComponent } from 'src/app/body/sidecard.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { EventsNavbarComponent } from 'src/app/header/eventsnavbar.component';
import { MainNavbarComponent } from 'src/app/header/mainnavbar.component';
import { LeftCardComponent } from 'src/app/body/leftcard.component';
import { AppRoutingModule } from './app-routing.module';
import { NflScoreboardComponent } from './sports-links/nfl-scoreboard.component';
import { NbaScoreboardComponent } from './sports-links/nba-scoreboard.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { NhlScoreboardComponent } from './sports-links/nhl-scoreboard.component';
import { SoccerScoreboardComponent } from './sports-links/soccer-scoreboard.component';
import { CenterCardComponent } from './body/centercard.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsNavbarComponent,
    MainNavbarComponent,
    FooterComponent,
    SideCardComponent,
    LeftCardComponent,
    NflScoreboardComponent,
    NbaScoreboardComponent,
    HomeLayoutComponent,
    NhlScoreboardComponent,
    SoccerScoreboardComponent,
    CenterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
