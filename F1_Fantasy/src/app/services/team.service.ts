import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
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















  // Añadimos firestore
  // constructor(private firestore: Firestore) { }
  
  // addTeam(team:TeamInterface){ 
  //   //Creamos colección llamada team e indicamos qué vamos a introducir en ella, en este caso, el array pickedDrivers.
  //   const teamRef =  collection(this.firestore, 'Teams')
  //   return addDoc(teamRef, team)
  // }
}
