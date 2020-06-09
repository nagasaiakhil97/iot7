import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from 'angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	temp:any;
	humidity: any;
	loading: boolean;
	
	constructor(public navCtrl: NavController,public http: Http){
	}
	dht22_read(){
	console.log("In dht_read function");
	this.loading = true;
	this.http.get('https://node-red-xsbjg.eu-gb.mybluemix.net/hello-data')
		.map(res => res.json()).subscribe(data => {
			console.log(data);
			this.temp=(<any>)data).temp;
		this.humidity = (<any>data).humidity;
		this.loading = false;
		console.log(this.temp,this.humidity);
		});
	}
}
