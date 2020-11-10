import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myDate: any;
  minDate: any;
  maxDate: any;
  datesArray = [];

  constructor(private navController:NavController) {}

  ngOnInit() {
    this.myDate = new Date();
    const minDate = new Date();

  }

  setDate() {
    console.log(this.minDate);
    //var dateParts = this.minDate.replace('/','-');
    //var dateParts = dateParts.split("-");
    var dateParts = this.minDate.split("T");
    //var date = dateParts[2] + '/' +  dateParts[1] + '/' + dateParts[0];
    //var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    console.log(dateParts[0]);
  }

}
