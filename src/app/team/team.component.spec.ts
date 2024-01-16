import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent]
    });
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the team component', () => {
    expect(component).toBeTruthy();
  });

  it('should render headings, images and paragraphs', () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    const heading1 = fixture.nativeElement.querySelectorAll('h1');
    const heading2 = fixture.nativeElement.querySelectorAll('h1');

    expect(images.length).toBeGreaterThan(0);
    for(const image of images) {
      expect(image.complete).toBe(false);
    }
    expect(paragraphs.length).toBeGreaterThan(0);
    for(const paragraph of paragraphs) {
      expect(paragraph.textContent).toBeTruthy();
    }
    expect(heading1).toBeTruthy();
    expect(heading2).toBeTruthy();
  });
});
