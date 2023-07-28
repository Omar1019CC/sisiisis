import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/user/header/header.component';
import { FooterComponent } from './layout/user/footer/footer.component';
import { MyProfileComponent } from './layout/my-profile/my-profile.component';
import { ToursListComponent } from './modules/home/tours-list/tours-list.component';
import { HomeComponent } from './modules/home/home.component';
import { SingleTourComponent } from './modules/home/single-tour/single-tour.component';
import { CartComponent } from './modules/home/cart/cart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TourService } from './services/tours.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/login/register/register.component';
import { SignInComponent } from './modules/login/sign-in/sign-in.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ProfileSignInComponent } from './layout/profile-sign-in/profile-sign-in.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyProfileComponent,
    ToursListComponent,
    HomeComponent,
    SingleTourComponent,
    CartComponent,
    RegisterComponent,
    ProfileSignInComponent,
    SignInComponent,
    NotFoundComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }


