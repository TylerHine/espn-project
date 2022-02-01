import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EventsNavbarComponent } from './header/eventsnavbar.component';
import { MainNavbarComponent } from './header/mainnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsNavbarComponent,
    MainNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
