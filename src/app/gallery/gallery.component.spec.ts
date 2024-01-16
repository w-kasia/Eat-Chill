import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, NavbarComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the gallery component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the images array', () => {
    expect(component.images).toBeDefined();
    expect(component.images.length).toBeGreaterThan(0);
  });

  it('should preview the correct image', () => {
    const imageIndex = 1;
    component.onPreviewImage(imageIndex);

    expect(component.currentIndex).toEqual(imageIndex);
    expect(component.currentLightboxImage).toEqual(component.images[imageIndex]);
  });

  it('should navigate to the previous image in the lightbox when goToPrev method is called', () => {
    component.currentIndex = 1;
    component.goToPrev();

    expect(component.currentIndex).toEqual(0);
    expect(component.currentLightboxImage).toEqual(component.images[0]);
  });

  it('should navigate to the next image in the lightbox when goToNext method is called', () => {
    component.currentIndex = 1;
    component.goToNext();

    expect(component.currentIndex).toEqual(2);
    expect(component.currentLightboxImage).toEqual(component.images[2]);
  });

  it('should close the lightbox and reset the preview state when closePreview method is called', () => {
    component.previewImage = true;
    component.showMask = true;
    component.closePreview();

    expect(component.previewImage).toBeFalsy();
    expect(component.showMask).toBeFalsy();
  });
});
