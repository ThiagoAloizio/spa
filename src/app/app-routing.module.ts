import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccountLoginComponent } from './accountlogin/accountlogin.component';

const routes: Routes = [
  { path: '', redirectTo: 'accountlogin', pathMatch: 'full'},
  { path: 'accountlogin', component: AccountLoginComponent },
  { path: ':id/main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
