# I18N
For i18n in {N} for mobile app, I searched a lot, tried a lot, it may be because of my less knowledge in nativescript. 
Finally I got a link of [Nic Raboy](https://www.thepolyglotdeveloper.com/author/nraboy/) who has written a 
[ultimate blog](https://www.thepolyglotdeveloper.com/2017/01/internationalization-nativescript-mobile-app-angular/) on i18n. 
If you follow the blog step by step, you will implement i18n successfully.

## Installation
```
tns create TranslateProject --ng
cd TranslateProject
tns platform add ios
tns platform add android
npm install ng2-translate --save
```

## Usage
Add app/i18n/en.json file
```
{
    "hello": "hello",
    "goodbye": "goodbye"
}
```
Add app/i18n/es.json file
```
{
    "hello": "hola",
    "goodbye": "adios"
}
```
modify app/app.module.ts as below
```
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
```
Your app/app.component.ts file should look like this
```
import { Component } from "@angular/core";
import * as Platform from "platform";
import { TranslateService } from "ng2-translate";
 
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
 
    public language: string;
 
    public constructor(private translate: TranslateService) {
        this.language = Platform.device.language;
        this.translate.setDefaultLang("en");
        this.translate.use(Platform.device.language.split("-")[0]);
    }
 
}
```
Finaly, your app/app.component.html should look like this
```
<ActionBar title="{N} Translate Example"></ActionBar>
<StackLayout horizontalAlignment="center" verticalAlignment="center">
    <Label text="Language: {{ language }}" class="h1"></Label>
    <Button text="{{ 'hello' | translate }} / {{ 'goodbye' | translate }}" class="btn btn-primary"></Button>
</StackLayout>
```

## Video
You can also see [Nic Raboy's video](https://youtu.be/nLBWA3SFpWk)