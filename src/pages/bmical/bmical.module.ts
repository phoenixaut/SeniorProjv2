import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmicalPage } from './bmical';

@NgModule({
  declarations: [
    BmicalPage,
  ],
  imports: [
    IonicPageModule.forChild(BmicalPage),
  ],
})
export class BmicalPageModule {}
