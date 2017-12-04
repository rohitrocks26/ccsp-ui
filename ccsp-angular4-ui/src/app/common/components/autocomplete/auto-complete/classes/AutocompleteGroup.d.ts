import { AutocompleteItem } from "./AutocompleteItem";
export declare class AutocompleteGroup {
    initialValue: AutocompleteItem[];
    key: string;
    keys: {
        titleKey: string;
        childrenKey: string | null;
    };
    value: AutocompleteItem[];
    remove: string[];
    placeholder: string;
    parent: string;
    completion: boolean;
    private removals;
    private _copy;
    constructor();
    /**
     *
     * @param value
     * @param titleKey
     * @constructor
     */
    SetNewValue(value: {
        id: string | number;
        [value: string]: any;
    }[], titleKey: string): void;
    /**
     *
     * @param ids
     * @constructor
     */
    Removables(ids: string[]): void;
    /**
     *
     * @constructor
     */
    InitialValue(): void;
    /**
     *
     * @constructor
     */
    SetCopy(values: AutocompleteItem[]): void;
    /**
     *
     * @param value
     * @constructor
     */
    SetValues(value: {
        id?: string | number;
        [value: string]: any;
    }[]): void;
}
export declare function CreateNewAutocompleteGroup<T>(placeholder: string, key: string, value: {
    id?: string | number;
    [value: string]: any;
}[], keys: {
    titleKey: string;
    childrenKey: string | null;
}, parent?: string, completion?: boolean): AutocompleteGroup;
