import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from "../../Services/data.service";

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  tapalFoodItems: {title: string, price: string}[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private DataService: DataService) {
  }

  ionViewWillEnter() {
    this.tapalFoodItems = this.DataService.getTapalFoodItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
    var a =  {title:"asdasd", price:"12323"}
    this.DataService.addTapalFoodItem(a);
    this.DataService.addTapalFoodItem(a);
    this.DataService.addTapalFoodItem(a);
  }

}
