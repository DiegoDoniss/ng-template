import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaterialComponent} from "./material/material.component";

const routes: Routes = [
  {path:'',component:MaterialComponent,children:[
      {path:'example',loadChildren:()=>import('../modules/example/example.module').then(m=>m.ExampleModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
