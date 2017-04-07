import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {

	constructor(public http: Http) {
		this.http = http;
	}
  
	getData(url){
		return this.http.get(url)
			.map(res => res.json()) .catch(this.handleError);
	}
	
    handleError(error) {
        return Observable.throw(error.json().error || 'Server error');
    }
	
}
