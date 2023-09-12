import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app/app.module"

console.log("Main TS file executed")
//Root module class
platformBrowserDynamic().bootstrapModule(AppModule)