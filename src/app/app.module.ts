import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { BingMapsLoader } from "../providers/bing-maps/bing-map.service";
import { MapPage } from "../pages/map/map";
import { ComponentsModule } from "../components/components.module";
// import {
//   MapModule,
//   MapAPILoader,
//   BingMapAPILoaderConfig,
//   BingMapAPILoader,
//   WindowRef,
//   DocumentRef,
  
// } from "angular-maps";

@NgModule({
  declarations: [MyApp, HomePage, MapPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BingMapsLoader,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
   

  ]
})
export class AppModule { }
