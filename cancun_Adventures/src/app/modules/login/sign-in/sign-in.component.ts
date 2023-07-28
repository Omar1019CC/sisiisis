import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  formLogin: FormGroup;
  username = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }



  onSubmit() {
    this.authService.login(this.formLogin.value)
      .then(response => {
        this.router.navigate(['/home']);

      })
      .catch(error => console.log(error));
  }




  redirectRegister(event?: Event) {

    this.router.navigate(['/register']);
    event?.preventDefault();
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }


}
