import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeBackgroundImage = 'assets/backgroundpicture.jpg';
  restaurantImage = 'assets/images/flowers.jpg';

  constructor(private router: Router) {}

  goToReservation() {
    this.router.navigate(['/reservation']);
  }
}
