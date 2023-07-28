import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = true;
  private isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService,) {}



  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.authService.isLoggedIn().pipe(
  //     map(user => {
  //       if (user) {
  //         // El usuario está autenticado, permitir el acceso a la ruta protegida
  //         console.log("autenticado");
  //         return true;
  //       } else {
  //         // El usuario no está autenticado, redirigir a la página de inicio de sesión
  //         console.log("NO autenticado")
  //         //  this.router.navigate(['/cart/auth']);
  //         return false;
  //       }
  //     })
  //   );
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      map(user => {
        if (user) {
          // El usuario está autenticado, permitir el acceso a la ruta protegida
          console.log("autenticado");
          this.isLoggedIn = !!user;
          return true;
        } else {
          // El usuario no está autenticado, redirigir a la página de inicio de sesión
          console.log("NO autenticado")
          //  this.router.navigate(['/cart/auth']);
          return false;
        }
      }
      )
    );
  }


  
 
//Corregir hardcodeado
  login(username: string, password: string): void {

    if (username === 'email' && password === 'password') {
      this.isAuthenticated = true;
      this.router.navigate(['/home']);
    } else {
      this.isAuthenticated = false;
    }
  }

  logout(): void {

    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}

