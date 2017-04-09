/**
 * Created by sabri on 4/9/2017.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers : [WeatherService],
})
export class WeatherPage {

  constructor(public navCtrl: NavController,public weatherService:WeatherService) {

  }

}
