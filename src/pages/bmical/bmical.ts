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
public fatty = "คุณผอมเกินไป";
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
      this.fatty = "คุณผอมเกินไป";
      switch(this.gender) { 
        case 1: { 
           //statements;
           this.showPic = "../assets/background/78854.png";
           break; 
        } 
        case 2: { 
           //statements;
           this.showPic = "../assets/background/84314.png";
           break; 
        } 
     } 
      
    }else if(this.bmi >= 18.5 && this.bmi <= 24.9){
      this.fatty = "คุณสมส่วน";
      switch(this.gender) { 
        case 1: { 
           //statements;
           this.showPic = "../assets/background/547.png";
           break; 
        } 
        case 2: { 
           //statements;
           this.showPic = "../assets/background/32156.png";
           break; 
        }
      } 
    }else if(this.bmi >= 25 && this.bmi <= 29.9){
      this.fatty = "คุณน้ำหนักเกิน";
      switch(this.gender) { 
        case 1: { 
           //statements;
           this.showPic = "../assets/background/1514.png";
           break; 
        } 
        case 2: { 
           //statements;
           this.showPic = "../assets/background/74561.png";
           break; 
        }
      } 
    }else if(this.bmi >= 30 && this.bmi <= 34.9){
      this.fatty = "คุณอ้วน ระดับ 1";
      switch(this.gender) { 
        case 1: { 
           //statements;
           this.showPic = "../assets/background/15648.png";
           break; 
        } 
        case 2: { 
           //statements;
           this.showPic = "../assets/background/84314.png";
           break; 
        }
      } 
    }else if(this.bmi >= 35 && this.bmi <= 39.9){
      this.fatty = "คุณอ้วน ระดับ 2";
      switch(this.gender) { 
        case 1: { 
           //statements;
           this.showPic = "../assets/background/15648.png";
           break; 
        } 
        case 2: { 
           //statements;
           this.showPic = "../assets/background/84314.png";
           break; 
        }
      }
    }else if(this.bmi >= 40){
      this.fatty = "คุณอ้วน ระดับ 3";
      switch(this.gender) { 
        case 1: { 
           //statements;
           this.showPic = "../assets/background/15648.png";
           break; 
        } 
        case 2: { 
           //statements;
           this.showPic = "../assets/background/84314.png";
           break; 
        }
      }
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
