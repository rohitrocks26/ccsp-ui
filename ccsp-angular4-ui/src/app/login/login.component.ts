import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService } from '../core/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  formdata(username: string, password: string) {
    this.authenticationService.authenticate("https://reqres.in/api/login",
      { email: username, password }).subscribe(
      response => this.router.navigate(['/demoPage']),
      error => this.handleError(error)
      )
  }
  public handleError(error: Error): void {
  }

}

