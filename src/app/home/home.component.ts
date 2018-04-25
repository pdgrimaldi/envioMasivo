import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from './../campaign.service';
import { AgendaService } from '../agenda.service';
import { SideNavMenuModule } from 'mat-sidenav-menu';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  constructor(private toastr: ToastrService, private campaignService: CampaignService, private agendaService: AgendaService) { }
  model = {
    campaingName: '',
    msgToSend: '',
    initDate: '',
    initTime: '',
    destinationContacts: []
  };
  contacts = [];

  onFileChange = function (evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    const procesedData = [];
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.procesedData = (XLSX.utils.sheet_to_json(ws, { header: 1, range: 1 }));
      this.procesedData.forEach(contact => {
        this.model.destinationContacts.push({first_name: contact[0] , last_name: contact[1] , phone: contact[2]})
      });
      console.log(this.model.destinationContacts);
    };
    reader.readAsBinaryString(target.files[0]);
  }
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
