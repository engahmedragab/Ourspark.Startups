import { Component, OnInit } from '@angular/core';
import { ControlMode } from '../../enum/control-mode';
import { StartupDetails } from '../models/StartupDetails';
import { StartupsServiceService } from '../services/startups-service.service';
import { Response } from '../models/Response';
import { ResponseStatus } from 'src/enum/Response';

@Component({
  selector: 'app-startup-home',
  templateUrl: './startup-home.component.html',
  styleUrls: ['./startup-home.component.css']
})
export class StartupHomeComponent implements OnInit {
  
  ControlMode : ControlMode;
  EnumControlMode = ControlMode;
  StartupDetails : StartupDetails;

  constructor(public startupsServiceService : StartupsServiceService) { }

  ngOnInit() {
    this.startupsServiceService.GetStartupDetails().subscribe( (response : Response<StartupDetails>) => {
      if (response.status == ResponseStatus.Success) {
        this.StartupDetails = response.data;
        this.ControlMode == ControlMode.Success;
      } else {
        this.ControlMode == ControlMode.Error;
      }
    });
  }

}
