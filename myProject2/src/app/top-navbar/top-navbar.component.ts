import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countDownDate = new Date("november 8, 2021 14:37:25").getTime();
  days:any;
  hours:any;
  minutes:any;
  seconds:any;
  
  x = setInterval(()=>{
    var now = new  Date().getTime();
    var distance = this.countDownDate - now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
    // this.demo = days + " : " + hours + " : " + minutes + " : " + seconds;
    this.days=days;
    this.hours=hours;
    this.minutes=minutes;
    this.seconds=seconds;
  })
}
