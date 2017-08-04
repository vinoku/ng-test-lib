import { Component, Injectable, NgModule } from '@angular/core';

var LibComponent = (function () {
    function LibComponent() {
        this.name = 'Angular Library';
    }
    return LibComponent;
}());
LibComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-lib',
                template: "<h2>Hello {{name}}</h2> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
LibComponent.ctorParameters = function () { return []; };

var LibService = (function () {
    function LibService() {
    }
    /**
     * @return {?}
     */
    LibService.prototype.getMeaning = function () { return 42; };
    return LibService;
}());
LibService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
LibService.ctorParameters = function () { return []; };

var LibModule = (function () {
    function LibModule() {
    }
    return LibModule;
}());
LibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LibComponent],
                providers: [LibService],
                exports: [LibComponent]
            },] },
];
/**
 * @nocollapse
 */
LibModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { LibComponent, LibService, LibModule };
//# sourceMappingURL=quickstart-lib.es5.js.map
