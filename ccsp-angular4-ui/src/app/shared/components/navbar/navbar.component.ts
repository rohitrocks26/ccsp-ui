import { Component, OnInit ,Input} from '@angular/core';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'navbarComponent',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }
  @Input() public navbarList=Array<any>();
  
    private val: string;
   createRange(){
      var items: number[] = [];
      for(var i = 0; i < this.navbarList.length; i++){
         items.push(this.navbarList[i]);
      }
      return items;
    }
    logout() {
      this.authenticationService.logout();
    }

}
