import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  restaurantImage = 'assets/images/couple.jpg';

  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
