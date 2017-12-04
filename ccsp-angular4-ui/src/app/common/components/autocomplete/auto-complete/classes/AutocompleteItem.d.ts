export declare class AutocompleteItem {
    title: string;
    id?: string | number;
    children: any[];
    original: any;
    constructor(title: string, id: string | number, original: any);
    /**
     * object must have an ID
     * @constructor
     */
    static TransformToAutocompleteItem(object: {
        id?: string | number;
        [value: string]: any;
    }, titleKey: string, childrenKey?: string | null): AutocompleteItem;
}
