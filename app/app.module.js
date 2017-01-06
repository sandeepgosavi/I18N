"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var http_1 = require("nativescript-angular/http");
var http_2 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
var app_component_1 = require("./app.component");
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, '/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                ng2_translate_1.TranslateModule.forRoot({
                    provide: ng2_translate_1.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [http_2.Http]
                })
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map