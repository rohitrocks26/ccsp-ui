import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    public isJSON(stringValue : string) : boolean {
        try {
            return (JSON.parse(stringValue) && !!stringValue);
        } catch (e) {
            return false;
        }
    }
    public ifUndefinedReturnEmptyString(value : any) : any {
        if(value===undefined || value === null ) return "";
        return value;
    }
}