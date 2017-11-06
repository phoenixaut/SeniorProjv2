import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlagSettingPage } from './flag-setting';

@NgModule({
  declarations: [
    FlagSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(FlagSettingPage),
  ],
})
export class FlagSettingPageModule {}
