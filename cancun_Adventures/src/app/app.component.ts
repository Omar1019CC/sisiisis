import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cancun_adventures_app';


  constructor( private authService: AuthService) {}

  ngOnInit(){

    this.authService.isLoggedIn().subscribe(user => {
      if (user) {
        console.log('El usuario está autenticado:', user);
      } else {
        console.log('El usuario NO está autenticado');
      }
    });
  }


}


