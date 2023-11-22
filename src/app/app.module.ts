
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore, AngularFirestoreModule } from '@angular/fire/firestore';


// const firebaseConfig = {
//   apiKey: "AIzaSyBKE2TEyOQoVsBP961Qg5o35fWrHnKJh04",

//   authDomain: "restaurant-website-a9745.firebaseapp.com",

//   databaseURL: "https://restaurant-website-a9745-default-rtdb.firebaseio.com",

//   projectId: "restaurant-website-a9745",

//   storageBucket: "restaurant-website-a9745.appspot.com",

//   messagingSenderId: "172598582903",

//   appId: "1:172598582903:web:d5aa572f2ee61176cff072",

//   measurementId: "G-LWX885J2D6"
//   }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    AboutComponent,
    ReservationComponent,
    ErrorComponent,
    FooterComponent,
    NavbarComponent,
    TeamComponent,
    TestimonialsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
