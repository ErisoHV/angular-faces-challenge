import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdorableFaceComponent } from './adorable-face/adorable-face.component';

@NgModule({
  declarations: [
    AppComponent,
    AdorableFaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
