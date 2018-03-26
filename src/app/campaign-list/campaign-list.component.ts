import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from './../campaign.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  constructor(private campaignService: CampaignService, private toastrService: ToastrService,
    private activateRoute: ActivatedRoute, private router: Router) { }

  campaignList = [];

  ngOnInit() {
    this.getCampaignList();
  }

  getCampaignList = function () {
    this.campaignService.getCampaignList(1).subscribe(
      response => this.campaignList = response.campaigns,
      error => {
        this.toastrService.error('Hubo un problema obteniendo las campañas. Intente mas tarde', 'Atención!');
      }
    );
  };
}
