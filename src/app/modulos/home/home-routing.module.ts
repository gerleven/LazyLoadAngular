import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { GeneradorRutinaComponent } from './generador-rutina/generador-rutina.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'rutinas',
    component: GeneradorRutinaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
