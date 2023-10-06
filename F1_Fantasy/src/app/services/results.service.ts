import { Injectable } from '@angular/core';
import { TeamService } from './team.service';
import { SelectedDriverInterface } from '../interfaces/selectedDriver-interface';
import { GPDataResults } from '../interfaces/results-interface';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private team:TeamService) { }
  userGPPoints:number = 0
  
  GPDataResults:GPDataResults[] = [
    {
      GP_id: 1,
      GP_CircuitImg:' ',
      GP_Flag:'assets/Flags/Flag-map_of_Australia.svg.png',
      GP_Name:'Bahrein GP',
      winner:'VER',
      secondPodium:'PER',
      thirdPodium:'ALO',
      first_grid:'VER',
      second_grid:'PER',
      fastLap:'VER',
      HTrick: 'VER',
      Positions:{
        VER:0,
        PER:0,
        LEC:-5,
        SAI:0,
        HAM:2,
        RUS:-1,
        ALO:2,
        STR:2,
        OCO:-5,
        GAS:11,
        NOR:-6,
        PIA:-5,
        ZHO:-3,
        BOT:4,
        ALB:5,
        SAR:4,
        TSU:3,
        RIC:0,
        MAG:4,
        HUL:-5
      }
    },{
      GP_id: 2,
      GP_CircuitImg:' ',
      GP_Flag:'assets/Flags/Flag-map_of_Australia.svg.png',
      GP_Name:'Saudi Arabia GP',
      winner:'PER',
      secondPodium:'VER',
      thirdPodium:'ALO',
      first_grid:'PER',
      second_grid:'ALO',
      fastLap:'VER',
      Positions:{
        VER:14,
        PER:0,
        LEC:5,
        SAI:-2,
        HAM:2,
        RUS:-2,
        ALO:-1,
        STR:-5,
        OCO:-2,
        GAS:0,
        NOR:2,
        PIA:-7,
        ZHO:2,
        BOT:-4,
        ALB:-5,
        SAR:4,
        TSU:5,
        RIC:0,
        MAG:3,
        HUL:2
      }
    },{
    GP_id: 3,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Flag-map_of_Australia.svg.png',
    GP_Name:'Australian Grand Prix',
    winner:'VER',
    secondPodium:'HAM',
    thirdPodium:'ALO',
    first_grid:'VER',
    second_grid:'RUS',
    fastLap:'VER',
    HTrick:'VER',
    Positions:{
      VER:0,
      PER:12,
      LEC:-5,
      SAI:-2,
      HAM:1,
      RUS:-3,
      ALO:1,
      STR:2,
      OCO:-5,
      GAS:-5,
      NOR:5,
      PIA:4,
      ZHO:-3,
      BOT:6,
      ALB:-5,
      SAR:-5,
      TSU:3,
      RIC:0,
      MAG:4,
      HUL:-5
    }
  },
]
  




  assignGPPoints(index:number):void{
    let GPIndex:number = index
    let userTeam:SelectedDriverInterface[]= this.team.pickedDrivers;
    let userGPPoints:number = 0

    for (let index = 0; index < userTeam.length; index++) {      
      let driverTotalPoints:number = 0
      
      if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].winner ){
        driverTotalPoints+=10
      }else if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].secondPodium){
        driverTotalPoints+=6
      }else if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].thirdPodium){
        driverTotalPoints+=4
      } 

      if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].first_grid){
        driverTotalPoints+=5
      }else if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].second_grid){
        driverTotalPoints+=2
      }

      if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].fastLap){
        driverTotalPoints+=3
      } 

      if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].GSlam){
        driverTotalPoints+=5
      }

      if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].HTrick){
        driverTotalPoints+=3
      }

      if (this.GPDataResults[GPIndex].Positions.hasOwnProperty(userTeam[index].driver_Id)) {
        // console.log(userTeam[index]);
        let driver_Id:string = userTeam[index].driver_Id
        // console.log(driver_Id);

          let driverPositionPoints = this.GPDataResults[GPIndex].Positions[driver_Id];
          driverTotalPoints += driverPositionPoints;        
      }      
      userTeam[index].driver_Points = driverTotalPoints;
      userGPPoints+=driverTotalPoints;
    }
    this.userGPPoints = userGPPoints;
    console.log(this.userGPPoints);
    

  }
  
}


