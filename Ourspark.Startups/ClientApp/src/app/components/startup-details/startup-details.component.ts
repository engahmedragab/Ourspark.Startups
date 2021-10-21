import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from 'src/enum/Response';
import { StartupDetails } from '../../models/StartupDetails';
import { StartupsServiceService } from '../../services/startups-service.service';

@Component({
  selector: 'ourspark-startup-details',
  templateUrl: './startup-details.component.html',
  styleUrls: ['./startup-details.component.css']
})
export class StartupDetailsComponent implements OnInit {

  StartupDetails : StartupDetails;
  constructor(public startupsServiceService : StartupsServiceService) 
  { }

  ngOnInit() {
    this.startupsServiceService.GetStartupDetails().subscribe(startupDetails => {
      if (startupDetails.status == ResponseStatus.Success) {
        this.StartupDetails = startupDetails.data;
      } else {

      }
    });
  }

}
