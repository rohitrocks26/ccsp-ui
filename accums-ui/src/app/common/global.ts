import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  //URLS
  authenticationUrl: string = "http://34.208.243.62:4000/generateToken";
  manualSpeedLoadUrl : string = "http://TestUrl";

  emptyString = "";
  
  //MANUAL SPEED LOAD
  browseButton : string = "Browse For File";
  fileSelect:string = "Select File to Upload:";
  name:string = "File Name";
  unsupportedFormat : string = "File format not supported";
  fileSizeExceeded :  string = "File size exceeds"; 
  uploadInProgress : string = "File uploading";
  fileUploadSuccess : string = "File Uploaded Successfully";
  fileUploadFailure : string = "File Upload Failed";
  xlsxFormat : string = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  xlsFormat : string = "application/vnd.ms-excel";
  defautAllowedFileSize : number = 5000000;
}