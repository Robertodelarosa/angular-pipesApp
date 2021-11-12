import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulo de importaciónes de prime-ng
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
