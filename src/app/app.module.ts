import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { RegistrationPage } from "../pages/registration/registration";
import { LoginPage } from "../pages/login/login";
import { LandingPage } from "../pages/landing/landing";
import { BingMapsLoader } from "../providers/bing-maps/bing-map.service";
import { MapPage } from "../pages/map/map";
import { PaymentPage } from "../pages/payment/payment";
import { ComponentsModule } from "../components/components.module";
import { TimerPage } from "../pages/timer/timer";


import { HttpModule } from "@angular/http";

// import {
//   MapModule,
//   MapAPILoader,
//   BingMapAPILoaderConfig,
//   BingMapAPILoader,
//   WindowRef,
//   DocumentRef,
  
// } from "angular-maps";

@NgModule({
  declarations: [
    MyApp, 
    HomePage, 
    RegistrationPage, 
    LoginPage, 
    LandingPage, 
    MapPage,
    PaymentPage,
    TimerPage,
  ],

  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, { links: [
      { component: LoginPage, name: "login", segment: "login"},
      { component: HomePage, name: "home", segment: "home" },
      { component: LandingPage, name: "landing", segment: "landing"},
      { component: PaymentPage, name: "payment", segment: "payment"},
      { component: MapPage, name: "map", segment: "map"},
      { component: RegistrationPage, name: "registration", segment: "registration" }]})

  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    TimerPage,
    RegistrationPage,
    LoginPage,
    LandingPage,
    MapPage, 
    PaymentPage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    BingMapsLoader,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
   

  ]
})
export class AppModule { }
