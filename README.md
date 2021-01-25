# StockApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## The challange

- 5 publicly traded companies

- Init stock values from Rest API

- Stock values will change randomly every day
  - Days are counted from day 1
  - User can forward time with a click of a button

- Each item in the list must display:
  - A full name of the company (for example: Apple)
  - The ticker symbol (for example: AAPL)
  - Initial value (for example: 1 000 $)
  - The all time change in value to-date (for example: 200$, 20%)

- User must be shown:
  - The current day number (for example: Day 1)
  - The stimulated date (for example: Monday, June 15, 2015)

- Day 1 corresponds to the current date on the user's computer

> Thus Day 3 would be “Monday, June 18, 2015”, if the current date on the PC would be June 15, 2015. 

Note: The day one would be June 16, If the current date on the PC is June 15.

- The user must be able to:
  - Forward time globally by 1 day with a click of a button
  - Each time a day passes, value of each company must change +/-10%
  - The change must be random and each companies value must be generated seprately
