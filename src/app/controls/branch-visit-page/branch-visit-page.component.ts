import { Component, OnInit } from '@angular/core';
import { COMPANY_HOME, CONTACTS } from 'src/app/bu-services/important-addresses';

@Component({
  selector: 'app-branch-visit-page',
  templateUrl: './branch-visit-page.component.html',
  styleUrls: ['./branch-visit-page.component.scss']
})
export class BranchVisitPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public close(): void {
    window.location.href = COMPANY_HOME;
  }

  public contacts(): void {
    window.open(CONTACTS, '_blank');
  }
}
