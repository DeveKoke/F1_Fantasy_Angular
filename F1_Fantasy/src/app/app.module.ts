import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DriversComponent } from './drivers/drivers.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { YourTeamComponent } from './your-team/your-team.component';
import { ResultsComponent } from './results/results.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DriversComponent,
    CircuitsComponent,
    YourTeamComponent,
    ResultsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
