import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.css'],
})
export class DeliveryMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.createMap(latitude, longitude);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  createMap(latitude: number, longitude: number) {
    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);

    const circle = L.circle([latitude, longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500, // circle radius in meters
    }).addTo(map);

    const numberOfMarkers = 6;
    const markers: L.Marker[] = [];

    const greenIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    for (let i = 0; i < numberOfMarkers; i++) {
      const randomLat = latitude + (Math.random() - 0.5) * 0.01;
      const randomLng = longitude + (Math.random() - 0.5) * 0.01;

      const markerOptions: L.MarkerOptions = {
        title: 'Marker ' + (i + 1),
      };

      if (i === 0) {
        markerOptions.icon = greenIcon;
      }

      const marker = L.marker([randomLat, randomLng], markerOptions).addTo(map);
      markers.push(marker);

      if (i === 0) {
        marker.bindPopup('you are here now').openPopup();
      }
    }
  }
}
