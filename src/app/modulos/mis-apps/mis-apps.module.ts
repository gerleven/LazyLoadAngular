import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisAppsRoutingModule } from './mis-apps-routing.module';
import { GeneradorRutinaComponent } from './generador-rutina/generador-rutina.component';


@NgModule({
  declarations: [
    GeneradorRutinaComponent
  ],
  imports: [
    CommonModule,
    MisAppsRoutingModule
  ]
})
export class MisAppsModule { }
