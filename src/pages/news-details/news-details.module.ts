import { NgModule } from '@angular/core';
import { IonicModule,IonicPageModule } from 'ionic-angular';
import { NewsDetails } from './news-details';

@NgModule({
  declarations: [
    NewsDetails,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetails),
  ],
  exports: [
    NewsDetails
  ]
})
export class NewsDetailsModule {}
