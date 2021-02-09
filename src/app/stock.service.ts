import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stocks: Stock[] = [
    {
      "symbol": "AAPL",
      "name": "Apple",
      "price": 1000
    },
    {
      "symbol": "MSFT",
      "name": "Microsoft",
      "price": 250
    },
    {
      "symbol": "WFC",
      "name": "Wells Fargo & Company Common Stock",
      "price": 28
    },
    {
      "symbol": "UBER",
      "name": "Uber",
      "price": 41
    },
    {
      "symbol": "LYFT",
      "name": "Lyft",
      "price": 57
    }
  ];

  constructor() {}

  getStocks(): Observable<Stock[]> {
    return of(this.stocks);
  }

  triggerChange(): void {
    let trend: Array<(key: number) => number> = [
      function(price: number): number { return price * 1.1 },
      function(price: number): number { return price / 1.1 },
    ];

    this.stocks.forEach(stock => {
      let price: number = stock.current === undefined ? stock.price : stock.current;
      let current: number = trend[Math.floor(Math.random() * 2)](price);
      let change: number = Math.round((current - stock.price) * 100) / 100;
      let changePercentage: number = (current - stock.price) / stock.price;

      stock.current = current;
      stock.change = change;
      stock.changePercentage = changePercentage;
    });
  }
}
