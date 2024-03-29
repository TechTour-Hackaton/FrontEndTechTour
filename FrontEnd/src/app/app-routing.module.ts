import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './modules/home/header/header.component';
import { MainComponent } from './modules/home/main/main.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { ListDestinationsComponent } from './modules/destination/list-destinations/list-destinations.component';

const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch:'full'},
  {path: 'header',component: HeaderComponent},
  {path: 'main',component: MainComponent},
  {path: 'login',component: LoginComponent},
  {path: 'list-destinations',component: ListDestinationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
