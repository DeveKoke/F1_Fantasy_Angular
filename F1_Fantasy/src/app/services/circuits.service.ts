import { Injectable} from '@angular/core';
import { CircuitInterface } from '../interfaces/circuits-interface';

@Injectable({
    providedIn: 'root'
})
export class CircuitService{
    
    circuitsData:CircuitInterface[] = [
    {
        circuit:'Sakhir Circuit', 
        locationName: 'Bahrain',
        flag: 'assets/Flags/Bahrain country flag2.png',
        shape:'assets/Circuits/BAH (Stroke).svg',
        imgSectors: 'assets/Circuits/Bahrain.avif',
        raceDate: '3 - 5 March',
        long: 5.412,
        laps: 57,
        location: {
            lat:26.032141604051507, lng:50.510805636867545}},
    {
        circuit:'Jeddah Corniche Circuit', 
        locationName: 'Saudi Arabian',
        flag: 'assets/Flags/Flag-map_of_Saudi_Arabia.svg.png',
        shape:'assets/Circuits/SAU (Stroke).svg',
        imgSectors: 'assets/Circuits/SArabia.avif',
        raceDate: '17 - 19 March',
        long: 6174,
        laps: 50,
        location: {
            lat:21.632304501844704, lng:39.10439163797429}},
    {
        circuit:'Albert Park Grand Prix Circuit', 
        locationName: 'Australian',
        flag: 'assets/Flags/Flag-map_of_Australia.svg.png',
        shape:'assets/Circuits/AUS (Stroke).svg',
        imgSectors: 'assets/Circuits/Australia.avif',
        raceDate: '31 - 2 April',
        long: 5278,
        laps: 58,
        location: {
            lat:-37.84987609444263, lng:144.968998737776}},
    {
        circuit:'Baku City Circuit', 
        locationName: 'Azerbaian',
        flag: 'assets/Flags/Flag-map_of_Azerbaijan.svg.png',
        shape:'assets/Circuits/AZE (Stroke).svg',
        imgSectors: 'assets/Circuits/Azerb.avif',
        raceDate: '28 - 30 April',
        long: 6003,
        laps: 51,
        location: {
            lat:40.373771847021665, lng: 49.85352841533236}},
    {
        circuit:'Hard Rock Stadium Circuit', 
        locationName: 'Miami',
        flag: 'assets/Flags/USA_Flag_Map.svg.png',
        shape:'assets/Circuits/MIA (Stroke).svg',
        imgSectors: 'assets/Circuits/Miami.avif',
        raceDate: '5 - 7 May',
        long: 5412,
        laps: 57,
        location: {
            lat:25.957675, lng:-80.234424}},
            {
                circuit:'Autodromo Enzo e Dino Ferrari', 
        locationName: 'Emilia Romagna',
        flag: 'assets/Flags/Itali Flag.svg',
        shape:'assets/Circuits/EMI (Stroke).svg',
        imgSectors: 'assets/Circuits/Imola.avif',
        raceDate: '19 - 21 May',
        long: 4909,
        laps: 63,
        location: {
            lat:44.34512288130726, lng:11.715787317959505}},
    {
        circuit:'Monaco', 
        locationName: 'Monaco',
        flag: 'assets/Flags/Flag_map_of_Monaco.svg.png',
        shape:'assets/Circuits/MON (Stroke).svg',
        imgSectors: 'assets/Circuits/Monaco.avif',
        raceDate: '26 - 28 May',
        long: 3337,
        laps: 78,
        location: {
            lat:43.734243620655086, lng:7.421681859987206,}},
    {
        circuit:'Circuit de Catalunya', 
        locationName: 'Spanish',
        flag: 'assets/Flags/Spain-flag-map-plus-ultra.png',
        shape:'assets/Circuits/SPA (Stroke).svg',
        imgSectors: 'assets/Circuits/Spain.avif',
        raceDate: '2 - 4 June',
        long: 4657,
        laps: 66,
        location: {
            lat:41.56865223638348, lng: 2.257311924225883}},
    {
        circuit:'Gilles Villeneuve Circuit', 
        locationName: 'Canadian',
        flag: 'assets/Flags/Canada_flag_map.svg.png',
        shape:'assets/Circuits/CAN (Stroke).svg',
        imgSectors: 'assets/Circuits/Canada.avif',
        raceDate: '16 - 18 June',
        long: 4361,
        laps: 70,
        location: {
            lat:45.50190697860013,  lng:-73.52791596888379}},
    {
        circuit:'Red Bull Ring', 
        locationName: 'Austrian',
        flag: 'assets/Flags/Flag-map_of_Austria.svg.png',
        shape:'assets/Circuits/REDBULLRING(Stroke).svg',
        imgSectors: 'assets/Circuits/Austria.avif',
        raceDate: '30 - 2 July',
        long: 4318,
        laps: 71,
        location: {
            lat:47.21979953540738, lng:14.76511309578712}},
    {
        circuit:'Silverstone Circuit', 
        locationName: 'British',
        flag: 'assets/Flags/Uk map flag.png',
        shape:'assets/Circuits/BRI (Stroke).svg',
        imgSectors: 'assets/Circuits/Silverstone.avif',
        raceDate: '7 - 9 July',
        long: 5891,
        laps: 52,
        location: {
            lat:52.06958401263113, lng:-1.021549074994194}},
    {
        circuit:'Hungaroring Circuit', 
        locationName: 'Hungary',
        flag: 'assets/Flags/hungary map flag.png',
        shape:'assets/Circuits/HUN (Stroke).svg',
        imgSectors: 'assets/Circuits/Hungary.avif',
        raceDate: '21 - 23 July',
        long: 4381,
        laps: 70,
        location: {
            lat:47.58001966719395, lng:19.247308495813947,}},
    {
        circuit:'Circuit of Spa-Francorchamps', 
        locationName: 'Belgium',
        flag: 'assets/Flags/belgium flag map.png',
        shape:'assets/Circuits/BEL (Stroke).svg',
        imgSectors: 'assets/Circuits/Belgium.avif',
        raceDate: '28 - 30 July',
        long: 7004,
        laps: 44,
        location: {
            lat:50.44457302724075, lng: 5.965343096973329}},
    {
        circuit:'Circuit Zandvoort', 
        locationName: 'The Netherlands',
        flag: 'assets/Flags/Netherlands flag.png',
        shape:'assets/Circuits/NED (Stroke).svg',
        imgSectors: 'assets/Circuits/Dutch.avif',
        raceDate: '25 - 27 August',
        long: 4259,
        laps: 72,
        location: {
            lat:52.388876832590086,  lng:4.541480786052193,}},
    {
        circuit: 'Autodromo Nazionale di Monza',
        locationName: 'Italian',
        flag: 'assets/Flags/Itali Flag.svg',
        shape:'assets/Circuits/ITA (Stroke).svg',
        imgSectors: 'assets/Circuits/Italy.avif',
        raceDate: '1 - 3 September',
        long: 5793,
        laps: 53,
        location:{
            lat: 45.61758018965837, lng:9.281442637997559}},
    {
        circuit:'Marina Bay Street Circuit', 
        locationName: 'Singapore',
        flag: 'assets/Flags/Singapore country flag.png',
        shape:'assets/Circuits/SIN.svg',
        imgSectors: 'assets/Circuits/Singapore.avif',
        raceDate: '15 - 17 September',
        long: 4940,
        laps: 62,
        location: {
            lat:5.5892957375404215, lng:104.2154734203962}},
    {
        circuit:'Suzuka Circuit', 
        locationName: 'Japanese',
        flag: 'assets/Flags/japan country flag.png',
        shape:'assets/Circuits/JAN.svg',
        imgSectors: 'assets/Circuits/Japan.avif',
        raceDate: '22 - 24 September',
        long: 5807,
        laps: 53,
        location: {
            lat:34.845708129694465, lng:136.53882948055275}},
    {
        circuit:'Lusail International Circuit', 
        locationName: 'Qatar',
        flag: 'assets/Flags/Qatar-Map-Flag-With-Stroke.png',
        shape:'assets/Circuits/QAT (Stroke).svg',
        imgSectors: 'assets/Circuits/Qatar.avif',
        raceDate: '6 - 8  October',
        long: 5419,
        laps: 57,
        location: {
            lat:25.488681960924566, lng:51.45055017663813}},
    {
        circuit:'Circuit of the Americas', 
        locationName: 'USA',
        flag: 'assets/Flags/USA_Flag_Map.svg.png   ',
        shape:'assets/Circuits/USA (Stroke).svg',
        imgSectors: 'assets/Circuits/USA.avif',
        raceDate: '20 - 22 October',
        long: 5513,
        laps: 56,
        location: {
            lat:30.132620711972624, lng: -97.63913275396517}},
    {
        circuit:'Autódromo Hermanos Rodríguez', 
        locationName: 'Mexican',
        flag: 'assets/Flags/Mexico_Flag_Map.svg.png',
        shape:'assets/Circuits/MEX (Stroke).svg',
        imgSectors: 'assets/Circuits/Mexico.avif',
        raceDate: '27 - 29 October',
        long: 4304,
        laps: 71,
        location: {
            lat:19.406047588050207,  lng:-99.09237461787923}},

    {
        circuit:'Autódromo José Carlos Pace', 
        locationName: 'Brazilian',
        flag: 'assets/Flags/Flag_map_of_Brazil.png',
        shape:'assets/Circuits/BRA (Stroke).svg',
        imgSectors: 'assets/Circuits/Brazil.avif',
        raceDate: '3 - 5 November',
        long: 4039,
        laps: 71,
        location: {
            lat:-23.70442965834506, lng:-46.6992182630323}},
    {
        circuit:'Las Vegas Urban Circuit', 
        locationName: 'Las Vegas',
        flag: 'assets/Flags/USA_Flag_Map.svg.png',
        shape:'assets/Circuits/VEG.svg',
        imgSectors: 'assets/Circuits/VEGAS.avif',
        raceDate: '16 - 18 November',
        long: 6201,
        laps: 50,
        location: {
            lat:36.114608, lng: -115.168698}},
    {
        circuit:'Yas Marina Circuit', 
        locationName: 'Abu Dabi',
        flag: 'assets/Flags/abu Dhabi flag map.png',
        shape:'assets/Circuits/ABU (Stroke).svg',
        imgSectors: 'assets/Circuits/Abu Dhabi.avif',
        raceDate: '24 - 26 November',
        long: 5281,
        laps: 58,
        location: {
            lat:24.472681512293555, lng:54.60496853680377}},
        ]
        

    constructor() { }
}