import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DriversComponent } from './drivers/drivers.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { YourTeamComponent } from './your-team/your-team.component';

const routes: Routes = [
  {path: '', component:MainComponent, pathMatch:'full'}, 
  {path: 'your_team', component:YourTeamComponent},
  {path: 'drivers', component:DriversComponent},
  {path: 'circuitsF1', component:CircuitsComponent},
  {path: '**', redirectTo:''} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }