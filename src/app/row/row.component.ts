import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  public stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
        .subscribe(stocks => this.stocks = stocks);
  }
}
