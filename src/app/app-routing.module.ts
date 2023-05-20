import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { RegistrationComponent } from './registration/registration.component';
import { AlbumModule } from './album/album.module';

const routes: Routes = [
  //eager loading
  { path: 'users', component: UsersComponent },
  { path: 'companies', component: CompaniesComponent },
  {//lazy loading
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
    {//lazy loading
      path: '',
      loadChildren: () => import('./post/post.module').then(m => m.PostModule)
    },
  {
    path:'registration', component: RegistrationComponent
  },
  {
    path:'albums',
    loadChildren: () => import('./album/album.module').then(m=>m.AlbumModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
