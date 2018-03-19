import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';


@Injectable()

export class CampaignService {

  private createCampaignURL = environment.servicesUrl.createCampaign;

  constructor(private httpClient: HttpClient) { }

  createCampaign(model) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let params;
    if (environment.useJsons) {
      return Observable.of('');
    } else {
      const formattedDate = model.initDate.toISOString().slice(0, 10) + ' ' + model.initTime.toString().slice(16, 21);
      params = {
        'text': model.msgToSend,
        'description': model.campaingName,
        'activation_date': formattedDate
      };
    }
    return this.httpClient.post(this.createCampaignURL, params, httpOptions)
      .map(response => response)
      .catch(error => Observable.throw(error));

  }
}
