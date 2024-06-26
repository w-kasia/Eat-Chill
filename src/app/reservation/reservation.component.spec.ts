import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationComponent } from './reservation.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())],
      declarations: [ReservationComponent, NavbarComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the reservation component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation and footer components', () => {
    const navbar = fixture.nativeElement.querySelector('app-navbar');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navbar).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should save the data and reset the form on submit', () => {
    const saveDataSpy = spyOn(component, 'saveData');
    const resetSpy = spyOn(component.reservationForm, 'reset');

    component.onSubmit();

    expect(saveDataSpy).toHaveBeenCalled();
    expect(resetSpy).toHaveBeenCalled();
  })
});
