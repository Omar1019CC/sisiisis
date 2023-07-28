import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './modules/home/cart/cart.component';
import { SignInComponent } from './modules/login/sign-in/sign-in.component';
import { SingleTourComponent } from './modules/home/single-tour/single-tour.component';
import { RegisterComponent } from './modules/login/register/register.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { NotFoundGuard } from './guards/not-found.guard';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),

  },
  {
    path: 'cart',
    // canActivate: [AuthGuard],
    data: { showLoginMessage: true }, // Mostrar mensaje de "Inicia sesión" cuando no esté logueado
    component: CartComponent
  },
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'tour/:id',
    component: SingleTourComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
