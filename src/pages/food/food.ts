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

  foodItems: {title: string, price: string}[] = [];
  CafeName: string = "Tapal Cafeteria Menu";

  constructor(public navCtrl: NavController, public navParams: NavParams, private DataService: DataService) {
  }

  ionViewWillEnter() {
    console.log('loadedAgain FoodPage');
    //this.foodItems = this.DataService.getTapalFoodItem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
    this.populateData();
    this.showCafeItems(1);
  }

  populateData(){

    //can be added from any file
    var a =  {title:"tapal", price:"120"};
    var b =  {title:"cafe2Go", price:"400"};
    var c =  {title:"malang", price:"80"};

    this.DataService.addTapalFoodItem(a);
    this.DataService.addTapalFoodItem(a);
    this.DataService.addTapalFoodItem(a);

    this.DataService.addcafe2GoFoodItem(b);
    this.DataService.addcafe2GoFoodItem(b);
    this.DataService.addcafe2GoFoodItem(b);
    
    this.DataService.addmalangFoodItem(c);
    this.DataService.addmalangFoodItem(c);
    this.DataService.addmalangFoodItem(c);
  }

  showCafeItems(cafeNumber){
    console.log("cafenumber",cafeNumber);
    if (cafeNumber==1){
      this.foodItems = this.DataService.getTapalFoodItems();
      this.CafeName = "Tapal Cafeteria Menu";
    }
    else if (cafeNumber==2){
      this.foodItems = this.DataService.getcafe2GoFoodItems();
      this.CafeName = "Cafe2Go Menu";
    }
    else if (cafeNumber==3){
      this.foodItems = this.DataService.getmalangFoodItems();
      this.CafeName = "Malang Cafe Menu";
    }
  }

}
