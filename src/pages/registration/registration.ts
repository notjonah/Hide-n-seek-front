import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  private email: string;
  private username:string;
  private firstname: string;
  private lastname: string;
  private password: string;
  private confirmpassword: string;
  private phone: string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http) {

  }

  registration() {
    this.http.post('https://hide-n-seek-mobile.herokuapp.com/registration', {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      confirmpassword: this.confirmpassword,
      phone: this.phone,
      username:this.username

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
