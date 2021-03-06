import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from './../../campaign.service';
import { RecipientsListComponent } from '../../recipients-list/recipients-list.component';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {

  constructor(private campaignService: CampaignService, private toastrService: ToastrService,
    private activateRoute: ActivatedRoute, private router: Router) { }
  public loadingDetails = false;
  campaignDetail = { id: '', description: '', text: '', activation_date: '', init_time: '', destinations: null };

  ngOnInit() {
    this.getCampaignDetail();
  }

  getCampaignDetail() {
    this.loadingDetails = true;
    this.activateRoute.params.subscribe((params: Params) => {
      this.campaignService.getCampaignDetail(params['user_id'], params['campaign_id']).subscribe(
        result => {
          this.campaignDetail = result.campaigns[0];
          this.loadingDetails = false;
        },
        error => {
          this.toastrService.error('Hubo un problema obteniendo el detalle de la campaña. Intente mas tarde', 'Atención!');
          this.loadingDetails = false;
        }
      );
    });
  }
}
