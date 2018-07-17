import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Game1Page } from '../game1/game1';
import { Game2Page } from '../game2/game2';
import { Game3Page } from '../game3/game3';
import { Game4Page } from '../game4/game4';
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})

export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToGame1() {
    console.log("Navigating...");
    this.navCtrl.push(Game1Page)
  }

  navigateToGame2() {
    console.log("Navigating...");
    this.navCtrl.push(Game2Page)
  }
  navigateToGame3() {
    console.log("Navigating...");
    this.navCtrl.push(Game3Page)
  }

  navigateToGame4() {
    console.log("Navigating...");
    this.navCtrl.push(Game4Page)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
