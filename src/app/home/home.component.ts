import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService, private campaignService: CampaignService) { }
  model = {
    campaingName: '',
    msgToSend: ''
  };
  ngOnInit() {
  }

  createCampaign = function () {
    this.campaignService.createCampaign(this.model).subscribe(
      response => {
        console.log(response);
        this.toastr.success('Los mensajes han sido enviados correctamente', 'Exito!');
        this.model.campaingName = '';
        this.model.msgToSend = '';
      });
  };
}
