import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  _authenticationUrl: string = 'http://34.208.243.62:4000/generateToken';

  //MANUAL LOAD
  browseButton : string = "Browse For File";
}