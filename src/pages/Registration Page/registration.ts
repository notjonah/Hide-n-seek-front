import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FrontPage } from '../Front/front';

@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegistrationPage {

    constructor(public navCtrl: NavController) { }

    navigateToRegistration() {
        console.log("Navigating...");
    }

    navigateToFront() {
        console.log("Navigating...")
        this.navCtrl.push(FrontPage)
    }

}


