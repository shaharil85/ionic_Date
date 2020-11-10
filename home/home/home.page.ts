import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {CalendarModal, CalendarModalOptions, CalendarResult} from "ion2-calendar";

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

  constructor(public modalController:ModalController,
              private navController:NavController) {}

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

  async openCalendar() {
    let fromDate: any = new Date("2020/01/01");					//default starting date for calendar
    //let toDate: any = new Date(new Date().setDate(new Date().getDate() - 1))
    //toDate = new Date(toDate);

    const options: CalendarModalOptions = {
      //disableWeeks: [0, 6]
      title: 'BASIC',
      color: 'danger',
      from: fromDate,
      //to: toDate,
      defaultScrollTo: new Date()
    };

    const myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options }
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date.string);
  }

}
