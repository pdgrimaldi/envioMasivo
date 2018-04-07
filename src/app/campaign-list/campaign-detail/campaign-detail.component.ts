import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from './../../campaign.service';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {

  constructor(private campaignService: CampaignService, private toastrService: ToastrService,
    private activateRoute: ActivatedRoute, private router: Router) { }

  campaignDetail = { id: '', description: '', text: '', activation_date: '', init_time: '' };

  ngOnInit() {
    this.getCampaignDetail();
  }

  getCampaignDetail() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.campaignService.getCampaignDetail(params['user_id'], params['campaign_id']).subscribe(
        result => {
          this.campaignDetail = result.campaign_detail;
          console.log(this.campaignDetail);
        },
        error => {
          this.toastrService.error('Hubo un problema obteniendoel detalle de la campaña. Intente mas tarde', 'Atención!');
        }
      );
    });
  }
}
