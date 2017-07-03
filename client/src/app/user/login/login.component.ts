import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;


  constructor(private router: Router, public userService: UserService) {
  }

  ngOnInit() {
    this.user = new User;
  }

  login() {
    this.userService.login(this.user.username, this.user.password).subscribe(result => {
      let user = new User(result.json().username, '', result.json().firstName, result.json().lastName, result.json().email);
      this.userService.saveUser(user);
      this.router.navigate(['/contact']);
    });
  }
}

