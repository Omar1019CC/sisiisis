import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

 
  register({ email, password }: any): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  
  login({ email, password }: any): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }


  logout(): Promise<void> {
    return this.auth.signOut();
  }


   isLoggedIn(): Observable<firebase.User | null> { 
     return this.auth.user;
    
   }



  // Método para enviar un correo para restablecer contraseña
  resetPassword(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }


  

}


