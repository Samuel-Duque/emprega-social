import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private currentStep = new BehaviorSubject<number>(1);

  getCurrentStep() {
    return this.currentStep.asObservable();
  }

  nextStep() {
    this.currentStep.next(this.currentStep.value + 1);
  }
  backStep() {
    this.currentStep.next(this.currentStep.value - 1);
  }
}
