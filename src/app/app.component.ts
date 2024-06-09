import { Component, signal } from '@angular/core';
import { IInvestment } from './user-input/user-input.model';
import { calculateInvestmentResults } from '../utils/investment-results';
import { IInvestmentResult } from './investment-results/investment-results.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
