import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class CanactivateauthguardService implements CanActivate {
  private token :any;  
  constructor(private router: Router , private authservice : AuthenticationService){}  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean { 
            if (this.authservice.isAuthenticated) {
              console.log("inside the can activate guard"+this.authservice.isAuthenticated);
                 return true;
            }    
            this.router.navigate(['']);
            return false;
        }
}
