import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: object;
  username=localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')).name : '';
  useremail=localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')).email : '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile: any) => {
      this.user = profile.user;
      
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
