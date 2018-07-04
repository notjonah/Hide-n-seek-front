import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BingMapsLoader } from '../../providers/bing-maps/bing-map.service';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  mapReady = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    BingMapsLoader.load()
    .then(res => {
        console.log('BingMapsLoader.load.then', res);
        this.mapReady = true;
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
