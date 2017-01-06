"use strict";
var core_1 = require("@angular/core");
var Platform = require("platform");
var ng2_translate_1 = require("ng2-translate");
var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.language = Platform.device.language;
        this.translate.setDefaultLang("en");
        this.translate.use(Platform.device.language.split("-")[0]);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map