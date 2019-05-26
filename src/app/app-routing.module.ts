import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RidedetailsComponent } from './ridedetails/ridedetails.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'ride-details', component: RidedetailsComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }