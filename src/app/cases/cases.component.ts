// src/app/cases/cases.component.ts
import { Component, OnInit } from '@angular/core';
import { CasesService } from '../cases.service';

enum CaseStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Resolved = "Resolved"
}

interface Case {
  case_id: number;
  content: string;
  documentUrl: string;
  status: CaseStatus;
}

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: Case[] = [];

  constructor(private casesService: CasesService) { }

  ngOnInit(): void {
    this.cases = this.casesService.getCases();
  }

  updateCaseStatus(caseItem: Case): void {
    // Update the status of the case
    this.casesService.updateCaseStatus(caseItem.case_id, caseItem.status);
    // In a real-world application, you should also update this in the backend
  }
}
