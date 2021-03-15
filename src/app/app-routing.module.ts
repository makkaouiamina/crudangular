import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

import {FormComponent} from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'',redirectTo:'list', pathMatch:'full'},
  {path: 'add', component: FormComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
