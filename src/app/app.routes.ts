import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent, ContactsComponent, RoomsComponent, AboutUsComponent, ServicesComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'rooms-and-rates/:type',
    component: RoomsComponent
  },
  {
    path: 'services/:type',
    component: ServicesComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
