import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../models/Link';

@Component({
  selector: 'ourspark-links-card',
  templateUrl: './links-card.component.html',
  styleUrls: ['./links-card.component.css']
})
export class LinksCardComponent implements OnInit {

  @Input() Links : Link[];
  
  constructor() { }

  ngOnInit() {
  }

}
