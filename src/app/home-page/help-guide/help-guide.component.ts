import { Component } from '@angular/core';

@Component({
  selector: 'app-help-guide',
  imports: [],
  templateUrl: './help-guide.component.html',
  styleUrl: './help-guide.component.css',
})
export class HelpGuideComponent {

  currentStep = 1;

  setStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

}
