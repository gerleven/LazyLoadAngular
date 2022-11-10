import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modulos/developer/about-me/about-me.component';
import { HomePageComponent } from './modulos/home/home-page/home-page.component';
import { GeneradorRutinaComponent } from './modulos/mis-apps/generador-rutina/generador-rutina.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () =>
      import('./modulos/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about.me',
    component: AboutMeComponent,
    loadChildren: () =>
      import('./modulos/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
  },
  {
    path: 'rutina',
    component: GeneradorRutinaComponent,
    loadChildren: () =>
      import('./modulos/mis-apps/mis-apps.module').then((m) => m.MisAppsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
