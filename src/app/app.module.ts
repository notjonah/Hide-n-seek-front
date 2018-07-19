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
import { PaymentPage } from "../pages/payment/payment";
import { ComponentsModule } from "../components/components.module";
import { TimerPage } from "../pages/timer/timer";
import { MapsPage } from "../pages/maps/maps";
import { Game1Page } from "../pages/game1/game1";
import { Game2Page } from "../pages/game2/game2";
import { Game3Page } from "../pages/game3/game3";
import { Game4Page } from "../pages/game4/game4";
import { AgmCoreModule } from "../../node_modules/@agm/core";
import { Http, HttpModule } from '@angular/http';

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
    PaymentPage,
    TimerPage,
    MapsPage, 
    Game1Page,
    Game2Page,
    Game3Page,
    Game4Page, 
  ],

  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['geometry'],
      }),
     

    
    IonicModule.forRoot(MyApp, {}, { links: [
      { component: LoginPage, name: "login", segment: "login"},
      { component: HomePage, name: "home", segment: "home" },
      { component: LandingPage, name: "landing", segment: "landing"},
      { component: PaymentPage, name: "payment", segment: "payment"},
      { component: MapsPage, name: "maps", segment: "maps"},
      { component: Game1Page, name: "gameone", segment: "gameone"},
      { component: Game2Page, name: "gametwo", segment: "gametwo"},
      { component: Game3Page, name: "gamethree", segment: "gamethree"},
      { component: Game3Page, name: "gamefour", segment: "gamefour"},
      { component: RegistrationPage, name: "registration", segment: "registration" }]})

  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimerPage,
    RegistrationPage,
    LoginPage,
    LandingPage,
    PaymentPage,
    MapsPage,
    Game1Page,
    Game2Page,
    Game3Page,
    Game4Page
  ],

  providers: [
    StatusBar,
    SplashScreen,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
   

  ],
})
export class AppModule { }
