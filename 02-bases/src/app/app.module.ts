import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    EmployeesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
