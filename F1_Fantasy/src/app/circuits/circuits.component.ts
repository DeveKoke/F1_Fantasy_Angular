import { Component } from '@angular/core';
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

  CircuitsData:CircuitInterface[] = this.circuits.circuitsData;
  CircuitInfo:CircuitInterface;
  showCircuitInfo:boolean = false;
  
  ngAfterViewInit():void{
    const map = new Map ('map').setView([23.125393, 10.320347], 3);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    for (let i = 0; i < this.circuits.circuitsData.length; i++) {
      const circuit = this.circuits.circuitsData[i];
      const popupContent = document.createElement('div');
      popupContent.classList.add('popupContent');
      popupContent.innerHTML = `
        <h2 class="h2PopUp"> ${circuit.locationName} Grand Prix </h2>
        <h3 >${circuit.circuit}</h3>
        <img src="${circuit.shape}">
      `;
      popupContent.addEventListener('click', () => this.getCircuitInfo(i));
      
      marker([circuit.location.lat, circuit.location.lng])
        .addTo(map)
        .bindPopup(popupContent);
    }  
    

    // map.fitBounds([
    //   [markerMap.getLatLng().lat, markerMap.getLatLng().lng]
    // ]);
    // map.fitBounds([[34.663460, -17.796750]])
  }

  getCircuitInfo(i:number):void{

    this.showCircuitInfo =  true;
    const circuitInfo = this.CircuitsData[i];
    this.CircuitInfo = circuitInfo;
    console.log(this.CircuitInfo);
    
  }

}
