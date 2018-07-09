/// <reference path="../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { Component } from '@angular/core';
import { MarkerTypeId, IMapOptions } from 'angular-maps';


@Component({
  selector: 'app-bing-map',
  templateUrl: 'map.component.html'
})
export class MapComponent {

  map;

  constructor() {

  }

   _markerTypeId = MarkerTypeId
  // a little trick so we can use enums in the template...

   _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1
  };
  // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

   _click() {
    console.log("hello world...");
  }
}

