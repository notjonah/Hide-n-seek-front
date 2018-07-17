import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the Game1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game4',
  templateUrl: 'game4.html',
})
export class Game4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToMap() {
    console.log("Navigating...");
    this.navCtrl.push("map");
  }

  navigateToPayment() {
    console.log("Navigating...");
    this.navCtrl.push(PaymentPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game1Page');
  }

}