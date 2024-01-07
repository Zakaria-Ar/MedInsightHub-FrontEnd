import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: NewUserComponent},
  { path: 'forgot-password', component: ForgotComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) }, 
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) }, 
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, 
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
