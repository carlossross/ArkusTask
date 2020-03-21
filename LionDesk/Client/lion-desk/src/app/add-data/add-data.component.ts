import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(private service: RestService) { }

  @ViewChild('dataForm') dataForm: NgForm;

  data = {
    age: 0,
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone: '',
    city: ''
  };

  ngOnInit(): void {
  }

  addData() {
    if (this.dataForm.valid) {
      this.service.addData(this.data).subscribe(res => {
      });
    }
  }
}
