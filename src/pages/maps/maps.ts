import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsAPILoader } from '../../../node_modules/@agm/core';

@Component({
  selector: 'maps-page',
  templateUrl: 'maps.html'
})
export class MapsPage implements OnInit {
  area;

  userLocation = {
    lat: 0,
    lng: 0
  }
  boundaryCenter= { lat: 0, lng: 0 };

  center = {
    lat: 6.435838,
    lng: 3.451384,
  };
  // This array of latLngs represents the polygon around our ranch
  polygon = [
    { lat: 6.436914, lng: 3.451432 },
    { lat: 6.436019, lng: 3.450917 },
    { lat: 6.436584, lng: 3.450917 },
    { lat: 6.435006, lng: 3.450928 },
    { lat: 6.434953, lng: 3.451808 },
    { lat: 6.435251, lng: 3.451765 },
    { lat: 6.435262, lng: 3.451969 },
    { lat: 6.435518, lng: 3.451958 },
  ];


  constructor(private loader: MapsAPILoader) {
    console.log('MAPS IS HERE')
    navigator.geolocation.getCurrentPosition((position) =>
      this.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    )
  }
  ngOnInit() {
    // Wait for the google maps script to be loaded before using the "google" keyword
    this.loader.load().then(() => {
      this.area = new google.maps.Polygon({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        paths:this.polygon
        
      });
    });


    // Create a LatLng using the position returned from the pusher event
    const latLng = new google.maps.LatLng(this.center.lat,this.center.lng);
    setTimeout(() => {
      if (!google.maps.geometry.poly.containsLocation(latLng,this.area)) {
        // Show alert if user has left the polygon
        alert('Outside');
       
      } else {
        alert('Inside');
      }
    }, 1000);
   
    // Check if the location is outside the polygon
    
  
}
  setLocation() {
    navigator.geolocation.getCurrentPosition((position) =>
      this.boundaryCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    )
  }

}

