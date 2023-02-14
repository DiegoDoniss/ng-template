import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { FirstPageComponent } from './pages/first-page/first-page.component';


@NgModule({
  declarations: [
    FirstPageComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
