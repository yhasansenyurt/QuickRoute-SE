import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-order-tracking-map',
  templateUrl: './order-tracking-map.component.html',
  styleUrls: ['./order-tracking-map.component.css'],
})
export class OrderTrackingMapComponent implements OnInit {
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

    var greenIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const randomLatitude = latitude + (Math.random() - 0.5) / 100;
    const randomLongitude = longitude + (Math.random() - 0.5) / 100;
    const randomMarker = L.marker([randomLatitude, randomLongitude])
      .addTo(map)
      .bindPopup('your courier is on the way')
      .openPopup();
    var marker = L.marker([latitude, longitude], {
      icon: greenIcon,
    })
      .addTo(map)
      .bindPopup('You are Here!')
      .openPopup();
  }
}
