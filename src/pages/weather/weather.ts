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
  searchStr:string;
  cities:any;
  isSelected:boolean;
  constructor(public navCtrl: NavController,public weatherService:WeatherService) {
    this.city='BOSTON';
    this.state='MA';
    this.isSelected=false;
  }
  ngOnInit(){
    this.weatherService.getWeather(this.city,this.state).subscribe(data => {
      //console.log(data);
      this.weather = data.current_observation;
    });

  }
  searchQuery(){
    this.isSelected = true;
    //console.log(this.searchStr);
    this.weatherService.searchCities(this.searchStr).subscribe(data => {
      //console.log(data);
      this.cities = data.RESULTS;
    });
  }
  citieSelected(city){
      console.log(city.name);
      this.isSelected = false;
  }
}
