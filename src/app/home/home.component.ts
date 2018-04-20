import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from './../campaign.service';
import { AgendaService } from '../agenda.service';
import { SideNavMenuModule } from 'mat-sidenav-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService, private campaignService: CampaignService, private agendaService: AgendaService) { }
  model = {
    campaingName: '',
    msgToSend: '',
    initDate: '',
    initTime: '',
    destinationContacts: []
  };
  contacts = [];
  ngOnInit() {
    this.getReceivers();
  }

  getReceivers = function () {
    this.agendaService.getAgendaReceivers().subscribe(
      response => this.contacts = response.telephone_numbers,
      error => {
        this.toastr.error('Hubo un problema obteniendo los contactos de la agneda. Intente mas tarde', 'Atención!');
      }
    );
  };

  createCampaign = function () {
    this.campaignService.createCampaign(this.model).subscribe(
      response => {
        this.toastr.success('La campaña ha sido creada correctamente', 'Exito!');
        this.model.campaingName = '';
        this.model.msgToSend = '';
        this.model.initDate = '';
        this.model.initTime = '';
        this.destinationContact = [];
      },
      error => {
        this.toastr.error('En este momento no se puede crear la campaña. Intente mas tarde', 'Atención!');
      }
    );
  };
}
