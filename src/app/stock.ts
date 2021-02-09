export interface Stock {
  symbol: string;
  name: string;
  price: number;
  current?: number;
  change?: number;
  changePercentage?: number;
}
