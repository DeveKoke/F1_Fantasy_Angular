import { Injectable } from '@angular/core';
import { SelectedDriverInterface } from '../interfaces/selectedDriver-interface';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  pickedDrivers:SelectedDriverInterface[]=[];

  getPickedDrivers(): any[] {
    return this.pickedDrivers;
  }

  setPickedDrivers(newArray: SelectedDriverInterface[]): void {
    this.pickedDrivers = newArray;
  }

}
