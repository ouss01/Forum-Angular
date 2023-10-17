import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogregComponent } from './logreg/logreg.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuardService } from './route-guard.service';
import { MessagerieComponent } from './messagerie/messagerie.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']} },
  { path: 'messages', component: MessagerieComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']} },
  { path: '', component: LogregComponent },
  { path: 'register', component: RegisterComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']} },
  { path: 'admin', component: DashboardComponent,canActivate:[RouteGuardService],data:{expectedRole:['admin']}}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
