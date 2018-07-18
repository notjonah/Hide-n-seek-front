
import { Component, ViewChild } from '@angular/core';
 
@Component({
  templateUrl: 'map.component.html'
})

 export class MapComponent {

  @ViewChild('map') map;
  infoWindow;
  userLocation = {
     lat: 0,
     lng: 0

  }

  boundaryCenter;
  cityCircle;
  constructor() {
    navigator.geolocation.getCurrentPosition((position) =>
      this.userLocation = {
         lat: position.coords.latitude, 
         lng: position.coords.longitude 
        }
    )
    this.boundaryCenter=this.userLocation;
  }
 
  
  ionViewDidEnter() {
    
     this.cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map,
      center: this.userLocation,
      radius: 2000
    });
  }
 
  _markerTypeId = MarkerTypeId;
   _options: IMapOptions = {
     disableBirdseye: false,
     disableStreetside: false,
     navigationBarMode: 1,
     zoom: 6
   };
 
  _box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
  };
 
      
  _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 48,
   color: 'red',
   markerOffsetRatio: { x: 0.5, y: 1 },
       text: '\uF276'
 };
     // map.setView()  
 
  }