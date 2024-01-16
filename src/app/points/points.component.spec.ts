import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PointsComponent } from './points.component';

describe('PointsComponent', () => {
  let component: PointsComponent;
  let fixture: ComponentFixture<PointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointsComponent]
    });
    fixture = TestBed.createComponent(PointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the points component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all icons, headings and descriptions', () => {
    const icons = fixture.nativeElement.querySelectorAll('img');
    const heading = fixture.nativeElement.querySelectorAll('h1');
    const description = fixture.nativeElement.querySelectorAll('p');

    expect(icons.length).toEqual(6);
    expect(heading.length).toEqual(6);
    expect(description.length).toEqual(6);
  });
});
