import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  message: {title: string, body: string, type: string, date: string}[] = [];
  vanFormData = {}

  submitVanForm(){
    console.log("van form", this.vanFormData);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.message = this.navParams.get('message');
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }


}
