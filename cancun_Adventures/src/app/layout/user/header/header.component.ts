import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

isLoggedIn = false;
isMenuOpen = false;

  constructor(private authService: AuthService, private router: Router){}


  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

    logout(): void {

     this.authService.logout();
   }

   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // El usuario presionó la tecla Enter, realizar acción...
    } else if (event.key === 'Escape') {
      // El usuario presionó la tecla Escape, realizar otra acción...
    }
  }


}




