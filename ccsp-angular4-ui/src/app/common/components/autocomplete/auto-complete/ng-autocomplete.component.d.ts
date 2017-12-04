import { AfterContentInit, AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnInit, QueryList } from '@angular/core';
import { AutocompleteGroup } from './classes/AutocompleteGroup';
import { SelectedAutocompleteItem } from './classes/typing';
import { CompleterComponent } from './completer/completer.component';
import { Subject } from 'rxjs/Subject';
export declare class NgAutocompleteComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked {
    completers: QueryList<CompleterComponent>;
    init: ElementRef;
    selected: EventEmitter<SelectedAutocompleteItem>;
    group: AutocompleteGroup[];
    key: string;
    classes: string[];
    _viewHasBeenInit: boolean;
    constructor();
    /**
     *
     */
    ngOnInit(): void;
    /**
     *
     */
    ngAfterViewInit(): void;
    /**
     *
     */
    ngAfterContentInit(): void;
    /**
     *
     */
    ngAfterViewChecked(): void;
    /**
     *
     * @constructor
     * @param selected
     */
    ListenToSelected(selected: SelectedAutocompleteItem): void;
    /**
     *
     * @constructor
     */
    InputCleared(key: string): void;
    /**
     *
     * @param selected
     * @constructor
     */
    SetChildren(selected: SelectedAutocompleteItem): void;
    /**
     *
     * @constructor
     */
    TriggerChange(): void;
    /**
     *
     * @param {string} key
     * @returns {CompleterComponent}
     * @constructor
     */
    GetInput(key: string): CompleterComponent;
    /**
     *
     * @param {string} key
     * @param {(completer: CompleterComponent) => void} f
     * @constructor
     */
    SubscribeInput(key: string, f: (completer: CompleterComponent) => void): void;
    /**
     *
     * @param key
     * @returns {CompleterComponent}
     * @constructor
     */
    FindInput(key: string): Subject<CompleterComponent>;
    /**
     *
     * @param key
     * @constructor
     */
    ResetInput(key: string): void;
    /**
     *
     * @param key
     * @param values
     * @constructor
     */
    SetValues(key: string, values: {
        id?: string | number;
        [value: string]: any;
    }[]): void;
    /**
     *
     * @param key
     * @param id
     * @constructor
     */
    SelectItem(key: string, id: string | number): void;
    /**
     *
     * @param key
     * @param ids
     * @constructor
     */
    RemovableValues(key: string, ids: {
        id: string | number;
        [value: string]: any;
    }[]): void;
    /**
     *
     * @constructor
     */
    ResetInputs(): void;
    /**
     *
     * @constructor
     */
    static FindCompleter(key: string, list: QueryList<NgAutocompleteComponent>): NgAutocompleteComponent;
}
