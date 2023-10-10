import { Component } from '@angular/core';
import { DriversServiceService } from 'src/app/services/drivers-service.service';
import { TeamService } from '../services/team.service';
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
  }
  driverCardClass:string = ''

  //Drivers price
  budget:number = 25;
  setbudget(value: number) {
    this.budget = value;
  }
  showBudgetMessage:boolean = false;

  // Pick drivers
  newDrivers:SelectedDriverInterface[]=[];
  pickedDrivers:SelectedDriverInterface[]=[{
    driver_Name:'No driver selected',
    driver_Img:'assets/desconocido.png',
    driver_Id:'',
    driver_Points:0,
    driver_Price:0,
    driver_Team:''
    },{
      driver_Name:'No driver selected',
      driver_Img:'assets/desconocido.png',
      driver_Id:'',
      driver_Points:0,
      driver_Price:0,
      driver_Team:''
      },{
        driver_Name:'No driver selected',
        driver_Img:'assets/desconocido.png',
        driver_Id:'',
        driver_Points:0,
        driver_Price:0,
        driver_Team:''
        },{
          driver_Name:'No driver selected',
          driver_Img:'assets/desconocido.png',
          driver_Id:'',
          driver_Points:0,
          driver_Price:0,
          driver_Team:''
          },{
            driver_Name:'No driver selected',
            driver_Img:'assets/desconocido.png',
            driver_Id:'',
            driver_Points:0,
            driver_Price:0,
            driver_Team:''
            }];

  completeOptionsMessage:boolean = false;
  alreadyPickedMessage:boolean = false;
  selectDriver(i: number): void {    
    const driver_Name: string = this.driversInfo[i].name;
    const driver_Img: string = this.driversInfo[i].img;
    const driver_Id:string = this.driversInfo[i].id;
    const driver_Price:number = this.driversInfo[i].price;
    const driver_Team: string = this.driversInfo[i].teamCode;
    const driverPickedInfo: SelectedDriverInterface = {
      driver_Name: driver_Name,
      driver_Img: driver_Img, 
      driver_Id: driver_Id,
      driver_Points:0,
      driver_Price: driver_Price,
      driver_Team: driver_Team
    };
    // console.log(driverPickedInfo);
    

    let chosenDriversPrice:number = 0;
    let budgetLeft:number;



    // If user has selected 5 drivers
    if (this.pickedDrivers[4].driver_Name !== 'No driver selected') {
      
      this.completeOptionsMessage = true;
      setTimeout(() => {
        this.completeOptionsMessage = false;
      }, 4500);
      
    } 
    else  //If the driver selected is already chosen
    if (this.pickedDrivers.some((driver)=>driver.driver_Name === driverPickedInfo.driver_Name)){
      this.alreadyPickedMessage = true;
      setTimeout(() => {
        this.alreadyPickedMessage = false 
      }, 4500);
    } 
    else  // If driver's prices is enough for budget left.
    if (this.budget >= driverPickedInfo.driver_Price){
      this.newDrivers.push(driverPickedInfo);
      this.driverCardClass = driverPickedInfo.driver_Team;
      
      
      for (let index = 0; index < this.newDrivers.length; index++) {
        this.pickedDrivers[index] = this.newDrivers[index];
        chosenDriversPrice += this.pickedDrivers[index].driver_Price;
        budgetLeft = 25 - chosenDriversPrice;
      }
      
      this.team.setPickedDrivers(this.pickedDrivers);
      this.budget = budgetLeft;
    }
    else{
        this.showBudgetMessage = true;
      }
  } ;




  

  // DELETE DRIVER
  deleteDriver(driverName:string): void {  
    
    if (this.newDrivers.some((driver:SelectedDriverInterface)=>driver.driver_Name === driverName)){
      const indexDriver = this.newDrivers.findIndex((driver: any) => driver.driver_Name === driverName);

      const replaceDriver = {
        driver_Name:'No driver selected',
        driver_Img:'assets/desconocido.png',
        driver_Id:'',
        driver_Points:0,
        driver_Price: 0,
        driver_Team:''
        }

      this.newDrivers.splice(indexDriver, 1);
      
      let chosenDriversPrice:number = 0;
      let budgetLeft:number;
      for (let index = 0; index < this.newDrivers.length; index++) {
        this.pickedDrivers[index] = this.newDrivers[index];
        this.pickedDrivers[index + 1] = replaceDriver;

        chosenDriversPrice += this.pickedDrivers[index].driver_Price;
        budgetLeft = 25 - chosenDriversPrice;
      }
      if (this.newDrivers.length == 0) {
        this.pickedDrivers[0] = replaceDriver;
      }
      this.team.setPickedDrivers(this.pickedDrivers);
      this.budget = budgetLeft;
      if (this.newDrivers.length == 0) {
        this.setbudget(25)
      }
      console.log(this.budget);
    } 
  }

  // SAVE AND SEND SELECTED DRIVERS TO FIREBASE.
  // async saveTeam() {
  //   const userTeam: TeamInterface = {
  //     driver1: 'hola',
  //     driver2: 'hola',
  //     driver3: 'hola',
  //     driver4: 'hola',
  //     driver5: 'hola'
  //   };
  
  //   for (let index = 0; index < this.pickedDrivers.length; index++) {
  //     const driverName = this.pickedDrivers[index].driver_Name;
  //     if (index === 0) {
  //       userTeam.driver1 = driverName;
  //     } else if (index === 1) {
  //       userTeam.driver2 = driverName;
  //     } else if (index === 2) {
  //       userTeam.driver3 = driverName;
  //     } else if (index === 3) {
  //       userTeam.driver4 = driverName;
  //     } else if (index === 4) {
  //       userTeam.driver5 = driverName;
  //     }
  //   }
  
  //   const response = await this.team.addTeam(userTeam);
  //   console.log(response);
  // }
}
