import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ourspark-rate-indicator',
  templateUrl: './rate-indicator.component.html',
  styleUrls: ['./rate-indicator.component.css']
})
export class RateIndicatorComponent implements OnInit {

  @Input() Rate : number = -1; 

  constructor() { }

  ngOnInit() {
  }

}
