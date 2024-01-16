import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [ErrorComponent, routingComponents]
    });
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the error component', () => {
    expect(component).toBeTruthy();
  });

  it('should call goHome method when the button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.goHome();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  })
});

