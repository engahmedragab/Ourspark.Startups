import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from 'src/enum/Response';
import { Startup } from '../../models/Startup';
import { StartupsServiceService } from '../../services/startups-service.service';
import { ControlMode } from '../../../enum/control-mode';

@Component({
  selector: 'ourspark-startups-list',
  templateUrl: './startups-list.component.html',
  styleUrls: ['./startups-list.component.css']
})
export class StartupsListComponent implements OnInit {
  
  ControlMode : ControlMode;
  EnumControlMode = ControlMode;
  Startups : Startup[];
  
  constructor(public startupsServiceService : StartupsServiceService) { }

  ngOnInit() {
    this.startupsServiceService.GetStartups().subscribe( response => {
      if (response.status == ResponseStatus.Success) {
        this.Startups = response.data;
        this.ControlMode = ControlMode.Load;
      } else {
        this.ControlMode = ControlMode.Error;
      }
    });
  }

}
