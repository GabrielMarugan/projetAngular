import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form-up',
  templateUrl: './form-up.component.html',
  styleUrls: ['./form-up.component.css']
})
export class FormUpComponent implements OnInit {

  userForm = this.formBuilder.group({
    pseudo: "" as string,
    email: "" as string,
    password: "" as string,
    vpassword: "" as string
  })

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  validForm(){
    console.log(this.userForm.value);
    let that = this;

    this.userService.subscribe(this.userForm.value).subscribe({
      next(ret){
        that.router.navigate(["/"])
      },
      error(err){
        alert(err);
      }
    })
  }

}
