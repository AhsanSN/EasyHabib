import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spaces',
  templateUrl: 'spaces.html',
})
export class SpacesPage {

  spaceName: string = "Classroom";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpacesPage');
    this.showSpace(1);
  }

  showSpace(spaceNumber){
    if (spaceNumber==1){
      this.spaceName = "Classroom";
    }
    if (spaceNumber==2){
      this.spaceName = "Faculty Pod";
    }

  }
}
