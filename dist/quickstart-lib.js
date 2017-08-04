import { Component, Injectable, NgModule } from '@angular/core';

class LibComponent {
    constructor() {
        this.name = 'Angular Library';
    }
}
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
LibComponent.ctorParameters = () => [];

class LibService {
    constructor() { }
    /**
     * @return {?}
     */
    getMeaning() { return 42; }
}
LibService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
LibService.ctorParameters = () => [];

class LibModule {
}
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
LibModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { LibComponent, LibService, LibModule };
//# sourceMappingURL=quickstart-lib.js.map
