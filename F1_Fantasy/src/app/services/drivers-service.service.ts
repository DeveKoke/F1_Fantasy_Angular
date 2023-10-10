import { Injectable} from '@angular/core';
import { DriversInterface } from '../interfaces/drivers-interface';

@Injectable({
  providedIn: 'root'
})
export class DriversServiceService {
  

  Verstappen:DriversInterface = {
    price: 8,
    name: 'Max Verstappen',
    id: 'VER' ,
    driver_num: 1,
    country: 'assets/Flags/Netherlands round flag.png',
    team: 'Red Bull Racing',
    teamCode:'RBR',
    team_img: 'assets/RBR Logo.png',
    img: 'assets/VER.png',
    f1_champion: true,
    championships:2,
    GP_victories:48,
    podiums:92,
    poles:29
  }
  Perez:DriversInterface = {
    price: 6,
    name: 'Sergio Pérez',
    id: 'PER' ,
    driver_num: 11,
    country: 'assets/Flags/Mexico roun flag.png',
    team: 'Red Bull Racing',
    teamCode:'RBR',
    team_img: 'assets/RBR Logo.png',
    img: 'assets/PER.png',
    f1_champion: false,
    GP_victories:6,
    podiums:34,
    poles:3
  }
  Leclerc:DriversInterface = {
    price: 6,
    name: 'Charles Leclerc',
    id: 'LEC' ,
    driver_num: 16,
    country: 'assets/Flags/Monaco flag-round.png',
    team: 'Ferrari',
    teamCode:'FERR',
    team_img: 'assets/Ferrari.png',
    img: 'assets/LEC.png',
    f1_champion: false,
    GP_victories:5,
    podiums:27,
    poles:20
  }
  Sainz:DriversInterface = {
    price: 6,
    name: 'Carlos Sainz',
    id: 'SAI' ,
    driver_num: 55,
    country: 'assets/Flags/Spain_flag_icon.svg.png',
    team: 'Ferrari',
    teamCode:'FERR',
    team_img: 'assets/Ferrari.png',
    img: 'assets/SAI.png',
    f1_champion: false,
    GP_victories:2,
    podiums:17,
    poles:5
  }
  Hamilton:DriversInterface = {
    price: 8,
    name: 'Lewis Hamilton',
    id: 'HAM' ,
    driver_num: 44,
    country: 'assets/Flags/UK round flag.png',
    team: 'Mercedes',
    teamCode:'MRCDS',
    team_img: 'assets/Mercedes.png',
    img: 'assets/HAM.png',
    f1_champion: true,
    championships:7,
    GP_victories:103,
    podiums:196,
    poles:103
  }
  Russell:DriversInterface = {
    price: 6,
    name: 'George Russell',
    id: 'RUS' ,
    driver_num: 63,
    country: 'assets/Flags/UK round flag.png',
    team: 'Mercedes',
    teamCode:'MRCDS',
    team_img: 'assets/Mercedes.png',
    img: 'assets/RUS.png',
    f1_champion: false,
    GP_victories:1,
    podiums:1,
    poles:1
  }
  Alonso:DriversInterface = {
    price: 8,
    name: 'Fernando Alonso',
    id: 'ALO' ,
    driver_num: 14,
    country: 'assets/Flags/Spain_flag_icon.svg.png',
    team: 'Aston Martin',
    teamCode:'ASMN',
    team_img: 'assets/Aston Martin.png',
    img: 'assets/ALO.png',
    f1_champion: true,
    championships:2,
    GP_victories:32,
    podiums:105,
    poles:22
  }
  Stroll:DriversInterface = {
    price: 2,
    name: 'Lance Stroll',
    id: 'STR' ,
    driver_num: 18,
    country: 'assets/Flags/canada flag-3d-round.png',
    team: 'Aston Martin',
    teamCode:'ASMN',
    team_img: 'assets/Aston Martin.png',
    img: 'assets/STR.png',
    f1_champion: false,
    podiums:3,
    poles:1
  }
  Ocon:DriversInterface = {
    price:4,
    name: 'Esteban Ocon',
    id: 'OCO' ,
    driver_num: 31,
    country: 'assets/Flags/Round france flag.png',
    team: 'Alpine',
    teamCode:'ALPN',
    team_img: 'assets/Alpine.png',
    img: 'assets/OCO.png',
    f1_champion: false,
    GP_victories:1,
    podiums:3
  }
  Gasly:DriversInterface = {
    price: 2,
    name: 'Pierre Gasly',
    id: 'GAS' ,
    driver_num: 10,
    country: 'assets/Flags/Round france flag.png',
    team: 'Alpine',
    teamCode:'ALPN',
    team_img: 'assets/Alpine.png',
    img: 'assets/GAS.png',
    f1_champion: false,
    GP_victories:1,
    podiums:4
  }
  Norris:DriversInterface = {
    price: 5,
    name: 'Lando Norris',
    id: 'NOR' ,
    driver_num: 4,
    country: 'assets/Flags/UK round flag.png',
    team: 'McLaren',
    teamCode:'McL',
    team_img: 'assets/mclaren-logo.png',
    img: 'assets/NOR.png',
    f1_champion: false,
    podiums:10,
    poles:1
  }
  Piastri:DriversInterface = {
    price: 2,
    name: 'Oscar Piastri',
    id: 'PIA' ,
    driver_num: 81,
    country: 'assets/Flags/Australia round Flag.png',
    team: 'McLaren',
    teamCode:'McL',
    team_img: 'assets/mclaren-logo.png',
    img: 'assets/PIA.png',
    f1_champion: false,
    podiums:1,
  }
  Zhou:DriversInterface = {
    price: 2,
    name: 'Guanyu Zhou',
    id: 'ZHO' ,
    driver_num: 24,
    country: 'assets/Flags/china round flag.png',
    team: 'Alpha Romeo',
    teamCode:'ARomeo',
    team_img: 'assets/Alfa Romeo.png',
    img: 'assets/ZHO.png',
    f1_champion: false
  }
  Bottas:DriversInterface = {
    price: 3,
    name: 'Valtery Bottas',
    id: 'BOT' ,
    driver_num: 77,
    country: 'assets/Flags/finland-flag round.png',
    team: 'Alpha Romeo',
    teamCode:'ARomeo',
    team_img: 'assets/Alfa Romeo.png',
    img: 'assets/BOT.png',
    f1_champion: false,
    GP_victories:10,
    podiums:67,
    poles:20
  }
  Albon:DriversInterface = {
    price: 4,
    name: 'Alexander Albon',
    id: 'ALB' ,
    driver_num: 23,
    country: 'assets/Flags/Thailand  round Flag.png',
    team: 'Williams',
    teamCode:'Will',
    team_img: 'assets/Logo_Williams_F1.png',
    img: 'assets/ALB.png',
    f1_champion: false,
    podiums: 2
  }
  Sargeant:DriversInterface = {
    price: 2,
    name: 'Logan Sargeant',
    id: 'SAR' ,
    driver_num: 2,
    country: 'assets/Flags/USa round flag.png',
    team: 'Williams',
    teamCode:'Will',
    team_img: 'assets/Logo_Williams_F1.png',
    img: 'assets/SAR.png',
    f1_champion: false
  }
  Tsunoda:DriversInterface = {
    price: 2,
    name: 'Yuki Tsunoda',
    id: 'TSU' ,
    driver_num: 22,
    country: 'assets/Flags/Japanese_flag_rounded.svg.png',
    team: 'Alpha Tauri',
    teamCode:'ATauri',
    team_img: 'assets/AlphaTauri.svg.png',
    img: 'assets/TSU.png',
    f1_champion: false
  }
  Ricciardo:DriversInterface = {
    price: 4,
    name: 'Daniel Ricciardo',
    id: 'RIC' ,
    driver_num: 3,
    country: 'assets/Flags/Australia round Flag.png',
    team: 'Alpha Tauri',
    teamCode:'ATauri',
    team_img: 'assets/AlphaTauri.svg.png',
    img: 'assets/RIC.png',
    f1_champion: false,
    GP_victories:8,
    podiums:32,
    poles:3
  }
  Magnusen:DriversInterface = {
    price: 3,
    name: 'Kevin Magnusen',
    id: 'MAG' ,
    driver_num: 20,
    country: 'assets/Flags/denmark flag round.png',
    team: 'Hass',
    teamCode:'Hass',
    team_img: 'assets/Logo_Haas_F1.png',
    img: 'assets/MAG.png',
    f1_champion: false,
    podiums:1,
    poles:3
  }
  Hulkenberg:DriversInterface = {
    price: 2,
    name: 'Nico Hülkenberg',
    id: 'HUL' ,
    driver_num: 27,
    country: 'assets/Flags/Germany round flag.png',
    team: 'Hass',
    teamCode:'Hass',
    team_img: 'assets/Logo_Haas_F1.png',
    img: 'assets/HUL.png',
    f1_champion: false,
    poles:1
  }

  drivers:DriversInterface[]=[this.Verstappen, this.Perez, this.Hamilton, this.Russell, this.Leclerc, this.Sainz, this.Alonso, this.Stroll, this.Ocon, this.Gasly, this.Norris, this.Piastri, this.Bottas, this.Zhou, this.Tsunoda, this.Ricciardo, this.Albon, this.Sargeant, this.Hulkenberg, this.Magnusen]
  

  constructor() { }
}
