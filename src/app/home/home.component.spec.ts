import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { AboutComponent } from '../about/about.component';
import { PointsComponent } from '../points/points.component';
import { TeamComponent } from '../team/team.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LazyLoadImageModule],
      declarations: [HomeComponent, NavbarComponent, FooterComponent, TestimonialsComponent, AboutComponent, PointsComponent, TeamComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navbar, about, team, testimonials and footer components', () => {
    const navbar = fixture.nativeElement.querySelector('app-navbar');
    const about = fixture.nativeElement.querySelector('app-about');
    const team = fixture.nativeElement.querySelector('app-team');
    const testimonials = fixture.nativeElement.querySelector('app-testimonials');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navbar).toBeTruthy();
    expect(about).toBeTruthy();
    expect(team).toBeTruthy();
    expect(testimonials).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should navigate to reservation when goToReservation is called', () => {
    component.goToReservation();

    expect(router.navigate).toHaveBeenCalledWith(['/reservation']);
  });
});
