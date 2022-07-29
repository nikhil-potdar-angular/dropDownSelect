import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';
import { SingleSelectAsyncComponent } from './components/single-select-async/single-select-async.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { MultiSelectAsyncComponent } from './components/multi-select-async/multi-select-async.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { MultiDropdownComponent } from './shared/multi-dropdown/multi-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleSelectComponent,
    SingleSelectAsyncComponent,
    MultiSelectComponent,
    MultiSelectAsyncComponent,
    DropdownComponent,
    MultiDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
