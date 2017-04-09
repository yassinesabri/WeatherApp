/**
 * Created by sabri on 4/9/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(public http: Http) {
    console.log('Hello Myservice Provider');
  }

}
