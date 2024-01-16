import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestimonialsComponent } from './testimonials.component';

describe('TestimonialsComponent', () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TestimonialsComponent]
    });
    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should create the testimonials component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch testimonials from json file', () => {
    const mockTestimonials = [
      { review: 'Test Review', name: 'Tom'},
      { review: 'Test Review', name: 'Mary'},
    ];

    component.ngOnInit();
    const req = httpMock.expectOne('/assets/testimonials.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockTestimonials);
    expect(component.testimonials).toEqual(mockTestimonials);
  })
});
