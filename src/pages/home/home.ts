import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';
import { PaymentPage } from '../payment/payment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
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
