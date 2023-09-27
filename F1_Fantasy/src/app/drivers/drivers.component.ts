import { Component } from '@angular/core';
import { DriversServiceService } from 'src/app/services/drivers-service.service';
import { TeamService } from '../services/team.service';
import { TeamInterface } from '../interfaces/team-interface';
import { SelectedDriverInterface } from '../interfaces/selectedDriver-interface';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent {

  constructor(private driversCollection:DriversServiceService, private team:TeamService){ }
  
  // Show drivers' info
  driversInfo:any[] = this.driversCollection.drivers;
  showDriverInfo: boolean[] = new Array(this.driversInfo.length).fill(false);
  toggleDriverInfo(index: number):void {
    this.showDriverInfo[index] = !this.showDriverInfo[index];
    console.log(this.showDriverInfo);
  }

  // Pick drivers
  pickedDrivers:SelectedDriverInterface[]=[];
  completeOptionsMessage:boolean = false;
  alreadyPickedMessage:boolean = false;
  selectDriver(i: number): void {
    const driver_Name: string = this.driversInfo[i].name;
    const driver_Img: string = this.driversInfo[i].img;
    const driver_Id:string = this.driversInfo[i].id;
    const driverPickedInfo: any = {
      driver_Name: driver_Name,
      driver_Img: driver_Img,
      driver_Id: driver_Id,
    };
    
    if (this.pickedDrivers.length === 5) {
      
      this.completeOptionsMessage = true;
      setTimeout(() => {
        this.completeOptionsMessage = false;
      }, 4500);
      
    } 
    if (this.pickedDrivers.some((driver)=>driver.driver_Name === driverPickedInfo.driver_Name)){
      this.alreadyPickedMessage = true 
      setTimeout(() => {
        this.alreadyPickedMessage = false 
      }, 4500);
    } 
    else {
      this.pickedDrivers.push(driverPickedInfo); 
      console.log(this.pickedDrivers);      
      this.team.setPickedDrivers(this.pickedDrivers)
    }
  }
  // DELETE DRIVER
  deleteDriver(driverName:string): void {
    if (this.pickedDrivers.some((driver:any)=>driver.driver_Name === driverName)){
      const indexDriver = this.pickedDrivers.findIndex((driver: any) => driver.driver_Name === driverName);

      this.pickedDrivers.splice(indexDriver, 1);
      this.team.setPickedDrivers(this.pickedDrivers)
      console.log(indexDriver);
    } 
  }

  // SAVE AND SEND SELECTED DRIVERS TO FIREBASE.
  async saveTeam() {
    const userTeam: TeamInterface = {
      driver1: 'hola',
      driver2: 'hola',
      driver3: 'hola',
      driver4: 'hola',
      driver5: 'hola'
    };
  
    for (let index = 0; index < this.pickedDrivers.length; index++) {
      const driverName = this.pickedDrivers[index].driver_Name;
      if (index === 0) {
        userTeam.driver1 = driverName;
      } else if (index === 1) {
        userTeam.driver2 = driverName;
      } else if (index === 2) {
        userTeam.driver3 = driverName;
      } else if (index === 3) {
        userTeam.driver4 = driverName;
      } else if (index === 4) {
        userTeam.driver5 = driverName;
      }
    }
  
    const response = await this.team.addTeam(userTeam);
    console.log(response);
  }
}
