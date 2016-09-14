import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DropdownModule} from 'primeng/primeng';

import { SearchlogComponent } from './searchlog/searchlog.component';

@NgModule({
  declarations: [
    SearchlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule 
  ],
  providers: [],
  bootstrap: [SearchlogComponent]
})
export class AppModule { }
