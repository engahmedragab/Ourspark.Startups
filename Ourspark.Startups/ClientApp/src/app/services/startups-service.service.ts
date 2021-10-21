import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../configuration/configuration.service';
import { StartupDetails } from '../models/StartupDetails';
import { Startup } from '../models/Startup';
import { Response, ResponseList, ResponsePaged } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService {

  constructor(private httpService: HttpClient, private config: ConfigurationService) { 
  
  }

  public GetPagedStartups() : Observable<ResponsePaged<Startup>>{
    return this.httpService.get<ResponsePaged<Startup>>(this.config.getConfig('apiUrl') + '/api/Project/GetMyInitiativeCount');
  }

  public GetStartups() : Observable<ResponseList<Startup>>{
    return this.httpService.get<ResponseList<Startup>>(this.config.getConfig('apiUrl') + '/api/Project/GetMyInitiativeCount');
  }

  public GetStartupDetails() : Observable<Response<StartupDetails>> {
    return this.httpService.get<Response<StartupDetails>>(this.config.getConfig('apiUrl') + '/api/Project/GetMyInitiativeCount');
  }
}
