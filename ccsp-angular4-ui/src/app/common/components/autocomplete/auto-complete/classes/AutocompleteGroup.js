import { AutocompleteItem } from "./AutocompleteItem";
import { FilterRemovals } from "../utils/utils";
var AutocompleteGroup = (function () {
    function AutocompleteGroup() {
        this.initialValue = [];
        this.removals = [];
        this._copy = [];
    }
    /**
     *
     * @param value
     * @param titleKey
     * @constructor
     */
    AutocompleteGroup.prototype.SetNewValue = function (value, titleKey) {
        var values = value.map(function (item) { return AutocompleteItem.TransformToAutocompleteItem(item, titleKey); });
        this.SetCopy(values);
        /**
         *
         * @type {AutocompleteItem[]}
         */
        this.value = FilterRemovals(this.removals, values);
    };
    /**
     *
     * @param ids
     * @constructor
     */
    AutocompleteGroup.prototype.Removables = function (ids) {
        this.removals = ids;
        /**
         *
         * @type {AutocompleteItem[]}
         */
        this.value = FilterRemovals(this.removals, this._copy);
    };
    /**
     *
     * @constructor
     */
    AutocompleteGroup.prototype.InitialValue = function () {
        this.value = FilterRemovals(this.removals, this.initialValue);
        /**
         *
         */
        this.SetCopy(this.initialValue);
    };
    /**
     *
     * @constructor
     */
    AutocompleteGroup.prototype.SetCopy = function (values) {
        this._copy = Object.assign([], values);
    };
    /**
     *
     * @param value
     * @constructor
     */
    AutocompleteGroup.prototype.SetValues = function (value) {
        var _this = this;
        this.value = value.map(function (item) { return AutocompleteItem.TransformToAutocompleteItem(item, _this.keys.titleKey, _this.keys.childrenKey); });
        /**
         *
         */
        this.initialValue = Object.assign([], this.value);
        this.SetCopy(Object.assign([], this.value));
    };
    return AutocompleteGroup;
}());
export { AutocompleteGroup };
export function CreateNewAutocompleteGroup(placeholder, key, value, keys, parent, completion) {
    if (parent === void 0) { parent = ''; }
    if (completion === void 0) { completion = true; }
    var group = new AutocompleteGroup();
    group.key = key;
    group.keys = keys;
    group.placeholder = placeholder;
    group.parent = parent;
    group.completion = completion;
    /**
     * Initial value needed, if we empty search box or want to clear it, it needs to be reset.
     * Setting copy, used if user wants to remove values (by id.). This _ list gets filtered.
     */
    group.SetValues(value);
    return group;
}
//# sourceMappingURL=AutocompleteGroup.js.map