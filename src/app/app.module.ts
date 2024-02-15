import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { PointsComponent } from './points/points.component';
import { MenuService } from './menu.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    TeamComponent,
    TestimonialsComponent,
    PointsComponent
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
    LazyLoadImageModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
