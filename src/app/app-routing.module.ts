import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NotfoundComponent } from './notfound/notfound.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', canActivate: [AuthGuard], component: ServerComponent },
  { path: 'servers/:id/edit', component: ServerComponent },
  { path: 'Not-Found', component: NotfoundComponent },
  { path: '**', redirectTo: '/Not-Found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouting {

}
