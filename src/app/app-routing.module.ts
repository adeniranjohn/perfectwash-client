import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './theadmin/admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: 'admin',
    loadChildren: () => import('./theadmin/theadmin.module').then(m => m.TheadminModule)
   },
  {
    path: '**',
    component: PagenotfoundComponent
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
