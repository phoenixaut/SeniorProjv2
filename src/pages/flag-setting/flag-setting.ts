import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlagSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flag-setting',
  templateUrl: 'flag-setting.html',
})
export class FlagSettingPage {
  public NofRice = 0.00;
  public NofVegies = 0.00;
  public NofFruits = 0.00;
  public NofMeats = 0.00;
  public minRice = 0.00;
  public maxRice = 0.00;
  public minMeat = 0.00;
  public maxMeat = 0.00;
  public bmr;
  public tdee;
  public options;
  public options2;
  public i:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.NofRice = navParams.get("NofRice");
    this.NofVegies = navParams.get("NofVegies");
    this.NofFruits = navParams.get("NofFruits");
    this.NofMeats = navParams.get("NofMeats");
    this.bmr = this.navParams.get("bmr");
    this.tdee = this.navParams.get("tdee");
    this.calculateRice();
    this.calculateMeat();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlagSettingPage');
  }

  calculateRice(){
    this.minRice = Math.round(this.bmr * 0.005*2)/2;
    this.maxRice = this.NofRice;
    this.options =  [
      {
        "name" : this.minRice,
        "val"  : this.minRice
      }
    ];
    
    for(this.i = this.minRice + 0.5;  this.i<= this.maxRice; this.i = this.i + 0.5){
      this.options.push({
        "name" : this.i,
        "val"  : this.i
      });
    }
    
    console.log(this.options);
    
  }

  calculateMeat(){
    this.minMeat = Math.round(this.bmr * 0.0075*2)/2;
    this.minMeat = this.minMeat - 6;
    this.maxMeat = this.NofMeats;
    this.options2 =  [
      {
          "name": this.minMeat,
          "val" : this.minMeat
      }
    ];
    for(this.i = this.minMeat + 0.5;  this.i<= this.maxMeat; this.i = this.i + 0.5){
      this.options2.push({
        "name" : this.i,
        "val"  : this.i
      });
  }
  console.log(this.options2);
  
}

  // calculateNewMax(){
  //   this.maxRice = this.maxMeat = (this.NofRice * 240) + (this.NofMeats * 60) + 200;
  // }
}
