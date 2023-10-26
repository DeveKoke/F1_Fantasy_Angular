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
      GP_Flag:'assets/Flags/405px-Flag-map_of_Bahrain.svg.png',
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
      GP_Flag:'assets/Flags/Flag-map_of_Saudi_Arabia.svg.png',
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
    },
    
  },{
    GP_id: 4,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Flag-map_of_Azerbaijan.svg.png',
    GP_Name:'Azerbaiyan Grand Prix',
    winner:'PER',
    secondPodium:'VER',
    thirdPodium:'LEC',
    first_grid:'LEC',
    second_grid:'VER',
    fastLap:'LEC',
    Positions:{
      VER:0,
      PER:2,
      LEC:-2,
      SAI:-1,
      HAM:-1,
      RUS:3,
      ALO:2,
      STR:2,
      OCO:4,
      GAS:3,
      NOR:-2,
      PIA:-1,
      ZHO:-5,
      BOT:-6,
      ALB:0,
      SAR:-2,
      TSU:2,
      RIC:0,
      MAG:3,
      HUL:3
    }
  },{
    GP_id: 5,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/USA_Flag_Map.svg.png',
    GP_Name:'Miami Grand Prix',
    winner:'VER',
    secondPodium:'PER',
    thirdPodium:'ALO',
    first_grid:'PER',
    second_grid:'ALO',
    fastLap:'VER',
    Positions:{
      VER:8,
      PER:-1,
      LEC:0,
      SAI:-2,
      HAM:7,
      RUS:2,
      ALO:-1,
      STR:6,
      OCO:-1,
      GAS:-3,
      NOR:-1,
      PIA:0,
      ZHO:-2,
      BOT:-3,
      ALB:-3,
      SAR:-2,
      TSU:6,
      RIC:0,
      MAG:-6,
      HUL:-3
    }
  },{
    GP_id: 6,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Flag_map_of_Monaco.svg.png',
    GP_Name:'Monaco Grand Prix',
    winner:'VER',
    secondPodium:'ALO',
    thirdPodium:'OCO',
    first_grid:'VER',
    second_grid:'ALO',
    fastLap:'HAM',
    Positions:{
      VER:0,
      PER:4,
      LEC:0,
      SAI:-4,
      HAM:1,
      RUS:3,
      ALO:0,
      STR:-5,
      OCO:0,
      GAS:0,
      NOR:1,
      PIA:1,
      ZHO:6,
      BOT:4,
      ALB:-1,
      SAR:-2,
      TSU:6,
      RIC:0,
      MAG:3,
      HUL:-2
    }
  },{
    GP_id: 7,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Spain-flag-map-plus-ultra.png',
    GP_Name:'Spanish Grand Prix',
    winner:'VER',
    secondPodium:'HAM',
    thirdPodium:'RUS',
    first_grid:'VER',
    second_grid:'SAI',
    fastLap:'VER',
    GSlam:'VER',
    Positions:{
      VER:0,
      PER:13,
      LEC:9,
      SAI:-3,
      HAM:2,
      RUS:9,
      ALO:1,
      STR:-1,
      OCO:-2,
      GAS:0,
      NOR:-10,
      PIA:-4,
      ZHO:4,
      BOT:-3,
      ALB:2,
      SAR:0,
      TSU:3,
      RIC:0,
      MAG:-1,
      HUL:-8
    }
  },{
    GP_id: 8,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Canada_flag_map.svg.png',
    GP_Name:'Canadian Grand Prix',
    winner:'VER',
    secondPodium:'ALO',
    thirdPodium:'HAM',
    first_grid:'VER',
    second_grid:'ALO',
    fastLap:'PER',
    Positions:{
      VER:0,
      PER:6,
      LEC:6,
      SAI:6,
      HAM:0,
      RUS:-5,
      ALO:0,
      STR:7,
      OCO:-2,
      GAS:3,
      NOR:-6,
      PIA:-3,
      ZHO:4,
      BOT:4,
      ALB:2,
      SAR:-5,
      TSU:5,
      RIC:0,
      MAG:-4,
      HUL:-10
    }
  },{
    GP_id: 9,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Flag-map_of_Austria.svg.png',
    GP_Name:'Austrian Grand Prix',
    winner:'VER',
    secondPodium:'LEC',
    thirdPodium:'PER',
    first_grid:'VER',
    second_grid:'LEC',
    fastLap:'VER',
    GSlam: 'VER',
    Positions:{
      VER:0,
      PER:12,
      LEC:0,
      SAI:-3,
      HAM:-3,
      RUS:4,
      ALO:2,
      STR:-3,
      OCO:-2,
      GAS:-1,
      NOR:8,
      PIA:-3,
      ZHO:5,
      BOT:-1,
      ALB:-1,
      SAR:5,
      TSU:-3,
      RIC:0,
      MAG:2,
      HUL:-5
    }
  },{
    GP_id: 10,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Uk map flag.png',
    GP_Name:'British Grand Prix',
    winner:'VER',
    secondPodium:'NOR',
    thirdPodium:'HAM',
    first_grid:'VER',
    second_grid:'NOR',
    fastLap:'VER',
    HTrick: 'VER',
    Positions:{
      VER:0,
      PER:2,
      LEC:-5,
      SAI:-5,
      HAM:4,
      RUS:1,
      ALO:2,
      STR:-2,
      OCO:-5,
      GAS:-5,
      NOR:0,
      PIA:-1,
      ZHO:2,
      BOT:8,
      ALB:0,
      SAR:3,
      TSU:0,
      RIC:0,
      MAG:-5,
      HUL:3
    }
  },{
    GP_id: 11,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/hungary map flag.png',
    GP_Name:'Hugarian Grand Prix',
    winner:'VER',
    secondPodium:'NOR',
    thirdPodium:'PER',
    first_grid:'HAM',
    second_grid:'VER',
    fastLap:'VER',
    Positions:{
      VER:1,
      PER:6,
      LEC:1,
      SAI:3,
      HAM:-3,
      RUS:12,
      ALO:-1,
      STR:4,
      OCO:-5,
      GAS:-5,
      NOR:1,
      PIA:-1,
      ZHO:-10,
      BOT:-5,
      ALB:5,
      SAR:2,
      TSU:2,
      RIC:0,
      MAG:2,
      HUL:-4
    }
  },{
    GP_id: 12,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/belgium flag map.png',
    GP_Name:'Belgium Grand Prix',
    winner:'VER',
    secondPodium:'PER',
    thirdPodium:'LEC',
    first_grid:'VER',
    second_grid:'LEC',
    fastLap:'HAM',
    Positions:{
      VER:0,
      PER:1,
      LEC:-1,
      SAI:-5,
      HAM:0,
      RUS:2,
      ALO:4,
      STR:1,
      OCO:7,
      GAS:1,
      NOR:0,
      PIA:-5,
      ZHO:5,
      BOT:-2,
      ALB:2,
      SAR:1,
      TSU:1,
      RIC:3,
      MAG:-2,
      HUL:2
    }
  },{
    GP_id: 13,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Netherlands flag.png',
    GP_Name:'Dutch Grand Prix',
    winner:'VER',
    secondPodium:'ALO',
    thirdPodium:'GAS',
    first_grid:'VER',
    second_grid:'NOR',
    fastLap:'ALO',
    Positions:{
      VER:0,
      PER:3,
      LEC:-5,
      SAI:1,
      HAM:9,
      RUS:-10,
      ALO:4,
      STR:0,
      OCO:7,
      GAS:9,
      NOR:-5,
      PIA:-1,
      ZHO:-5,
      BOT:5,
      ALB:-4,
      SAR:-5,
      TSU:-1,
      RIC:0,
      MAG:2,
      HUL:3
    }
  },{
    GP_id: 14,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Itali Flag.svg',
    GP_Name:'Italian Grand Prix',
    winner:'VER',
    secondPodium:'PER',
    thirdPodium:'SAI',
    first_grid:'SAI',
    second_grid:'VER',
    fastLap:'PIA',
    Positions:{
      VER:1,
      PER:3,
      LEC:-1,
      SAI:-2,
      HAM:2,
      RUS:1,
      ALO:1,
      STR:4,
      OCO:-5,
      GAS:4,
      NOR:1,
      PIA:-5,
      ZHO:2,
      BOT:4,
      ALB:-1,
      SAR:2,
      TSU:-5,
      RIC:0,
      MAG:1,
      HUL:1
    }
  },{
    GP_id: 15,
    GP_CircuitImg:' ',
    GP_Flag:'assets/Flags/Singapore country flag.png',
    GP_Name:'Singapore Grand Prix',
    winner:'SAI',
    secondPodium:'NOR',
    thirdPodium:'HAM',
    first_grid:'SAI',
    second_grid:'RUS',
    fastLap:'SAI',
    HTrick: 'SAI',
    Positions:{
      VER:6,
      PER:5,
      LEC:-1,
      SAI:0,
      HAM:2,
      RUS:-5,
      ALO:-5,
      STR:0,
      OCO:-5,
      GAS:6,
      NOR:2,
      PIA:10,
      ZHO:7,
      BOT:-5,
      ALB:3,
      SAR:4,
      TSU:-5,
      RIC:0,
      MAG:-4,
      HUL:4
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
        driverTotalPoints+=12
      }else if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].secondPodium){
        driverTotalPoints+=8
      }else if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].thirdPodium){
        driverTotalPoints+=6
      } 

      if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].first_grid){
        driverTotalPoints+=7
      }else if(userTeam[index].driver_Id === this.GPDataResults[GPIndex].second_grid){
        driverTotalPoints+=4
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


