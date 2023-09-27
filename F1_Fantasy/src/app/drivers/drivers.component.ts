import { Component } from '@angular/core';
import { DriversServiceService } from 'src/app/drivers-service.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent {
// Show drivers' info
  constructor(private driversCollection:DriversServiceService){
    console.log(this.driversInfo);
  }
  driversInfo:any[] = this.driversCollection.drivers;
  showDriverInfo: boolean[] = new Array(this.driversInfo.length).fill(false);
  toggleDriverInfo(index: number):void {
    this.showDriverInfo[index] = !this.showDriverInfo[index];
    console.log(this.showDriverInfo);
    
  }

  // Pick drivers
  pickedDrivers:any[]=[];
  completeOptionsMessage:boolean = false;
  alreadyPickedMessage:boolean = false;
  selectDriver(i: number): void {
    const driver_Name: string = this.driversInfo[i].name;
    const driver_Img: string = this.driversInfo[i].img;
    const driverPickedInfo: any = {
      driver_Name: driver_Name,
      driver_Img: driver_Img
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
    }
  }
  // DELETE DRIVER
  deleteDriver(driverName:string): void {
    if (this.pickedDrivers.some((driver:any)=>driver.driver_Name === driverName)){
      const indexDriver = this.pickedDrivers.findIndex((driver: any) => driver.driver_Name === driverName);

      this.pickedDrivers.splice(indexDriver, 1);

      console.log(indexDriver);
    } 
  }
}
