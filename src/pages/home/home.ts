import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';
import { PaymentPage } from '../payment/payment';
import { TimerPage } from '../timer/timer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('timer') timer: TimerPage;

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
  navigateToRegistration() {
    console.log("Navigating...");
    this.navCtrl.push(RegistrationPage);
  }
  navigateToLogin() {
    console.log("Navigating...");

    this.navCtrl.push(LoginPage)
  }
  navigateToPayment() {
    console.log("Navigating...");

    this.navCtrl.push(PaymentPage)
  }
}
