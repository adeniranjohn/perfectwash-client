import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './theadmin/admin/admin.component';


const routes: Routes = [

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
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
