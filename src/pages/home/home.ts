import { BmicalPage } from './../bmical/bmical';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
age = 23;
weight = 85;
height = 168;
activity = 1;
public bmi;
public bmr;
public myDate;
public gender;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.calculateBMI();
    this.calculateBMR();
  }
  public getDate(){
    console.log(this.myDate.toString());
    
  }

  public getGender(){
    // console.log(this.gender);
    
  }
public getAge($event){
  // console.log(this.age);
}

public getWeight($event){
  console.log(this.weight);
  this.calculateBMI();
  this.calculateBMR();
}


public getHeight($event){
  console.log(this.height);
  this.calculateBMI();
  this.calculateBMR();
}
calculateBMI(){
this.bmi = this.weight/(Math.pow(this.height/100,2));
this.bmi = parseFloat(this.bmi).toFixed(2);
}

calculateBMR(){

this.bmr = parseFloat(this.bmr).toFixed(2);
}
goToCal() {
  this.navCtrl.push(BmicalPage, {
      ages: this.age,
      weights: this.weight,
      heights: this.height,
      activities: this.activity,
      bmi: this.bmi,
      bmr: this.bmr,
      gender: this.gender,
      birthDate: this.myDate
    });
}
}
