import { Component } from '@angular/core';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-bing-map',
  templateUrl: 'map.component.html'
})
export class MapComponent {

  text: string;

  constructor() {
    console.log('Hello MapComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    if (typeof Microsoft !== 'undefined') {
        console.log('BingMapComponent.ngOnInit');
        this.loadMap();
    }
}

loadMap() {
  this.map = new Microsoft.Maps.Map(document.getElementById('mapId'), {
      credentials: 'Your Bing Maps Key Here',
  });
}
}
