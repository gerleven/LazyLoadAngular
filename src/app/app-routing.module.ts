import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvOnlineComponent } from './modulos/developer/cv-online/cv-online.component';
import { HomePageComponent } from './modulos/home/home-page/home-page.component';
import { MyAppsComponent } from './modulos/mis-apps/my-apps/my-apps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () =>
      import('./modulos/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'my-apps',
    // loadChildren: './modulos/mis-apps/mis-apps.module#MyAppsComponent'  //asi lo haciamos en JHA pero debe ser que funciona despues de tener el hash router o algo asi
    component: MyAppsComponent,
    loadChildren: () =>
      import('./modulos/mis-apps/mis-apps.module').then((m) => m.MisAppsModule),
  },
  {
    path: 'developer',
    component: CvOnlineComponent,
    loadChildren: () =>
      import('./modulos/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
