import { Component } from '@angular/core';
import { TeamService } from '../services/team.service';
import { SelectedDriverInterface } from '../interfaces/selectedDriver-interface';

@Component({
  selector: 'app-your-team',
  templateUrl: './your-team.component.html',
  styleUrls: ['./your-team.component.scss']
})
export class YourTeamComponent {

  constructor(private team:TeamService){}

  userTeam:SelectedDriverInterface[] = this.team.getPickedDrivers()

}
