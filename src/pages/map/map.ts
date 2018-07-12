///<reference path="../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

import { HomePage } from '../home/home';
import { TimerPage } from '../timer/timer';

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

  @ViewChild('timer') timer: TimerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
  navigateToHome() {
    console.log("Navigating...");
    this.navCtrl.push(HomePage);
  }
}
