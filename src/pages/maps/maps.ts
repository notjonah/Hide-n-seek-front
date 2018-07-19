import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader } from '../../../node_modules/@agm/core';
import { AlertController } from 'ionic-angular';
import { TimerComponent } from '../timer/timer';

@Component({
  selector: 'maps-page',
  templateUrl: 'maps.html'
})
export class MapsPage implements OnInit {

  @ViewChild(TimerComponent) timer: TimerComponent;

  area;

  userLocation = {
    lat: 0,
    lng: 0
  }
  boundaryCenter = { lat: 0, lng: 0 };

  center = {
    lat: 6.435838,
    lng: 3.451384,
  };
  // This array of latLngs represents the polygon around our ranch


  polygon = [

    { lat: -33.90409, lng: 18.42013 },
    { lat: -33.90417, lng: 18.41928 },
    { lat: -33.90466, lng: 18.41881 },
    { lat: -33.90535, lng: 18.41886 },
    { lat: -33.90577, lng: 18.41953 },
    { lat: -33.90571, lng: 18.42054 },
    { lat: -33.90517, lng: 18.42091 },
    { lat: -33.90451, lng: 18.42083 }
  ];

  inside = { lat: -33.90459, lng: 18.41994 }
  outside = { lat: -33.90718, lng: 18.41815 }

  constructor(private loader: MapsAPILoader, private alertCtrl: AlertController) {
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
        paths: this.polygon

      });
    });

    

    // Create a LatLng using the position returned from the pusher event
    const latLng = new google.maps.LatLng(this.outside.lat, this.outside.lng);
    setTimeout(() => {
      if (!google.maps.geometry.poly.containsLocation(latLng, this.area)) {
        // Show alert if user has left the polygon
  
          let alert = this.alertCtrl.create({
            title: 'Please enter the game boundaries!',
            subTitle: 'You are out of bounds.',
            buttons: ['Ok']
          });
          alert.present();
        this.timer.initTimer()        
        

      } else {

          this.timer.startTimer();
       
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

