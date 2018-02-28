import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentProvider } from '../../providers/payment/payment';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    PaymentProvider
  ]
})
export class FeedPage {
  public nomeUsuario:string = "Wagner Kenji Yatabe";

  constructor(public navCtrl: NavController, public navParams: NavParams, private paymentProvider: PaymentProvider) {
    
  }

  ionViewDidLoad() {
    this.paymentProvider.doPayment().subscribe(
      data=>{
        console.log(data);
      },
      error=> {
        console.log(error);
      }
    )
  }

}
