import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path:'',component:MainComponent,children:[
      {path:'example',loadChildren:()=>import('../modules/example/example.module').then(m=>m.ExampleModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
