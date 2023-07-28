import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NotFoundComponent } from '../layout/not-found/not-found.component';

@Injectable({
  providedIn: 'root'
})
export class NotFoundGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    this.router.navigateByUrl('/not-found');
    return false;
  }
}
