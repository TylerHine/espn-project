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
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BannerComponent } from './body/banner.component';
import { AddProductComponent } from './home/add-product/add-product.component';
import { FormsModule } from '@angular/forms';

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
    CenterCardComponent,
    UserInfoComponent,
    BannerComponent,
    AddProductComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
