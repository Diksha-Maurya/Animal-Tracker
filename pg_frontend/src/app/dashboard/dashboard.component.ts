import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, MapStyle, Marker, config, Popup } from '@maptiler/sdk';

import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as turf from '@turf/turf';
import { UserService } from '../services/user-service/user.service';
import mapboxgl from 'mapbox-gl';
import { MovementDataService } from '../services/movement-data/movement-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {

  map: Map | undefined;
  originCoordinates: number[][] = [];
  destCoordinates: number[][] = [];

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  useremailid: String = '';

  constructor(private movementDatatService: MovementDataService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.movementDatatService.getMovementData().subscribe(response => {
      for (var res in response) {
        this.originCoordinates.push([response[res].origin_longitude, response[res].origin_latitude, response[res].origin_street + ' ' + response[res].origin_city + ' ' + response[res].origin_state, response[res].numitemsmoved]);
        this.destCoordinates.push([response[res].destination_longitude, response[res].destination_latitude, response[res].destination_street + ' ' + response[res].destination_city + ' ' + response[res].destination_state, response[res].numitemsmoved]);
      }
      this.printMap();
    },(error)=>{})
    config.apiKey = 'LQTBJ33yrHOT8oEiQjkp';
    this._snackBar.open('Click on Pin to see more details', 'OK');
  }

  printMap(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [-92, 43.8],
      zoom: 5
    });

    for (var coord in this.originCoordinates) {

      var origin = this.originCoordinates[coord]
      var destination = this.destCoordinates[coord];

      const originMarker = new Marker({ color: "#00FF00" })
        .setLngLat([origin[0], origin[1]])
        .addTo(this.map);

      const originpopupContent = {
        Long: origin[0],
        Lat: origin[1],
        Address: origin[2],
        ItemsMoved: origin[3]
      };

      const originpopupHTML = `
      <h4>Origin Details</h4>
      <p>Longitude: ${originpopupContent.Long}</p>
      <p>Latitude: ${originpopupContent.Lat}</p>
      <p>Address: ${originpopupContent.Address}</p>
      <p>Items Moved: ${originpopupContent.ItemsMoved}</p>
    `;
      originMarker.setPopup(new Popup().setHTML(originpopupHTML));


      const destinationMarker = new Marker({ color: "#FF0000" })
        .setLngLat([destination[0], destination[1]])
        .addTo(this.map);

      const destinationpopupContent = {
        Long: destination[0],
        Lat: destination[1],
        Address: destination[2]
      };
      const popupHTML = `
        <h4>Destination Details</h4>
        <p>Longitude: ${destinationpopupContent.Long}</p>
        <p>Latitude: ${destinationpopupContent.Lat}</p>
        <p>Address: ${destinationpopupContent.Address}</p>
      `;

      destinationMarker.setPopup(new Popup().setHTML(popupHTML));


      const route: turf.AllGeoJSON = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              'description':
                '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
              'icon': 'theatre'
            }, // Add an empty properties object
            geometry: {
              type: 'LineString',
              coordinates: [origin, destination]
            }
          }
        ]
      };

      var point = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Point',
              'coordinates': origin
            }
          }
        ]
      };
      var lineDistance = turf.lineDistance(route.features[0], { units: 'kilometers' });

      const arc: number[][] = [];

      var steps = 500;

      for (var i = 0; i < lineDistance; i += lineDistance / steps) {
        var segment = turf.along(route.features[0].geometry as turf.LineString, i, { units: 'kilometers' });
        arc.push(segment.geometry.coordinates);
      }

      route.features[0].geometry['coordinates'] = arc;
      var counter = 0;


      ((coord) => {
        // Use an arrow function to maintain the correct 'this' context

        this.map?.on('load', () => {
    
          this.map?.addSource(`route-${coord}`, {
            'type': 'geojson',
            'data': route
          });

          this.map?.addSource(`point-${coord}`, {
            'type': 'geojson',
            'data': point
          });

          this.map?.addLayer({
            'id': `route-${coord}`,
            'source': `route-${coord}`,
            'type': 'line',
            'paint': {
              'line-width': 2,
              'line-color': '#007cbf'
            }
          });

        });
      })(coord);


    }
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

}
