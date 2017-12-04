var AutocompleteItem = (function () {
    function AutocompleteItem(title, id, original) {
        this.title = title;
        this.id = id;
        this.original = original;
    }
    /**
     * object must have an ID
     * @constructor
     */
    AutocompleteItem.TransformToAutocompleteItem = function (object, titleKey, childrenKey) {
        if (childrenKey === void 0) { childrenKey = null; }
        var item = new AutocompleteItem(object[titleKey], object.id, object);
        /**
         * if there are children, add these.
         */
        if (childrenKey !== null)
            item.children = object[childrenKey];
        return item;
    };
    return AutocompleteItem;
}());
export { AutocompleteItem };
//# sourceMappingURL=AutocompleteItem.js.map