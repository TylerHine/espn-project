import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideCardComponent } from 'src/app/body/sidecard.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { EventsNavbarComponent } from 'src/app/header/eventsnavbar.component';
import { MainNavbarComponent } from 'src/app/header/mainnavbar.component';
import { LeftCardComponent } from 'src/app/body/leftcard.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsNavbarComponent,
    MainNavbarComponent,
    FooterComponent,
    SideCardComponent,
    LeftCardComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
