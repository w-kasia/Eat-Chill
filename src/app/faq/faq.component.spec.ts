import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqComponent } from './faq.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqComponent, NavbarComponent, FooterComponent],
      imports: [RouterTestingModule, LazyLoadImageModule]
    });
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the faq component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to contact page when goToContact method is called', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.goToContact();
    expect(navigateSpy).toHaveBeenCalledWith(['/contact']);
  })
});
