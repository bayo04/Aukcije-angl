import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.user);
    this._userService.register(this.user);
  }

}
