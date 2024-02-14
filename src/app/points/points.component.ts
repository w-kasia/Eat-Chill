import { Component } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent {

  points: any = [
    { heading: 'Master Chefs',
      description: 'We have top chefs in our team. They will prepare a masterpiece for you.',
      src: 'assets/icons/icon-chef.svg',
      alt: 'Icon of chef'},
      { heading: 'Quality Food',
      description: 'All our dishes enjoy a good reputation. You will be over the moon.',
      src: 'assets/icons/icon-food.svg',
      alt: 'Icon of food'},
      { heading: 'Prizes',
      description: 'We have received many awards, which confirms the highest quality of our dishes.',
      src: 'assets/icons/icon-certificate.svg',
      alt: 'Icon of certificate'},
      { heading: '7 days in week',
      description: 'We are open every day from noon until the last guest leaves, all year round.',
      src: 'assets/icons/icon-clock.svg',
      alt: 'Icon of clock'},
      { heading: 'Live Music',
      description: 'We love artistic events. Guests can listen to live music every Friday and Saturday.',
      src: 'assets/icons/icon-party.svg'},
      { heading: 'Pets',
      description: 'We are pet-friendly place. You can visit our restaurant with your dog.',
      src: 'assets/icons/icon-pet.svg',
      alt: 'Icon of pet'}
  ];
}
