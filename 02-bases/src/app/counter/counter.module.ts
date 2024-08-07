import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { AppModule } from "../app.module";


@NgModule({
    declarations: [
        CounterComponent 
    ],
    exports: [
        CounterComponent
    ]
})


export class CounterModule {
    
}