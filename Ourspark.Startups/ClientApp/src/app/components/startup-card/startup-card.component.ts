import { Component, Input, OnInit } from '@angular/core';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'ourspark-startup-card',
  templateUrl: './startup-card.component.html',
  styleUrls: ['./startup-card.component.css']
})
export class StartupCardComponent implements OnInit {

  @Input() Startup : Startup;
  
  constructor() { }

  ngOnInit() {
    
  }

}
