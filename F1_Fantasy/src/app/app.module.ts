import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROUTING
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DriversComponent } from './drivers/drivers.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { YourTeamComponent } from './your-team/your-team.component';
import { ResultsComponent } from './results/results.component';
import { MainComponent } from './main/main.component';

// SERVICES
import { DriversServiceService } from './services/drivers-service.service';
import { ResultsService } from './services/results.service';
import { TeamService } from './services/team.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DriversComponent,
    CircuitsComponent,
    YourTeamComponent,
    ResultsComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DriversServiceService, ResultsService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
