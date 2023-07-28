import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  constructor(private authService: AuthService, private router: Router){}


  logout(): void {
    this.authService.logout()
      .then(() => {
    
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
  }

}
