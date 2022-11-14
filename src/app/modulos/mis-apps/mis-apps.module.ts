import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisAppsRoutingModule } from './mis-apps-routing.module';
import { AgendaDinamicaComponent } from './agenda-dinamica/agenda-dinamica.component';
import { MyAppsComponent } from './my-apps/my-apps.component';


@NgModule({
  declarations: [
    AgendaDinamicaComponent,
    MyAppsComponent
  ],
  imports: [
    CommonModule,
    MisAppsRoutingModule
  ]
})
export class MisAppsModule { }
