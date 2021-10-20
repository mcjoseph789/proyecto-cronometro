import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SevensegComponent } from './sevenseg/sevenseg.component';
import { ColonComponent } from './colon/colon.component';

@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    SevensegComponent,
    ColonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
