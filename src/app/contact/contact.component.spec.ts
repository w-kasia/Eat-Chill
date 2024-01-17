import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
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

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())],
      declarations: [ContactComponent, NavbarComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the contact form', () => {
    expect(component).toBeTruthy();
  });

  it('should render navbar and footer components', () => {
    const navbar = fixture.nativeElement.querySelector('app-navbar');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navbar).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should save data when form is submitted and reset form', () => {
    spyOn(component, 'saveData');
    const form: any = { resetForm: jasmine.createSpy('resetForm') };

    component.onSubmit(form);
    expect(component.saveData).toHaveBeenCalled();
    expect(form.resetForm).toHaveBeenCalled();
    setTimeout(() => {
      expect(component.isSubmit).toBeFalse();
    }, 4000);
  });
});
