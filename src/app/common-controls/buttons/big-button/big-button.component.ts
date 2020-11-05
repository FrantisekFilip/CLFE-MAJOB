import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent implements OnInit {
  @Input()
  public imageUrl: string;

  @Input()
  public label: string;

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
