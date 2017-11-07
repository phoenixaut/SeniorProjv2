import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signupData = {
    email: '',
    password: '',
    passwordRetyped: ''
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private af: AngularFire) {
      this.signupData.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  showAlert(titles,text) {
  let alert = this.alertCtrl.create({
    title: titles,
    subTitle: text,
    buttons: ['OK']
  });
  alert.present();
}
signup() {
 if(this.signupData.password !== this.signupData.passwordRetyped) {
   let alert = this.alertCtrl.create({
     title: 'Error',
     message: 'Your password and your re-entered password does not match each other.',
buttons: ['OK']
   });
   alert.present();
   return;
 }

 this.af.auth.createUser({
   email: this.signupData.email,
   password: this.signupData.password
  })
 .then(auth => {
   // Could do something with the Auth-Response
   this.af.database.list(auth.uid+'/activities').push({  today:{
     "morning":{
       "0":"0"
     },
     "noon":{
       "0":"0"
     },
     "dinner":{
       "0":"0"
     }
   }});
   this.af.database.list(auth.uid+'/favorite').push({  place: "Bann Sritang", color: "Green"});
   this.af.database.list(auth.uid+'/feedback').push({ detail: "Nothing", email: ""});
   this.dismiss();
 })
 .catch(err => {
   // Handle error
   let alert = this.alertCtrl.create({
     title: 'Error',
     message: err.message,
     buttons: ['OK']
   });
   alert.present();
 });
}
}
