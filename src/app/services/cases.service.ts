// src/app/services/cases.service.ts
import { Injectable } from '@angular/core';

// src/app/models/case.model.ts
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


@Injectable({
  providedIn: 'root'
})
export class CasesService {
  private cases: Case[] = [
    {
      case_id: 1,
      content: 'Case Content 1',
      documentUrl: 'url-to-document-1',
      status: CaseStatus.Pending
    },
    {
      case_id: 2,
      content: 'Ana skrana',
      documentUrl: 'sir tn3ss a 3chiri',
      status: CaseStatus.Pending
    },
    // ... more mock cases
  ];

  constructor() { }

  getCases(): Case[] {
    return this.cases;
  }
  updateCaseStatus(caseId: number, newStatus: CaseStatus): void {
    let caseToUpdate = this.cases.find(c => c.case_id === caseId);
    if (caseToUpdate) {
      caseToUpdate.status = newStatus;
    }
    // Ideally, also update this on the backend
  }
  
  // ... other methods as needed
}
