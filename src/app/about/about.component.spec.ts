import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, BrowserModule],
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the about component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all paragraphs, headings and image', () => {
    let paragraphs = fixture.nativeElement.querySelectorAll('p');
    let heading = fixture.nativeElement.querySelector('h1');
    let subheading = fixture.nativeElement.querySelector('h2');
    let image = fixture.nativeElement.querySelector('img');

    expect(paragraphs.length).toBe(3);
    expect(heading).toBeTruthy();
    expect(subheading).toBeTruthy();
    expect(image).toBeTruthy();
  });
});
