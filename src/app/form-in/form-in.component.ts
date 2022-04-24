import { TokenService } from './../token.service';
import { UserService } from './../user.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Router } from '@angular/router';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-form-in',
  templateUrl: './form-in.component.html',
  styleUrls: ['./form-in.component.css']
})
export class FormInComponent implements OnInit {

  userForm = this.formBuilder.group({
    email: "" as string,
    password: "" as string
  })

  constructor(private formBuilder:FormBuilder, private userService: UserService, private router:Router, private token:TokenService) {  }

  ngOnInit(): void {
  }

  validForm(){
    console.log(this.userForm.value);
  }

  ngConnect(){
    console.log(this.userForm.value);
    let that = this;
    this.userService.connexion({email: this.userForm.value.email,password: this.userForm.value.password}).subscribe({
      next(ret){
        console.log(ret);
        that.token.setToken(ret.token);
        that.token.setIdConnected(ret.id);
        that.router.navigate(["/user/liste"]);
        console.log("connecté!!");
      },
      error(err){
        alert(err);
      }
    })
  }

}
