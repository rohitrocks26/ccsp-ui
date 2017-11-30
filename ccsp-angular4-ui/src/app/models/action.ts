export class Action {
  constructor(type: string, payload? : any) {
    this.type = type;
    this.payload = payload;
  }
  type: string;
  payload?: any;
}