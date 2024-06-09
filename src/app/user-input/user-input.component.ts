import { Component, EventEmitter, Output } from '@angular/core';
import { IInvestment } from './user-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  data: IInvestment = {
    initialInvestment:  0,
    annualInvestment:  0,
    expectedReturn:  0,
    duration:  0,
  }

  constructor(private readonly investmentService: InvestmentService) {}
    
  resetForm() {
    this.data = {
      initialInvestment:  0,
      annualInvestment:  0,
      expectedReturn:  0,
      duration:  0,
    }
  }

  onSubmit() {
    this.investmentService.setInvestmentResults(this.data);
    this.resetForm();
  }
}
