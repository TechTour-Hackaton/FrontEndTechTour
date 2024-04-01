import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './modules/home/header/header.component';
import { MainComponent } from './modules/home/main/main.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { ListPlansComponent } from './modules/package/list-plans/list-plans.component';
import { PlanDetailsComponent } from './modules/package/plan-details/plan-details.component';
import { ListDestinationsComponent } from './modules/destination/list-destinations/list-destinations.component';
import { ListOrderComponent } from './modules/shopping-cart/list-order/list-order.component';
import { OrderComponent } from './modules/shopping-cart/order/order.component';
import { InfoDestinationComponent } from './modules/destination/info-destination/info-destination.component';
import { RegisterComponent } from './modules/authentication/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'main',pathMatch:'full'},
  {path: 'header',component: HeaderComponent},
  {path: 'main',component: MainComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'list-packages',component: ListPlansComponent},
  {path: 'info-package',component: PlanDetailsComponent},
  {path: 'list-destinations',component: ListDestinationsComponent},
  {path: 'info-destination',component: InfoDestinationComponent},
  {path: 'list-order',component: ListOrderComponent},
  {path: 'order',component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
