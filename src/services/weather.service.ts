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
  searchCityUrl:string;
  constructor(public http: Http) {
    console.log('service Provider...');
    this.apiKey = '0019aa85e4c4536a';
    //see ionic.config.json for proxies config
    this.conditionsUrl = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q/';
    this.searchCityUrl = 'http://localhost:8100/search/aq?query=';
  }
  getWeather(cityZmw:string){
    return this.http.get(this.conditionsUrl+'/zmw:'+cityZmw+'.json').map(res => res.json());
  }
  searchCities(query:string){
    return this.http.get(this.searchCityUrl+query).map(res => res.json());
  }

}
