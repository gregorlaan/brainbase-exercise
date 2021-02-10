import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { StockService } from './stock.service';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: stockProviderFactory,
      deps: [StockService],
      multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function stockProviderFactory(provider: StockService) {
  return () => provider.getStocksInit();
}
