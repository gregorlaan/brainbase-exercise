import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

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

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

  onNextDay(): void {
    this.currentDay++;

    this.stimulatedDay = new Date(this.stimulatedDay);
    this.stimulatedDay.setDate(this.stimulatedDay.getDate() + 1);

    this.stockService.triggerChange();
  }
}
