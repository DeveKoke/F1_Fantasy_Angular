import { Injectable } from '@angular/core';
import { TeamService } from './team.service';
import { SelectedDriverInterface } from '../interfaces/selectedDriver-interface';
import { GPDataResult } from '../interfaces/results-interface';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private team:TeamService) { }

  userTeam:SelectedDriverInterface[]= this.team.getPickedDrivers();

  AustraliaGP:GPDataResult = {
    GP_CircuitImg:' ',
    GP_Flag:' ',
    GP_Name:' ',
    winner:'VER',
    secondPodium: 'HAM',
    thirdPodium:'ALO',
    first_grid:'VER',
    second_grid:'RUS',
    fastLap:'VER',
    HTrick:'VER',
    Positions:{
        VER:0,
        PER:6,
        LEC:-4,
        SAI:-2,
        HAM:3,
        RUS:-3,
        ALO:5,
        STR:1,
        OCO:-3,
        GAS:-3,
        NOR:4,
        PIA:3,
        ZHO:-3,
        BOT:2,
        ALB:-3,
        SAR:-3,
        TSU:3,
        RIC:0,
        MAG:4,
        HUL:1
    }
  }

  assignPoints():void{
    
    for (let index = 0; index < this.userTeam.length; index++) {
      let driverPoints:number = this.userTeam[index].driver_Points;
      
      if(this.userTeam[index].driver_Id === this.AustraliaGP.winner ){
        driverPoints+=5
      }
      
    }

  }

}


