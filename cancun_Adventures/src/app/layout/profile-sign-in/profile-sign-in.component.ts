import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-sign-in',
  templateUrl: './profile-sign-in.component.html',
  styleUrls: ['./profile-sign-in.component.css']
})
export class ProfileSignInComponent {
  

  constructor(private router: Router){ }

  redirectSignIn(): void {
    this.router.navigate(['/login']);
  }

  redirectRegister(): void {
    this.router.navigate(['/register']);
  }

}
