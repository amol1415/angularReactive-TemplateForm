import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';
import { ApiComponent } from './Crud Operation/api/api.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "react", component: ReactComponent },
    { path: "api", component: ApiComponent }


];
