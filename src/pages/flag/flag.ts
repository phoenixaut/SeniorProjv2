import { FlagSettingPage } from './../flag-setting/flag-setting';
import { MainPage } from './../main/main';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FlagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flag',
  templateUrl: 'flag.html',
})

export class FlagPage {
  public tdee = 0.00;
  public bmr = 0.00;
  public NofRice = 0.00;
  public NofVegies = 0.00;
  public NofFruits = 0.00;
  public NofMeats = 0.00;
  public NofRice2 = 0.00;
  public NofVegies2 = 0.00;
  public NofFruits2 = 0.00;
  public NofMeats2 = 0.00;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.bmr = navParams.get("bmr2");
    this.tdee = navParams.get("tdee2");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlagPage');
    console.log(this.bmr + " " + this.tdee);
    this.calculateRice();
    this.calculateFruits();
    this.calculateMeat();
    this.calculateVegies();
    console.log("MEAT: " + this.NofMeats + " Rice: " + this.NofRice + " Fruits: " + this.NofFruits + " Vegies: " + this.NofVegies);
    
    
  }
calculateRice(){
  this.NofRice = Math.round(this.tdee * 0.005*2)/2;
  // this.NofRice2 = Math.round(this.tdee * 0.005*2)/2;

  // this.NofRice = (this.NofRice + this.NofRice2)/2;
  // console.log(this.NofRice);
}
calculateVegies(){
  this.NofVegies = Math.round(this.tdee * 0.0025*2)/2;
  // this.NofVegies2 = Math.round(this.tdee * 0.0025*2)/2;

  // this.NofVegies = (this.NofVegies + this.NofVegies2)/2;
}
calculateFruits(){
  this.NofFruits = Math.round(this.tdee * 0.0025*2)/2;
  this.NofFruits = this.NofFruits - 1;
  // this.NofFruits2 = Math.round(this.tdee * 0.0025*2)/2;
  // this.NofFruits2 = this.NofFruits2 - 1;

  // this.NofFruits = (this.NofFruits + this.NofFruits2)/2;
}
calculateMeat(){
  this.NofMeats = Math.round(this.tdee * 0.0075*2)/2;
  this.NofMeats = this.NofMeats - 6;
  // this.NofMeats2 = Math.round(this.tdee * 0.0075*2)/2;
  // this.NofMeats2 = this.NofMeats2 - 6;

  // this.NofMeats = (this.NofMeats + this.NofMeats2)/2;
} 

showAlert() {
  let alert = this.alertCtrl.create({
    title: '',
    subTitle: 'คุณจะกำหนดธงของคุณค่าเริ่มใช่หริอไม่',
     buttons: [
        {
          text: 'ไม่ใช่',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ใช่',
          handler: data => {
            this.navCtrl.push(MainPage);
          }
        }
      ]
    });
  alert.present();
}

goToFlagSetting(){
  this.navCtrl.push(FlagSettingPage,{
    NofRice: this.NofRice,
    NofVegies: this.NofVegies,
    NofFruits: this.NofFruits,
    NofMeats: this.NofMeats,
    tdee: this.tdee,
    bmr: this.bmr
  });
}
}
