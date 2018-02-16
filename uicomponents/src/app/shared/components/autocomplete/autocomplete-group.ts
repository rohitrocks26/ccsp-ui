export class AutoCompleteGroup {
    constructor(title? : string, items ?: Array<string>) {
        this.title = title;
        this.items = items;
    }
    public title : string;
    public items : Array<string>;
}