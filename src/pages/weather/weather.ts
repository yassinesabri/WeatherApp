/**
 * Created by sabri on 4/9/2017.
 */
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers : [WeatherService],
})
export class WeatherPage implements OnInit{
  city:string;
  state:string;
  weather:any;
  constructor(public navCtrl: NavController,public weatherService:WeatherService) {
    this.city='BOSTON';
    this.state='MA';
  }
  ngOnInit(){
    this.weatherService.getWeather(this.city,this.state).subscribe(data => {
      //console.log(data);
      this.weather = data.current_observation;
    });

  }
}
