import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { routingComponents } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent, routingComponents]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should add navbar-inverse class when scrolling down', () => {
    spyOnProperty(window, 'pageYOffset').and.returnValue(300);

    component.onWindowScroll();
    expect(document.querySelector('.navbar')?.classList.contains('navbar-inverse')).toBe(true);
  });

  it('should remove navbar-inverse class when scrolling up', () => {
    spyOnProperty(window, 'pageYOffset').and.returnValue(100);

    component.onWindowScroll();
    expect(document.querySelector('.navbar')?.classList.contains('navbar-inverse')).toBe(false);
  });

  it('should scroll to aboutSection', () => {
    const aboutSection = document.createElement('div');
    aboutSection.id = 'aboutSection';

    document.body.appendChild(aboutSection);
    const scrollIntoViewSpy = spyOn(aboutSection, 'scrollIntoView');

    component.toAbout();
    expect(scrollIntoViewSpy).toHaveBeenCalled();
  });
});
