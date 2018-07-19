import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerComponent } from './timer';

@NgModule({
  declarations: [
    TimerComponent,
  ],
  imports: [
    IonicPageModule.forChild(TimerComponent),
  ],
})
export class TimerPageModule {}
