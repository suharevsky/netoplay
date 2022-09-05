import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `<ion-icon name="star" *ngFor="let star of [].constructor(rating)"></ion-icon>`,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  @Input() rating: number;

  constructor() { }
}
