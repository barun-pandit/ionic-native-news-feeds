import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpService} from '../../providers/http-service';
import { NewsDetails } from '../news-details/news-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   providers: [HttpService]
})
export class HomePage {
	public news: any;
	public data: any;
	public categories: any;
	constructor(public navCtrl: NavController,public httpService: HttpService) {
		this.categories =  [
              "home",
              "opinion",
              "world",
              "national",
              "politics",
              "upshot",
              "nyregion",
              "business",
              "technology",
              "science",
              "health",
              "sports",
              "arts",
              "books",
              "movies",
              "theater",
              "sundayreview",
              "fashion",
              "tmagazine",
              "food",
              "travel",
              "magazine",
              "realestate",
              "automobiles",
              "obituaries",
              "insider"
            ];
		this.data = {
			catgy :this.categories[0]
		};	
	}
	
	ngOnInit() {
		this.httpService.getData('http://api.nytimes.com/svc/topstories/v2/'+this.data.catgy+'.json?api-key=c6ba8d7bbc4a4709b75a4c9637610560').subscribe(
			response => {console.log(response);this.news = response.results;}
		);
	}
	
	getNewView(){
		this.httpService.getData('http://api.nytimes.com/svc/topstories/v2/'+this.data.catgy+'.json?api-key=c6ba8d7bbc4a4709b75a4c9637610560').subscribe(
			response => {this.news = response.results;}
		);
	}
	
	view(feed){
		this.navCtrl.push(NewsDetails,{
			feed:feed
		});
	}
}
