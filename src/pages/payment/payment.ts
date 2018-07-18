import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
// import { MapPage } from '../map/map';
import { Http } from '@angular/http';
import { Chart } from 'chart.js';

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

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

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


  constructor(private cd: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams, public http: Http) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

    this.doughnutChart = new Chart (this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      }

  });

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
              {
                  label: "My First dataset",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [65, 59, 80, 81, 56, 55, 40],
                  spanGaps: false,
              }
          ]
      }

  });

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
      result => {
        console.log(result);



        this.navCtrl.push("MapPage");
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


