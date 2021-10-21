import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {


  //#region Private Properties
  private _config: Object = null;
  //#endregion

  //#region Constructor
  constructor() { }
  //#endregion

  //#region Methods
  get configurations(): any {
    return {
      apiUrl: this.getConfig("apiUrl"),
      pageSize: this.getConfig("pageSize"),
      textboxMaxLength: this.getConfig("textboxMaxLength"),
      textareaMaxLength: this.getConfig("textareaMaxLength"),
      kpiImportMaxAllowedKpis: this.getConfig("kpiImportMaxAllowedKpis"),
      kpiImportTemplatePath: this.getConfig("kpiImportTemplatePath"),
      ppmConfig: this.getConfig("ppmConfig"),
      dateFormat: this.getConfig("dateFormat"),
      yearRange: this.getConfig("yearRange"),
      textboxForLevelMaxLength: this.getConfig("textboxForLevelMaxLength"),
      codeMaxLength: this.getConfig("codeMaxLength"),
      codeMinLength: this.getConfig("codeMinLength"),
    }
  }
  
  getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
  }
  
  public getConfig(key: any) {
    return this._config[key];
  }

  public load() {
    return new Promise((resolve, reject) => {
      var xmlhttp = new XMLHttpRequest(),
        method = 'GET',
        url = 'assets/settings.json';

      xmlhttp.open(method, url, true);
      xmlhttp.setRequestHeader("Content-type", "application/json");

      xmlhttp.onreadystatechange = () => {

        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status === 200) {

            this._config = JSON.parse(xmlhttp.responseText)
            resolve(true);

          }
          else {
            this._config = [];
            resolve(true);

          }
        }
      };
      xmlhttp.send();
    });

  }
}
