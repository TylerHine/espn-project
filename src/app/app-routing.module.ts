import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { NflScoreboardComponent } from './sports-links/nfl-scoreboard.component';
import { NbaScoreboardComponent } from './sports-links/nba-scoreboard.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { NhlScoreboardComponent } from './sports-links/nhl-scoreboard.component';
import { SoccerScoreboardComponent } from './sports-links/soccer-scoreboard.component';

const routes:Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },

  {path: 'nfl-scoreboard', component: NflScoreboardComponent},
  {path: 'nba-scoreboard', component: NbaScoreboardComponent},
  {path: 'nhl-scoreboard', component: NhlScoreboardComponent},
  {path: 'soccer-scoreboard', component: SoccerScoreboardComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
    
})
export class AppRoutingModule { }
