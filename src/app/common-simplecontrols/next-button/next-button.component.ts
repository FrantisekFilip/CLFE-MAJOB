import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent implements OnInit {
  @Input()
  public redirectTo: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirect(): void {
    this.router.navigate([this.redirectTo]);
  }
}
