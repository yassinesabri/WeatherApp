/**
 * Created by sabri on 4/9/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  apiKey:string;
  conditionsUrl:string;
  constructor(public http: Http) {
    this.apiKey = '0019aa85e4c4536a';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/';
    console.log('service Provider...');
  }
  getWeather(city:string,state:string){
    return this.http.get(this.conditionsUrl+state+'/'+city+'.json').map(res => res.json());
  }
}
