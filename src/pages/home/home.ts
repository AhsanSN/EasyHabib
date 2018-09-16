import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from "../../Services/data.service";
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeScreenNotf: {title: string, body: string, type: string, date: string}[] = [];

  constructor(public navCtrl: NavController, private DataService: DataService, public modalCtrl: ModalController) {

  }  

  public openModal(){ 
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage', data); 
    modalPage.present(); 
  }

  ionViewWillEnter() {
    console.log('loadedAgain homePage');
    this.showAllNotf();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad homePage');
    this.populateData();
    this.showAllNotf();
  }

  populateData(){
    /**
     * can be use anywhere
     * SL_E = student life event
     * T_LV = transport latevan
     */
    var a= {title: "Student Life", body: "new event on bla bla bla", type: "SL_E", date: "20th Sep 2018"};
    var b= {title: "Transport", body: "van will leave late", type: "T_LV", date: "20th Sep 2018"};

    this.DataService.addHomeScreenNotf(a);   
    this.DataService.addHomeScreenNotf(b);    
  }

  showAllNotf(){
    this.homeScreenNotf = this.DataService.getAllHomeScreenNotf();
  }

}
