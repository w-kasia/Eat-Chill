
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DatePipe } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';        
import { getAuth, provideAuth } from '@angular/fire/auth';        
import { getFirestore, provideFirestore } from '@angular/fire/firestore';        
import { getStorage, provideStorage } from '@angular/fire/storage';        
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';        

import { environment } from '../environments/environment';         

// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';



const firebaseConfig = {
  apiKey: "AIzaSyBKE2TEyOQoVsBP961Qg5o35fWrHnKJh04",

  authDomain: "restaurant-website-a9745.firebaseapp.com",

  databaseURL: "https://restaurant-website-a9745-default-rtdb.firebaseio.com",

  projectId: "restaurant-website-a9745",

  storageBucket: "restaurant-website-a9745.appspot.com",

  messagingSenderId: "172598582903",

  appId: "1:172598582903:web:d5aa572f2ee61176cff072",

  measurementId: "G-LWX885J2D6"
  }

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // ContactComponent,
    // MenuComponent,
    AboutComponent,
    // ReservationComponent,
    // ErrorComponent,
    FooterComponent,
    NavbarComponent,
    TeamComponent,
    TestimonialsComponent,
    GalleryComponent
    // FaqComponent

  ],
  imports: [

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
