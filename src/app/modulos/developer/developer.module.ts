import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DeveloperRoutingModule} from "./developer-routing.module";
import { CvOnlineComponent } from './cv-online/cv-online.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    CvOnlineComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
