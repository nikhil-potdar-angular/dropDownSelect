import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MultiSelectAsyncComponent } from './components/multi-select-async/multi-select-async.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { SingleSelectAsyncComponent } from './components/single-select-async/single-select-async.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'single-select', component: SingleSelectComponent },
  { path: 'single-select-async', component: SingleSelectAsyncComponent },
  { path: 'multi-select', component: MultiSelectComponent },
  { path: 'multi-select-async', component: MultiSelectAsyncComponent },
  { path:'**',redirectTo:'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
