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
    console.log('loadedAgain FoodPage');
    this.tapalFoodItems = this.DataService.getTapalFoodItem();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad FoodPage');
    populateData();
    this.tapalFoodItems = this.DataService.getTapalFoodItem();
  }

  populateData(){
    
    var a =  {title:"tapal", price:"12323"};
    var b =  {title:"cacafe2God", price:"12323"};
    var c =  {title:"malang", price:"12323"};

    this.DataService.addTapalFoodItem(a);
    this.DataService.addTapalFoodItem(a);
    this.DataService.addTapalFoodItem(a);

    this.DataService.addcafe2GoFoodItems(b);
    this.DataService.addcafe2GoFoodItems(b);
    this.DataService.addcafe2GoFoodItems(b);

    this.DataService.addmalangFoodItems(c);
    this.DataService.addmalangFoodItems(c);
    this.DataService.addmalangFoodItems(c);
  }

}
