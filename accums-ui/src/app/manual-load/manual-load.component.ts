import { Component, OnInit } from '@angular/core';
import { InputModel, Modal, Globals } from '../common/index';

@Component({
  selector: 'app-manual-load',
  templateUrl: './manual-load.component.html',
  styleUrls: ['./manual-load.component.scss']
})
export class ManualLoadComponent implements OnInit {
  
  public fileUpload :InputModel  = new InputModel("fileUpload","","","text");
 public modeltransfer:Modal = new Modal("","");
 public loadDisable:boolean;
  constructor(private global:Globals) {
  
   }

  ngOnInit() {
    this.loadDisable=true;
  }
  fileChangeEvent(fileInput:any){
    if (fileInput.target.files ) {
      this.loadDisable=false;
      this.fileUpload=new InputModel("fileUpload",fileInput.target.files[0].name,"","text");
      if(fileInput.target.files[0].type != "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
        this.modeltransfer = new Modal("","file format not supported");
      }
      else{
        if(fileInput.target.files[0].size>4000){
          this.modeltransfer = new Modal("","file size exceeds 4000MB");
        }
        else{
          this.modeltransfer = new Modal("","file uploading");
        }
      }
  }
  }
  

  

}
