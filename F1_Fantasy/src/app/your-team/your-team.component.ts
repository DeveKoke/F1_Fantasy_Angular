import { Component } from '@angular/core';
import { TeamService } from '../services/team.service';
import { SelectedDriverInterface } from '../interfaces/selectedDriver-interface';
import { ResultsService } from '../services/results.service';
import { GPDataResults } from '../interfaces/results-interface';


@Component({
  selector: 'app-your-team',
  templateUrl: './your-team.component.html',
  styleUrls: ['./your-team.component.scss']
})
export class YourTeamComponent{

  constructor(private team:TeamService, private results:ResultsService){}

  
  GPDataResults:GPDataResults[] = this.results.GPDataResults;
  userTeam:SelectedDriverInterface[] = this.team.getPickedDrivers();
  userTotalGPPoints:number = this.results.userGPPoints;

  showGPResults: boolean[] = Array(this.results.GPDataResults.length).fill(false);

  toggleResults(index: number) {
    this.checkGPResults(index); // Llama a tu función existente
    this.showGPResults = Array(this.results.GPDataResults.length).fill(false);
    this.showGPResults[index] = !this.showGPResults[index];
}

  checkGPResults(index:number){
    this.results.assignGPPoints(index);
    this.userTotalGPPoints = this.results.userGPPoints;
  }
  

}
