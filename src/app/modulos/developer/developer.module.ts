import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DeveloperRoutingModule} from "./developer-routing.module";
import { CvOnlineComponent } from './cv-online/cv-online.component';

@NgModule({
  declarations: [
    CvOnlineComponent,
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
