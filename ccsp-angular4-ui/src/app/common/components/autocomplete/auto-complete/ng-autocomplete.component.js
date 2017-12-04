import { Component, EventEmitter, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { CompleterComponent } from './completer/completer.component';
import { ReturnStringArrayByID } from './utils/utils';
import { Subject } from 'rxjs/Subject';
var NgAutocompleteComponent = (function () {
    function NgAutocompleteComponent() {
        this.selected = new EventEmitter();
        this.group = [];
        this.key = '';
        this.classes = [];
        this._viewHasBeenInit = false;
    }
    /**
     *
     */
    NgAutocompleteComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     */
    NgAutocompleteComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     *
     */
    NgAutocompleteComponent.prototype.ngAfterContentInit = function () {
    };
    /**
     *
     */
    NgAutocompleteComponent.prototype.ngAfterViewChecked = function () {
        var el = this.init.nativeElement.querySelector('.after-view-init');
        if (window.getComputedStyle(el).length > 0) {
            this._viewHasBeenInit = true;
        }
    };
    /**
     *
     * @constructor
     * @param selected
     */
    NgAutocompleteComponent.prototype.ListenToSelected = function (selected) {
        this.selected.emit(selected);
        /**
         *
         */
        this.SetChildren(selected);
    };
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.prototype.InputCleared = function (key) {
        var _this = this;
        this.group.forEach(function (group) {
            if (group.key === key) {
                _this.ResetInput(group.key);
            }
            /**
             *
             */
            if (group.parent === key) {
                _this.ResetInput(group.key);
                group.InitialValue();
            }
        });
        /**
         * Items may have changed, need to te re-set list in completer components.
         */
        this.TriggerChange();
    };
    /**
     *
     * @param selected
     * @constructor
     */
    NgAutocompleteComponent.prototype.SetChildren = function (selected) {
        var _this = this;
        this.group.forEach(function (item) {
            if (item.parent == selected.group.key) {
                _this.ResetInput(item.key);
                /**
                 *
                 */
                if (selected.item !== null && typeof selected.item.children !== 'undefined') {
                    item.SetNewValue(selected.item.children, selected.group.keys.titleKey);
                }
            }
        });
        /**
         * Items may have changed, need to te re-set list in completer components.
         */
        this.TriggerChange();
    };
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.prototype.TriggerChange = function () {
        this.completers.forEach(function (completer) {
            completer.SetItems();
        });
    };
    // =======================================================================//
    // ! Utils                                                                //
    // =======================================================================//
    /**
     *
     * @param {string} key
     * @returns {CompleterComponent}
     * @constructor
     */
    NgAutocompleteComponent.prototype.GetInput = function (key) {
        return this.completers.reduce(function (result, completer) {
            if (completer.group.key === key) {
                result = completer;
            }
            return result;
        }, {});
    };
    /**
     *
     * @param {string} key
     * @param {(completer: CompleterComponent) => void} f
     * @constructor
     */
    NgAutocompleteComponent.prototype.SubscribeInput = function (key, f) {
        if (this._viewHasBeenInit) {
            var completer = this.GetInput(key);
            /**
             *
             */
            f(completer);
            return;
        }
        var s = this.FindInput(key).subscribe(function (completer) {
            f(completer);
            /**
             *
             */
            s.unsubscribe();
        });
    };
    /**
     *
     * @param key
     * @returns {CompleterComponent}
     * @constructor
     */
    NgAutocompleteComponent.prototype.FindInput = function (key) {
        var _this = this;
        var s = new Subject();
        var i = setInterval(function () {
            if (_this._viewHasBeenInit) {
                s.next(_this.GetInput(key));
                s.complete();
                /**
                 *
                 */
                clearInterval(i);
            }
        }, 1000);
        return s;
    };
    /**
     *
     * @param key
     * @constructor
     */
    NgAutocompleteComponent.prototype.ResetInput = function (key) {
        this.SubscribeInput(key, function (completer) {
            completer.ClearValue();
        });
    };
    /**
     *
     * @param key
     * @param values
     * @constructor
     */
    NgAutocompleteComponent.prototype.SetValues = function (key, values) {
        var _this = this;
        this.SubscribeInput(key, function (completer) {
            completer.group.SetValues(values);
            /**
             * Items may have changed, need to te re-set list in completer components.
             */
            _this.TriggerChange();
        });
    };
    /**
     *
     * @param key
     * @param id
     * @constructor
     */
    NgAutocompleteComponent.prototype.SelectItem = function (key, id) {
        this.SubscribeInput(key, function (completer) {
            completer._items.forEach(function (item) {
                if (item.id == id) {
                    completer.SelectItem(item);
                }
            });
        });
    };
    /**
     *
     * @param key
     * @param ids
     * @constructor
     */
    NgAutocompleteComponent.prototype.RemovableValues = function (key, ids) {
        var _this = this;
        this.SubscribeInput(key, function (completer) {
            completer.group.Removables(ReturnStringArrayByID(ids));
            /**
             * Items may have changed, need to te re-set list in completer components.
             */
            _this.TriggerChange();
        });
    };
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.prototype.ResetInputs = function () {
        var _this = this;
        this.group.forEach(function (item) {
            _this.ResetInput(item.key);
        });
    };
    // =======================================================================//
    // ! Static (utils)                                                       //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    NgAutocompleteComponent.FindCompleter = function (key, list) {
        var completer = list.filter(function (completer) {
            return key === completer.key;
        });
        if (typeof completer[0] !== 'undefined') {
            return completer[0];
        }
        return null;
    };
    return NgAutocompleteComponent;
}());
export { NgAutocompleteComponent };
NgAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-autocomplete',
                template: "\n        <div #init style=\"display: none;\"><span class=\"after-view-init\"></span></div>\n        <ng-completer [ngClass]=\"classes\" *ngFor=\"let item of group\" (cleared)=\"InputCleared($event)\"\n                      (selected)=\"ListenToSelected($event)\"\n                      [group]=\"item\"></ng-completer>\n    "
            },] },
];
/** @nocollapse */
NgAutocompleteComponent.ctorParameters = function () { return []; };
NgAutocompleteComponent.propDecorators = {
    'completers': [{ type: ViewChildren, args: [CompleterComponent,] },],
    'init': [{ type: ViewChild, args: ['init',] },],
    'selected': [{ type: Output },],
    'group': [{ type: Input },],
    'key': [{ type: Input },],
    'classes': [{ type: Input },],
};
//# sourceMappingURL=ng-autocomplete.component.js.map