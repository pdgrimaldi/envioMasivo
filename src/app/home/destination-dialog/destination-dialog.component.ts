import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'course-dialog',
  templateUrl: './destination-dialog.component.html',
  styleUrls: ['./destination-dialog.component.css']
})
export class DestinationDialogComponent implements OnInit {

  form: FormGroup;
  first_name: string;
  last_name: string;
  phone: string;
  destinationContacts = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DestinationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.phone = data.phone;
    this.destinationContacts = data. destinationContacts;
  }

  isValidForm = function(){
    return (this.form.value.first_name !== '' && this.form.value.last_name!=='' && this.form.value.phone !=='')
    }

  ngOnInit() {
    this.form = this.fb.group({
      first_name: [this.first_name, []], last_name: [this.last_name, []],
      phone: [this.phone, []]
    });
  }

  save() {
    this.form.value.destinationContacts = null
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  onFileChange = function (evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    const procesedData = [];
    // tslint:disable-next-line:curly
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
        this.destinationContacts.push({ first_name: contact[0], last_name: contact[1], phone: contact[2] });
      });
      this.form.value.destinationContacts = this.destinationContacts;
    };
    reader.readAsBinaryString(target.files[0]);
    this.dialogRef.close(this.form.value);
  };

}