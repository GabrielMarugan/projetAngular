import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-in',
  templateUrl: './form-in.component.html',
  styleUrls: ['./form-in.component.css']
})
export class FormInComponent implements OnInit {

  userForm;

  constructor(private formBuilder:FormBuilder) { 
    this.userForm = this.formBuilder.group({
      email: "" as string,
      password: "" as string
    })
  }

  ngOnInit(): void {
  }

  validForm(){
    console.log(this.userForm.value);
  }

}
