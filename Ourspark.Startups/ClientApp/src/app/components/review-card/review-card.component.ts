import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../models/Review';

@Component({
  selector: 'ourspark-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  @Input() Reviews : Review[];
  
  constructor() { }

  ngOnInit() {
  }

}
