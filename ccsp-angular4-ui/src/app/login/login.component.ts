import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AuthenticationService} from '../common/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private authenticationService : AuthenticationService) { }

  ngOnInit() {
    $(document).ready(function(){
      
      //  $(".log-btn").click(function(){
      //    if($("#UserName").val() == "somdatt" && $("#Password").val() == "somdatt"){
      //     localStorage.setItem('token','1234');
      //     console.log("token value set");
      //     this.router.navigate(['dashboard']); 
      //  }
      //  else {
      //      $('.log-status').addClass('wrong-entry');
      //      $('.alert').fadeIn(500);
      //      setTimeout( "$('.alert').fadeOut(1500);",3000 );
      //  }
      //  });
     
       // Toggle Function
     $('.toggle').click(function(){
       // Switches the Icon
       $(this).children('i').toggleClass('fa-pencil');
       // Switches the forms  
       $('.form').animate({
         height: "toggle",
         'padding-top': 'toggle',
         'padding-bottom': 'toggle',
         opacity: "toggle"
       }, "slow");
     });
     
     $('.form-control').keypress(function(){
       $('.log-status').removeClass('wrong-entry');
     });
     });
  }
  formdata(username:string,password:string){
      this.authenticationService.authenticate(username,password).subscribe(
        response=> console.log('response'+response),
        error=>this.handleError(error)
      )
    }
    public handleError (error : Error) : void {
      debugger;
      console.log("error"+error);
    }
   /* else {
      $('.log-status').addClass('wrong-entry');
      $('.alert').fadeIn(500);
      setTimeout( "$('.alert').fadeOut(1500);",3000 );
    }
    
  }*/
}
