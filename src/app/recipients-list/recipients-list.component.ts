import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-recipients-list',
  templateUrl: './recipients-list.component.html',
  styleUrls: ['./recipients-list.component.css']
})
export class RecipientsListComponent{


  @Input() data: any[];
  public filterQuery = '';
  public rowsOnPage = 5;
  public sortBy = 'first_name';
  public sortOrder = 'asc';

  constructor() { }

}
