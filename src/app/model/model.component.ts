import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  resultText: string = '';

  constructor() {}

  onSubmit() {
    this.resultText = 'Analyzing data...';

    setTimeout(() => {
      const diseases = [
        'Cancer', 'Anémie', 'Leucémie', 'Thrombocytopénie', 'Hémophilie',
        'Lymphome', 'Myélome', 'Policythémie', 'Sepsis', 'Malaria',
        // Ajoutez d'autres maladies selon vos besoins
      ];

      // Création d'une liste de résultats
      let results = diseases.map(disease => 
        `Result : ${disease}\nAccuracy : ${this.randomAccuracy()}%`
      );

      // Ajout de 50 cas de "aucune maladie"
      for (let i = 0; i < 20; i++) {
        results.push(`Result : Aucune Maladie\nAccuracy : ${this.randomAccuracy()}%`);
      }

      // Sélection aléatoire d'un résultat
      const randomResult = results[Math.floor(Math.random() * results.length)];

      this.resultText = randomResult;
    }, 2000);
  }

  private randomAccuracy(): number {
    return Math.floor(Math.random() * 31) + 66; // Génère un nombre entre 66 et 96
  }
}
