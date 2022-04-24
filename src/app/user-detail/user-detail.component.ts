import { TokenService } from './../token.service';
import { FormBuilder } from '@angular/forms';
import { user } from './../../interfaces/users';
import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  isEdited: boolean = false;
  userf = this.formBuilder.group({
    pseudo: "",
    email: "",
    avatar: "",
    password:"",
    id: 0
  });

  userd: user = {
    pseudo: "",
    email: "",
    avatar: "",
    password: "",
    niveau: "",
    id: 0
  }

  constructor(private token: TokenService,private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.detailUser();
  }

  detailUser() {
    let that = this;
    this.route.params.subscribe({
      next(val) {
        let id = parseInt(val["id"])
        that.userService.detailUser(id).subscribe({
          next(ret) {
            console.log(ret);
            that.userd = ret;
          },
          error(err) {
            alert(err);
          }
        })

      }
    })
  }


  clickEdit() {
    this.isEdited = true;
    let tmp = this.formBuilder.group({
      pseudo: this.userd.pseudo,
      email: this.userd.email,
      avatar: this.userd.avatar,
      niveau: this.userd.niveau,
      id: this.userd.id
    })
    this.userf = tmp;
  }

  deleteUser() {
    let that = this;
    this.route.params.subscribe({
      next(val) {
        let id = parseInt(val["id"]);
        that.userService.deleteUser(id).subscribe({
          next(ret) {
            console.log(ret);
            console.log("suppression réussi");
            that.router.navigate(["/user/liste"]);
          },
          error(err) {
            alert(err);
          }
        })
      }
    })
  }

  editUser() {
    let that = this;
    let tmp = {
      pseudo: this.userf.value.pseudo,
      email: this.userf.value.email,
      avatar: this.userf.value.avatar,
      password: "" ,
      id: this.userd.id
    }
    this.userService.editUser(tmp).subscribe({
      next(ret) {
        console.log(ret);
        console.log("modification réussi");
        that.userd = ret;
        that.isEdited=false;
        //  that.router.navigate(["/user/liste"]);
      },
      error(err) {
        alert(err);
      }
    })

  }


  //===================================
  isAuthor(id:number|undefined): boolean {
    if (id) {
      return this.token.isAuthor(id);
    }
    else return false;
  }


}
