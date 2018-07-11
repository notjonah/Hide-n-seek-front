import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaymentPage,

  ],
  imports: [
    IonicPageModule.forChild(PaymentPage),
    FormsModule
  ],
})
export class PaymentPageModule {}
