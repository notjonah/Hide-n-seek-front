import { Component } from '@angular/core';
import { NavController, } from 'ionic-angular';
import { Http } from '@angular/http';
import { LandingPage } from '../landing/landing';


@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, private http: Http) {
  
  }

  // login() {
  //   this.http
  //     .post("http://localhost:3000/login", {
  //       email: this.email,
  //       password: this.password
  //     })

  login() {
    this.http
      .post("https://hide-n-seek-mobile.herokuapp.com/login", {
        email: this.email,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);
          var jwtResponse = result.json();
          var token = jwtResponse.token;
          console.log(token);
          localStorage.setItem("TOKEN", token);

         // let t = localStorage.getItem("TOKEN");

          this.navCtrl.push(LandingPage);
        },

        err => {
          console.log(err);
        }
      );
  }


  navigateToLanding() {
    console.log("Navigating...");
    this.navCtrl.push(LandingPage);
  }
}


