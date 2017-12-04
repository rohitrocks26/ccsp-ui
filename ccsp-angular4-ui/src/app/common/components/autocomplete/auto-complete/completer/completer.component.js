import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { NgDropdownDirective } from "../dropdown/ng-dropdown.directive";
var CompleterComponent = (function () {
    function CompleterComponent() {
        this.cleared = new EventEmitter();
        this.selected = new EventEmitter();
        this.group = {};
        this._items = [];
        this._completer = '';
        this._highlight = '';
        this._DOM = {
            placeholder: '',
            selected: null
        };
    }
    /**
     *
     */
    CompleterComponent.prototype.ngOnInit = function () {
        this.SetItems();
    };
    /**
     * Only used when completion is off.
     * @constructor
     */
    CompleterComponent.prototype.RegisterClick = function () {
        if (!this.group.completion) {
            this.SwitchDropdownState();
        }
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.DropdownArray = function () {
        if (this.group.completion) {
            this.SwitchDropdownState();
        }
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.SwitchDropdownState = function () {
        if (this.dropdown._open) {
            this.CloseDropdown();
            return;
        }
        /**
         *
         */
        this.OpenDropdown();
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.CloseDropdown = function () {
        this.dropdown._open = false;
        /**
         *
         * @type {string}
         */
        this._DOM.placeholder = '';
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.OpenDropdown = function () {
        this.dropdown.Open();
        /**
         *
         * @type {string}
         */
        this._DOM.placeholder = '';
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.SetItems = function () {
        this._items = this.group.value;
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.SelectItem = function (item) {
        this._completer = item.title;
        this._highlight = '';
        /**
         *
         */
        this.dropdown.Close(null, true);
        this._DOM.selected = item;
        this.selected.emit({ group: this.group, item: item });
    };
    /**
     *
     * @param value
     * @constructor
     */
    CompleterComponent.prototype.OnModelChange = function (value) {
        this._completer = value;
        this._highlight = value;
        if (value.length === 0) {
            this._DOM.selected = null;
            this.cleared.emit(this.group.key);
        }
        /**
         *
         * @type {AutocompleteItem[]}
         * @private
         */
        this._items = this.group.value.filter(function (item) {
            return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.OnInputBlurred = function () {
        if (!this.HasChosenValue()) {
            /**
             * Let component know completer input has been cleared -
             * this function shows the list again, also resets children, if chosen.
             */
            this.OnModelChange('');
        }
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.OnHoverDropdownItem = function (item) {
        if (item == null) {
            this._DOM.placeholder = '';
            return;
        }
        this._DOM.placeholder = item.title;
    };
    // =======================================================================//
    // ! Utils                                                                //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.HasChosenValue = function () {
        var _this = this;
        return this.group.value.reduce(function (result, item) {
            if (item.title === _this._completer) {
                result = true;
            }
            return result;
        }, false);
    };
    /**
     *
     * @constructor
     */
    CompleterComponent.prototype.ClearValue = function () {
        this._completer = '';
        this._DOM.selected = null;
        /**
         *
         */
        this.selected.emit({ group: this.group, item: null });
    };
    return CompleterComponent;
}());
export { CompleterComponent };
CompleterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-completer',
                template: "\n        <div #element class=\"ng-autocomplete-dropdown\">\n\n            <!--GROUP: {{group.key}}-->\n\n            <div class=\"ng-autocomplete-inputs\" (click)=\"RegisterClick()\" [ngClass]=\"{'completion-off': !group.completion}\">\n                <span class=\"ng-autocomplete-placeholder\"\n                      *ngIf=\"_DOM.placeholder.length > 0\">{{_DOM.placeholder}}</span>\n                <input #input type=\"text\" [placeholder]=\"group.placeholder\" name=\"completer\" [(ngModel)]=\"_completer\"\n                       (ngModelChange)=\"OnModelChange($event)\"\n                       [value]=\"_completer\"\n                       autocomplete=\"off\"\n                       (click)=\"OpenDropdown()\"\n                       (focus)=\"OpenDropdown()\" class=\"ng-autocomplete-input\">\n                \n                <span [ngClass]=\"{'open': dropdown._open}\" class=\"ng-autocomplete-dropdown-icon\" (click)=\"DropdownArray()\"></span>\n            </div>\n\n            <div class=\"ng-dropdown\" ngDropdown [list]=\"_items\" [element]=\"element\" [input]=\"input\" [active]=\"_DOM.selected\" [key]=\"group.key\"\n                 [completion]=\"group.completion\"\n                 (hover)=\"OnHoverDropdownItem($event)\"\n                 (selected)=\"SelectItem($event)\"\n                 (closed)=\"OnInputBlurred()\"\n            >\n                <div class=\"dropdown-item\" *ngFor=\"let item of _items; let i = index\" (click)=\"SelectItem(item)\"\n                     [innerHTML]=\"item.title | highlight:_highlight\"\n                >\n                </div>\n            </div>\n        </div>",
                styles: ["\n        .ng-autocomplete-inputs {\n            position: relative;\n        }\n\n        .ng-autocomplete-inputs.completion-off {\n            cursor: pointer;\n        }\n        \n        .ng-autocomplete-inputs.completion-off input {\n            pointer-events: none;\n        }\n\n        .ng-autocomplete-placeholder {\n            pointer-events: none;\n        }\n        \n        .ng-autocomplete-dropdown-icon {\n            \n        }\n        \n        .ng-autocomplete-dropdown .ng-dropdown {\n            display: none;\n        }\n\n        .ng-autocomplete-dropdown .ng-dropdown.open {\n            display: block;\n        }\n    "]
            },] },
];
/** @nocollapse */
CompleterComponent.ctorParameters = function () { return []; };
CompleterComponent.propDecorators = {
    'dropdown': [{ type: ViewChild, args: [NgDropdownDirective,] },],
    'cleared': [{ type: Output },],
    'selected': [{ type: Output },],
    'group': [{ type: Input },],
};
//# sourceMappingURL=completer.component.js.map