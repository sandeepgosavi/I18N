import { Component } from "@angular/core";
import * as Platform from "platform";
import { TranslateService } from "ng2-translate";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public language: string;

    constructor(private translate: TranslateService) {
        this.language = Platform.device.language;
        this.translate.setDefaultLang("en");
        this.translate.use(Platform.device.language.split("-")[0]);
     }
}
