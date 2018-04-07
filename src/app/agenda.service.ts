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

export class AgendaService {



  private getAgendaReceiversURL = environment.servicesUrl.getAgendaReceivers;

  constructor(private httpClient: HttpClient) { }

  getAgendaReceivers() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.get(this.getAgendaReceiversURL, httpOptions)
      .map(response => response)
      .catch(error => Observable.throw(error));
  }
}
