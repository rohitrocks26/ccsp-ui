import { GlobalService, Globals } from './../common';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ManualLoadService {

    constructor(private globalService : GlobalService,
    private globals : Globals ) { }
    public uploadExcel(excelFile : FormData ) : Observable<any> {
        return this.globalService.postRequest(this.globals.manualSpeedLoadUrl,
            excelFile)
    }
}