import { Injectable } from '@angular/core';
import { DriversInterface } from './drivers-interface';

@Injectable({
  providedIn: 'root'
})
export class DriversServiceService {
  

  Verstappen:DriversInterface = {
    name: 'Max Verstappen',
    driver_num: 1,
    country: '',
    team: 'Red Bull Racing',
    team_img: '',
    img: '',
    f1_champion: true,
    championships:2,
    GP_victories:48,
    podiums:92,
    poles:29
  }
  Perez:DriversInterface = {
    name: 'Sergio Pérez',
    driver_num: 11,
    country: '',
    team: 'Red Bull Racing',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:6,
    podiums:34,
    poles:3
  }
  Leclerc:DriversInterface = {
    name: 'Charles Leclerc',
    driver_num: 16,
    country: '',
    team: 'Ferrari',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:5,
    podiums:27,
    poles:20
  }
  Sainz:DriversInterface = {
    name: 'Carlos Sainz',
    driver_num: 55,
    country: '',
    team: 'Ferrari',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:2,
    podiums:17,
    poles:5
  }
  Hamilton:DriversInterface = {
    name: 'Lewis Hamilton',
    driver_num: 44,
    country: '',
    team: 'Mercedes',
    team_img: '',
    img: '',
    f1_champion: true,
    championships:7,
    GP_victories:32,
    podiums:196,
    poles:103
  }
  Russell:DriversInterface = {
    name: 'George Russell',
    driver_num: 63,
    country: '',
    team: 'Mercedes',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:1,
    podiums:1,
    poles:103
  }
  Alonso:DriversInterface = {
    name: 'Fernando Alonso',
    driver_num: 14,
    country: '',
    team: 'Aston Martin',
    team_img: '',
    img: 'assets/fernando-alonso.jpg',
    f1_champion: true,
    championships:2,
    GP_victories:32,
    podiums:105,
    poles:22
  }
  Stroll:DriversInterface = {
    name: 'Lance Stroll',
    driver_num: 63,
    country: '',
    team: 'Aston Martin',
    team_img: '',
    img: '',
    f1_champion: false,
    podiums:3,
    poles:1
  }
  Ocon:DriversInterface = {
    name: 'Esteban Ocon',
    driver_num: 31,
    country: '',
    team: 'Alpine',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:1,
    podiums:3
  }
  Gasly:DriversInterface = {
    name: 'Pierre Gasly',
    driver_num: 10,
    country: '',
    team: 'Alpine',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:1,
    podiums:4
  }
  Norris:DriversInterface = {
    name: 'Lando Norris',
    driver_num: 4,
    country: '',
    team: 'McLaren',
    team_img: '',
    img: '',
    f1_champion: false,
    podiums:10,
    poles:1
  }
  Piastri:DriversInterface = {
    name: 'Oscar Piastri',
    driver_num: 81,
    country: '',
    team: 'McLaren',
    team_img: '',
    img: '',
    f1_champion: false,
    podiums:1,
  }
  Zhou:DriversInterface = {
    name: 'Guanyu Zhou',
    driver_num: 24,
    country: '',
    team: 'Alpha Romeo',
    team_img: '',
    img: '',
    f1_champion: false
  }
  Bottas:DriversInterface = {
    name: 'Valtery Bottas',
    driver_num: 77,
    country: '',
    team: 'Alpha Romeo',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:10,
    podiums:67,
    poles:20
  }
  Albon:DriversInterface = {
    name: 'Alexander Albon',
    driver_num: 23,
    country: '',
    team: 'Alpha Romeo',
    team_img: '',
    img: '',
    f1_champion: false,
    podiums: 2
  }
  Sargeant:DriversInterface = {
    name: 'Logan Sargeant',
    driver_num: 2,
    country: '',
    team: 'Alpha Romeo',
    team_img: '',
    img: '',
    f1_champion: false
  }
  Tsunoda:DriversInterface = {
    name: 'Yuki Tsunoda',
    driver_num: 22,
    country: '',
    team: 'Alpha Tauri',
    team_img: '',
    img: '',
    f1_champion: false
  }
  Ricciardo:DriversInterface = {
    name: 'Daniel Ricciardo',
    driver_num: 3,
    country: '',
    team: 'Alpha Tauri',
    team_img: '',
    img: '',
    f1_champion: false,
    GP_victories:8,
    podiums:32,
    poles:3
  }
  Magnusen:DriversInterface = {
    name: 'Kevin Magnusen',
    driver_num: 20,
    country: '',
    team: 'Hass',
    team_img: '',
    img: '',
    f1_champion: false,
    podiums:1,
    poles:3
  }
  Hulkenberg:DriversInterface = {
    name: 'Nico Hülkenberg',
    driver_num: 27,
    country: '',
    team: 'Hass',
    team_img: '',
    img: '',
    f1_champion: false,
    poles:1
  }

  drivers:DriversInterface[]=[this.Verstappen, this.Perez, this.Hamilton, this.Russell, this.Leclerc, this.Sainz, this.Alonso, this.Stroll, this.Ocon, this.Gasly, this.Norris, this.Piastri, this.Bottas, this.Zhou, this.Tsunoda, this.Ricciardo, this.Albon, this.Sargeant, this.Hulkenberg, this.Magnusen]
  

  constructor() { }
}
