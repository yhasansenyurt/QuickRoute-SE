import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { Layer, icon, marker } from 'leaflet';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css'],
})
export class MapContainerComponent implements AfterViewInit, OnDestroy {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [0, 0], // Başlangıçta boş bir merkez konumu belirliyoruz
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);

    this.map.locate({ setView: true, maxZoom: 14 }).on('locationfound', (e) => {
      // Konum bulunduğunda bu işlev çalışacak
      const { lat, lng } = e.latlng;
      this.map.setView([lat, lng], 14); // Konumu merkezlemek için harita görünümünü güncelliyoruz

      var marker = L.marker([lat, lng]).addTo(this.map);
      var circle = L.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1000,
      }).addTo(this.map);

      var greenIcon = new L.Icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      // Belirli sayıda rastgele markör oluştur
      var numMarkers = 5;
      for (let i = 0; i < numMarkers; i++) {
        var randomLat =
          circle.getLatLng().lat +
          ((Math.random() - 0.5) * circle.getRadius()) / 111000; // Latitude hesaplaması
        var randomLng =
          circle.getLatLng().lng +
          ((Math.random() - 0.5) * circle.getRadius()) /
            (111000 * Math.cos((Math.PI * circle.getLatLng().lat) / 180)); // Longitude hesaplaması
        var randomMarker = L.marker([randomLat, randomLng], {
          icon: greenIcon,
        }).addTo(this.map);
      }
    });
  }

  constructor() {}

  ngOnDestroy() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
