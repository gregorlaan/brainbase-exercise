import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
/* Get data after the API has gone offline */
/*
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
 */

  public stocks: Stock[] = [];
  private stocksUrl: string = 'https://staging-api.brainbase.com/stocks.php';

  constructor(
    private http: HttpClient
  ) { }

  async getStocksInit(): Promise<void> {
    this.stocks = await this.http.get<Stock[]>(this.stocksUrl).toPromise();
  }

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
