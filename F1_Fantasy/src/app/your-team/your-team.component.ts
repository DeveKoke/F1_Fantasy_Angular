import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-your-team',
  templateUrl: './your-team.component.html',
  styleUrls: ['./your-team.component.scss']
})
export class YourTeamComponent {

@Input() pickedDrivers:any[]=[];


}
