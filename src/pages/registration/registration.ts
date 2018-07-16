import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public email: string;
  public firstname: string;
  public lastname: string;
  public password: string;
  public confirmpassword: string;
  public phone: string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http) {

  }

  registration() {
    this.http.post('http://hide-n-seek-mobile.herokuapp.com/registration', {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      confirmpassword: this.confirmpassword,
      phone: this.phone

    }).subscribe(
      result => {
        console.log(result);
        this.navCtrl.push(LoginPage);
      },
      err => {
        console.log(err);
      }
    )
  }

  navigateToLogin() {
    console.log("Navigating to LoginPage...");

    this.navCtrl.push(LoginPage);
  }

}
