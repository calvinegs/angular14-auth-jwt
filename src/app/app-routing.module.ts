import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { RoleGuard } from './shared/guard/role.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'user', component: BoardUserComponent, canActivate:[AuthGuard] },
  { path: 'moderator', component: BoardModeratorComponent, canActivate:[AuthGuard, RoleGuard], data: {roles: ['moderator']} },
  { path: 'admin', component: BoardAdminComponent, canActivate:[AuthGuard, RoleGuard], data: {roles: ['admin']} },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
