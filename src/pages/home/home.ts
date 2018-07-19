import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;

  constructor(public navCtrl: NavController) {
  }
  
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4100);
  }

  navigateToRegistration() {
    console.log("Navigating...");
    this.navCtrl.push(RegistrationPage);
  }
  navigateToLogin() {
    console.log("Navigating...");

    this.navCtrl.push(LoginPage)

  }
}
