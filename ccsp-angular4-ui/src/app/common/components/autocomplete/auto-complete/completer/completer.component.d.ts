import { EventEmitter, OnInit } from "@angular/core";
import { AutocompleteGroup } from "../classes/AutocompleteGroup";
import { SelectedAutocompleteItem } from "../classes/typing";
import { AutocompleteItem } from "../classes/AutocompleteItem";
import { NgDropdownDirective } from "../dropdown/ng-dropdown.directive";
export declare class CompleterComponent implements OnInit {
    dropdown: NgDropdownDirective;
    cleared: EventEmitter<string>;
    selected: EventEmitter<SelectedAutocompleteItem>;
    group: AutocompleteGroup;
    _items: AutocompleteItem[];
    _completer: string;
    _highlight: string;
    _DOM: {
        placeholder: string;
        selected: AutocompleteItem;
    };
    constructor();
    /**
     *
     */
    ngOnInit(): void;
    /**
     * Only used when completion is off.
     * @constructor
     */
    RegisterClick(): void;
    /**
     *
     * @constructor
     */
    DropdownArray(): void;
    /**
     *
     * @constructor
     */
    SwitchDropdownState(): void;
    /**
     *
     * @constructor
     */
    CloseDropdown(): void;
    /**
     *
     * @constructor
     */
    OpenDropdown(): void;
    /**
     *
     * @constructor
     */
    SetItems(): void;
    /**
     *
     * @constructor
     */
    SelectItem(item: AutocompleteItem): void;
    /**
     *
     * @param value
     * @constructor
     */
    OnModelChange(value: string): void;
    /**
     *
     * @constructor
     */
    OnInputBlurred(): void;
    /**
     *
     * @constructor
     */
    OnHoverDropdownItem(item: AutocompleteItem): void;
    /**
     *
     * @constructor
     */
    HasChosenValue(): boolean;
    /**
     *
     * @constructor
     */
    ClearValue(): void;
}
