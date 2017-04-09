/**
 * Created by sabri on 4/9/2017.
 */
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers : [WeatherService],
})
export class WeatherPage implements OnInit{
  cityZmw:string;
  weather:any;
  searchStr:string;
  cities:any;
  constructor(public navCtrl: NavController,public weatherService:WeatherService,public storage: Storage) {

  }
  ngOnInit(){
    this.getDefaultCity();
    console.log('zmw : '+this.cityZmw);
    this.weatherService.getWeather(this.cityZmw).subscribe(data => {
      //console.log(data);
      this.weather = data.current_observation;
    });

  }
  searchQuery(){
    //console.log(this.searchStr);
    this.weatherService.searchCities(this.searchStr).subscribe(data => {
      //console.log(data);
      this.cities = data.RESULTS;
    });
  }
  citieSelected(city){
      this.cities = [];
      //console.log(city.name);
      this.weatherService.getWeather(city.zmw).subscribe(data => {
        //console.log(data);
        this.weather = data.current_observation;
      });
  }
  getDefaultCity(){
     this.cityZmw='10001.11.99999';
    /*this.storage.ready().then(() => {
      this.storage.get('defaultCity').then((val) => {
        console.log(val);
        if(val != undefined){
          this.cityZmw = JSON.parse(val).zmw;
        }
        else{
          this.cityZmw = '10001.11.99999';
        }
      });
    });*/
  }
}
