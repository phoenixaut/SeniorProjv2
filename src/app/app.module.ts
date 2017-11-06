import { FlagSettingPage } from './../pages/flag-setting/flag-setting';
import { BmicalPage } from './../pages/bmical/bmical';
import { RegisterPage } from './../pages/register/register';
import { FirstPage } from './../pages/first/first';
import { FlagPage } from './../pages/flag/flag';
import { PlanPage } from './../pages/plan/plan';
import { MygoalPage } from './../pages/mygoal/mygoal';
import { ActivityPage } from './../pages/activity/activity';
import { MainPage } from './../pages/main/main';
import { UserPage } from './../pages/user/user';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CalculatePage} from '../pages/calculate/calculate'


export const firebaseConfig = {
  apiKey: "AIzaSyDR2OwnJkV_ru8OCVqn2l_rlKN0I-Z63CY",
  authDomain: "seniorproj-320cd.firebaseapp.com",
  databaseURL: "https://seniorproj-320cd.firebaseio.com",
  projectId: "seniorproj-320cd",
  storageBucket: "seniorproj-320cd.appspot.com",
  messagingSenderId: "67521803709"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UserPage,
    MainPage,
    ActivityPage,
    MygoalPage,
    PlanPage,
    CalculatePage,
    FlagPage,
    FirstPage,
    RegisterPage,
    BmicalPage,
    FlagSettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UserPage,
    MainPage,
    ActivityPage,
    MygoalPage,
    PlanPage,
    CalculatePage,
    FlagPage,
    FirstPage,
    RegisterPage,
    BmicalPage,
    FlagSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
