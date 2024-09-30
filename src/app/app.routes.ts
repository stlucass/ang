import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path:" ",
        component: HomeComponent
    },
    {
        path: "login",
        pathMatch: "full",
        component: LoginComponent

    },
    {
        path: "produtos",
        component: ProdutosComponent

    }
];
