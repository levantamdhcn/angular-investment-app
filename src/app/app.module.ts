import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, UserInputModule, InvestmentResultsComponent],
})
export class AppModule {}
