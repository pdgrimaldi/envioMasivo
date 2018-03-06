import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  model = {
    campaingName: '',
    msgToSend: ''
  };
  ngOnInit() {
  }

  sendMassiveMsjs = function () {
    console.log(this.model.campaingName);
    console.log(this.model.msgToSend);
    this.toastr.success('Los mensajes han sido enviados correctamente', 'Exito!');
    this.model.campaingName = '';
    this.model.msgToSend = '';
  };
}
