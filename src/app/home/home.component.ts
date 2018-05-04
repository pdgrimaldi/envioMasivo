import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from './../campaign.service';
import { AgendaService } from '../agenda.service';
import { SideNavMenuModule } from 'mat-sidenav-menu';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DestinationDialogComponent } from './destination-dialog/destination-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any;
  constructor(private toastr: ToastrService, private campaignService: CampaignService, private agendaService: AgendaService,
    private dialog: MatDialog) { }
  public creating = false;
  model = {
    campaingName: '',
    msgToSend: '',
    initDate: '',
    initTime: '',
    destinationContacts: []
  };
  contacts = [];

  getReceivers = function () {
    this.agendaService.getAgendaReceivers().subscribe(
      response => this.contacts = response.telephone_numbers,
      error => {
        this.toastr.error('Hubo un problema obteniendo los contactos de la agneda. Intente mas tarde', 'Atención!');
      }
    );
  };

  createCampaign = function () {
    this.creating = true;
    this.campaignService.createCampaign(this.model).subscribe(
      response => {
        this.toastr.success('La campaña ha sido creada correctamente', 'Exito!');
        this.model.campaingName = '';
        this.model.msgToSend = '';
        this.model.initDate = '';
        this.model.initTime = '';
        this.model.destinationContacts = [];
        this.creating = false;
      },
      error => {
        this.toastr.error('En este momento no se puede crear la campaña. Intente mas tarde', 'Atención!');
        this.creating = false;
      }
    );
  };
  
  resetDestinations = function (){
    this.model.destinationContacts = [];
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '450px';
    dialogConfig.width = '500px';
    dialogConfig.data = {
      title: 'Agregar Destinatario/s',
      destinationContacts: []
    };

    const dialogRef = this.dialog.open(DestinationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data.destinationContacts !== null){
        this.model.destinationContacts = data.destinationContacts}
        else{
          this.model.destinationContacts.push({ first_name: data.first_name, last_name: data.last_name, phone: data.phone });
        }
      }
    );
  }
}
