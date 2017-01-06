import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { NativeScriptHttpModule } from "nativescript-angular/http";
import { Http } from "@angular/http";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

import { AppComponent } from "./app.component";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/i18n', '.json');
}

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        TranslateModule.forRoot({
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
        })
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule { }
