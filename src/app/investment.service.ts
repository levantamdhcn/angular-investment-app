import { Injectable, signal } from "@angular/core";
import { IInvestmentResult } from "./investment-results/investment-results.model";
import { IInvestment } from "./user-input/user-input.model";
import { calculateInvestmentResults } from "../utils/investment-results";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    results = signal<IInvestmentResult[]>([])

    getInvestmentResults() {
        return this.results();
    }

    calculateResults(data: IInvestment) {
        return calculateInvestmentResults(data);
    }

    setInvestmentResults(data: IInvestment) {
        this.results.set(this.calculateResults(data))
    }
}