import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';


@Injectable()

export class CampaignService {

  private createCampaignURL = environment.servicesUrl.createCampaign;
  private getCampaignListURL = environment.servicesUrl.getCampaignList;
  private getCampaignDetailURL = environment.servicesUrl.getCampaignDetail;
  campaignDetail = '';
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

  getCampaignList(user_id) {
    let params = new HttpParams();
    if (environment.useJsons) {
      this.getCampaignListURL = this.getCampaignListURL.replace('{0}', user_id);
    } else {
      this.getCampaignListURL = this.getCampaignListURL;
      params = params.set('user_id', user_id);
    }

    return this.httpClient.get(this.getCampaignListURL, { params: params })
      .map(response => response)
      .catch(error => Observable.throw(error));
  }

  getCampaignDetail(user_id, campaign_id) {

    let params = new HttpParams();
    if (environment.useJsons) {
      this.campaignDetail = this.getCampaignDetailURL.replace('{0}', user_id).replace('{1}', campaign_id);
    } else {
      this.campaignDetail = this.getCampaignDetailURL;
      params = params.set('user_id', user_id).set('campaign_id', campaign_id);
    }
    return this.httpClient.get(this.campaignDetail, { params: params })
      .map(response => response)
      .catch(error => Observable.throw(error));
  }
}
