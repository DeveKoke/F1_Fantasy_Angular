import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { CircuitInterface } from '../interfaces/circuits-interface';
import { CircuitService } from '../services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent {

  constructor(private circuits:CircuitService){}

  
  @ViewChild('CircuitDefault') CircuitDefault: TemplateRef<any>;
  CircuitsData:CircuitInterface[] = this.circuits.circuitsData;
  CircuitInfo:CircuitInterface;
  showCircuitInfo:boolean = false;
  lat:number = 26.032430837717822;
  long:number =  50.510848557672475;
  map: Map;

  ngAfterViewInit(): void {
    this.initializeMap();
  }
  
  initializeMap(): void {
    this.map = new Map('map').setView([this.lat, this.long], 11);
  
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    for (let i = 0; i < this.circuits.circuitsData.length; i++) {
          const circuit = this.circuits.circuitsData[i];
          const popupContent = document.createElement('div');
          popupContent.classList.add('popupContent');
          popupContent.innerHTML = `
            <h2 class="h2PopUp"> ${circuit.locationName} Grand Prix </h2>
            <h3 >${circuit.circuit}</h3>
            <img src="${circuit.shape}">
          `;
          // popupContent.addEventListener('click', () => this.getCircuitInfo(i));
          const markerInstance = marker([circuit.location.lat, circuit.location.lng]).addTo(this.map);
    markerInstance.bindPopup(popupContent); 
    }
  }
  
      // ngAfterViewInit():void{
      //   const map = new Map ('map').setView([this.lat, this.long], 3);
  
      //   tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //   maxZoom: 19,
      //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      //   }).addTo(map);
    
      //   for (let i = 0; i < this.circuits.circuitsData.length; i++) {
      //     const circuit = this.circuits.circuitsData[i];
      //     const popupContent = document.createElement('div');
      //     popupContent.classList.add('popupContent');
      //     popupContent.innerHTML = `
      //       <h2 class="h2PopUp"> ${circuit.locationName} Grand Prix </h2>
      //       <h3 >${circuit.circuit}</h3>
      //       <img src="${circuit.shape}">
      //     `;
      //     popupContent.addEventListener('click', () => this.getCircuitInfo(i));
          
      //     marker([circuit.location.lat, circuit.location.lng])
      //       .addTo(map)
      //       .bindPopup(popupContent);
      //   }  
        
    
        // map.fitBounds([
        //   [markerMap.getLatLng().lat, markerMap.getLatLng().lng]
        // ]);
        // map.fitBounds([[34.663460, -17.796750]])
      // }


  getCircuitInfo(i:number):void{

    this.showCircuitInfo =  true;
    const circuitInfo = this.CircuitsData[i];
    this.CircuitInfo = circuitInfo;

    this.lat = circuitInfo.location.lat;
    this.long = circuitInfo.location.lng;

    if (this.map) {   
      this.map.remove();
      this.map = null;
    }
    this.initializeMap();
    setTimeout(() => {
      this.initializeMap();
    }, 10);

  }

  

}
