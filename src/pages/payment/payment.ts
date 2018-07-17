import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({ 
  selector: 'page-payment',
  templateUrl: 'payment.html',
 })

export class PaymentPage implements AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  public firstname: string;
  public lastname: string;
  public amount: number;
  public currency: string;
  public date: string;
  public charge_id: number;
  public receipt_email: string;


  constructor(private cd: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams, public http: Http ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  
  ngAfterViewInit() {
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };

    this.card = elements.create('card', { style });
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      this.charge_id = token.id;
      
      this.payment();
      // ...send the token to the your backend to process the charge
    } 
  }

  payment() {
    this.http
    .post("http://localhost:3000/payment?jwt=" + localStorage.getItem("TOKEN"), {
      //firstname: this.firstname,
      //lastname: this.lastname,
      amount: this.amount,
      currency: this.currency,
      //date: this.date,
      token: this.charge_id,
      //receipt_email: this.receipt_email,
    })
    .subscribe(
      result=> {
        console.log(result);



        this.navCtrl.push("");
      },

      err => {
        console.log(err);
      }
    );
  }

ionViewLoad() {
  console.log('ionViewDidLoad MapPage');
  }
}
