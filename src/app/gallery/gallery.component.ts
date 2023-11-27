import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  images = ['pizza1.jpg', 'burger1.jpg', 'shrimp.jpg', 'pasta.jpg', 'pancakes.jpg','burger2.jpg', 'pizza2.jpg', 'cake1.jpg', 'cake2.jpg'];
}
