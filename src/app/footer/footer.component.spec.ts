import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { Router } from '@angular/router';
import { AppRoutingModule, routingComponents } from '../app-routing.module';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [FooterComponent, routingComponents],
      providers: [Router]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to reservation page when goToReservation() is called', () => {
    spyOn(router, 'navigate');
    component.goToReservation();

    expect(router.navigate).toHaveBeenCalledWith(['/reservation']);
  })
});
