import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'SSA';
  dateFormat: string = 'EEEE, MMMM dd, yyyy';
  currentDay: number = 0;
  stimulatedDay: Date = new Date();
  registerForm: unknown;


  constructor() { }

  ngOnInit(): void {

  }

  onNextDay(): void {
    this.currentDay++;

    this.stimulatedDay = new Date(this.stimulatedDay);
    this.stimulatedDay.setDate(this.stimulatedDay.getDate() + 1);
  }
}
