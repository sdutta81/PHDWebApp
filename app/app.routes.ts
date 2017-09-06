import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UserLogin, UserDetails } from './user';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: UserLogin},
    {path: 'details/:uid/:guid', component: UserDetails}
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});