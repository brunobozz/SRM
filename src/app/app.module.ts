import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentTopoComponent } from './content-topo/content-topo.component';
import { ContentAreaComponent } from './content-area/content-area.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentTopoComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
