import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ConferenceInfoComponent } from './conference-info/conference-info.component';
import { ProgramBlockComponent } from './program-block/program-block.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopNavbarComponent,
    ConferenceInfoComponent,
    ProgramBlockComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountdownModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
