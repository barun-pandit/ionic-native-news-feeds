import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetails {
	news: any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.news = navParams.get('feed');
		console.log(this.news);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetails');
  }

}
