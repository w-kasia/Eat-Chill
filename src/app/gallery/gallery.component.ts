import { Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  images = ['pizza1.jpg', 'burger1.jpg', 'shrimp.jpg', 'pasta.jpg', 'pancakes.jpg','burger2.jpg', 'pizza2.jpg', 'cake1.jpg', 'cake2.jpg'];

  previewImage = false;
  showMask = false;
  currentLightboxImage = this.images[0];
  currentIndex = 0;
  controls = true;

  onPreviewImage(index: number) {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.images[index];
  }

  goToPrev() {
    this.currentIndex = this.currentIndex -1;
    if(this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }

  goToNext() {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }

  closePreview() {
    this.previewImage = false;
    this.showMask = false;
  }
}
