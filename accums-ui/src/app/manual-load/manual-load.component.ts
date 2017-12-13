import { ManualLoadService } from './manual-load.service';
import { Component, OnInit } from '@angular/core';
import { InputModel, Modal, Globals } from '../common/index';

@Component({
  selector: 'app-manual-load',
  templateUrl: './manual-load.component.html',
  styleUrls: ['./manual-load.component.scss'],
  providers : [ManualLoadService]
})
export class ManualLoadComponent implements OnInit {
  

  public fileUpload: InputModel = new InputModel("fileUpload", this.global.emptyString, this.global.emptyString, "text");
  public modeltransfer: Modal = new Modal(this.global.emptyString, this.global.emptyString);
  public isFileValid: boolean = false;
  public file: any;
  public loadDisable: boolean;
  constructor(private global: Globals, private manualLoadService: ManualLoadService) {

  }
  public get loadDisabled() {
    if(!this.file) return true;
    else return false;
  }
  ngOnInit() {
    this.loadDisable = true;
  }
  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files.length > 0) {
      this.file = fileInput.target.files[0];
      this.fileUpload = new InputModel("fileUpload", this.file.name, this.global.emptyString, "text");
      let allowedFileTypes = [this.global.xlsFormat,this.global.xlsxFormat];
      if (allowedFileTypes.indexOf(this.file.type) === -1) {
        this.modeltransfer.modelContent = this.global.unsupportedFormat;
        this.isFileValid = false;
      }
      else if (fileInput.target.files[0].size > 4000000) {
        this.modeltransfer.modelContent = `${this.global.fileSizeExceeded} 4 MB` ;
        this.isFileValid = false;
      }
      else {
        this.modeltransfer.modelContent = this.global.uploadInProgress;
        this.isFileValid = true;
      }
    }
  }
  uploadFile(): void {
    if (this.isFileValid) {
      this.manualLoadService.uploadExcel(this.file).subscribe(
        data => this.successCallback(data),
        error => this.errorCallback(error)
      )
    }
  }
  successCallback(data: any): any {
    this.modeltransfer = new Modal(this.global.emptyString, this.global.fileUploadSuccess);
    this.clearFile();
  }
  errorCallback(data : any) : any {
    this.modeltransfer = new Modal(this.global.emptyString, this.global.fileUploadFailure);
    this.clearFile();
  }
  clearFile() {
      this.file = undefined;
      this.isFileValid = false;
      this.fileUpload = new InputModel("fileUpload", this.global.emptyString, this.global.emptyString, "text");
  }
}





