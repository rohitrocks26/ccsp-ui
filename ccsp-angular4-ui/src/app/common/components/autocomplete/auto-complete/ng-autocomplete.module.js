import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgAutocompleteComponent } from "./ng-autocomplete.component";
import { CompleterComponent } from "./completer/completer.component";
import { NgDropdownDirective } from "./dropdown/ng-dropdown.directive";
import { FormsModule } from "@angular/forms";
import { HighlightPipe } from "./pipes/highlight";
var NgAutoCompleteModule = (function () {
    function NgAutoCompleteModule() {
    }
    return NgAutoCompleteModule;
}());
export { NgAutoCompleteModule };
NgAutoCompleteModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [
                    NgAutocompleteComponent,
                    CompleterComponent,
                ],
                declarations: [
                    NgAutocompleteComponent,
                    CompleterComponent,
                    NgDropdownDirective,
                    HighlightPipe
                ]
            },] },
];
/** @nocollapse */
NgAutoCompleteModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ng-autocomplete.module.js.map