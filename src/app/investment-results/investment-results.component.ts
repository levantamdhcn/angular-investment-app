import { Component, computed, input } from '@angular/core';
import { IInvestmentResult } from './investment-results.model';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private readonly investmentService: InvestmentService) {
  }

  investmentResults = computed(() => this.investmentService.results());
}
