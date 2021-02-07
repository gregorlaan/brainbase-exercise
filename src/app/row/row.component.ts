import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  getStocks(): void {
    this.stocks  = this.stockService.getStocks();
  }

  ngOnInit(): void {
    this.getStocks();
  }
}
