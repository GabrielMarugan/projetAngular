import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { TokenService } from './../token.service';
import { user } from './../../interfaces/users';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  Tabusers: user[] = [];

  constructor(private userService:UserService, private router:Router, private token:TokenService) { }

  ngOnInit(): void {
    this.listUser();
  }


  listUser(){
    console.log(this.token);
    let that = this;
    this.userService.listUser().subscribe({
      next(ret){
        console.log(ret);
        that.Tabusers = ret;
        //that.router.navigate(["/user"]);
      },
      error(err){
        alert(err);
      }
    })
  }

}
