/**
 * Created by sabri on 4/9/2017.
 */
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../services/weather.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers : [WeatherService]
})
export class SettingsPage implements OnInit{
  searchStr:string;
  cities:any;
  defaultCity:any;
  constructor(public navCtrl: NavController,public weatherService:WeatherService,public storage: Storage) {

  }
  ngOnInit(){
      this.getDefaultCity();
  }
  getDefaultCity(){
    this.storage.ready().then(() => {

      this.storage.get('defaultCity').then((val) => {
        //console.log(val);
        if(val != undefined){
          this.defaultCity = JSON.parse(val).name;
        }
        else{
          this.defaultCity = '';
        }

      });
    });

  }
  setDefaultCity(city:any){

    this.cities = [];
    this.storage.ready().then(() => {
      // set a key/value
      this.storage.set('defaultCity', JSON.stringify(city));
    });
    this.searchStr = city.name;
    this.defaultCity = city.name;
  }
  searchQuery(){
    this.weatherService.searchCities(this.searchStr).subscribe(data => {
      //console.log(data);
      this.cities = data.RESULTS;
    });
  }
  saveChanges(){

  }
}
