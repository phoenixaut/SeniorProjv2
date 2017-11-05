import { CalculatePage } from './../calculate/calculate';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmical',
  templateUrl: 'bmical.html',
})
export class BmicalPage {
public weights;
public heights;
public bmi;
public activity;
public gender;
public myDate;
public showPic;
public BMIPic;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weights = navParams.get("weights");
    this.heights = navParams.get("heights");
    this.bmi = navParams.get("bmi");
    this.activity = navParams.get("activities");
    this.gender = navParams.get("gender");
    this.myDate = navParams.get("birthDate");
    this.showBMI();
    console.log(this.bmi);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmicalPage');
  }
  public showBMI() {
    if(this.bmi < 18.5){
      this.showPic = "../assets/background/547.png";
    }else if(this.bmi >= 18.5 && this.bmi <= 24.9){
      this.showPic = "../assets/background/78854.png";
    }else if(this.bmi >= 25 && this.bmi <= 29.9){
      this.showPic ="../assets/background/74561.png";
    }else if(this.bmi >= 30 && this.bmi <= 34.9){
      this.showPic ="../assets/background/15648.png";
    }else if(this.bmi >= 35 && this.bmi <= 39.9){
      this.showPic ="../assets/background/6215.png";
    }else if(this.bmi >= 40){
      this.showPic ="../assets/background/15648.png";
    }

  }
  
  public goToCal() {
    this.navCtrl.push(CalculatePage, {
        weights: this.weights,
        heights: this.heights,
        activities: this.activity,
        bmi: this.bmi,
        gender: this.gender,
        birthDate: this.myDate
      })
  }
}
