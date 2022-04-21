import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-up',
  templateUrl: './form-up.component.html',
  styleUrls: ['./form-up.component.css']
})
export class FormUpComponent implements OnInit {

  userForm;

  constructor(private formBuilder:FormBuilder) { 
    this.userForm = this.formBuilder.group({
      email: "" as string,
      password: "" as string,
      vpassword: "" as string
    })
  }

  ngOnInit(): void {
  }

  validForm(){
    console.log(this.userForm.value);
  }

}
