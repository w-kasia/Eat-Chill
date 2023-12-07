import { Component } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent {

  points: any = [
    { heading: 'Master Chefs',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, commodi?',
      src: 'assets/icons/icon-chef.svg',
      alt: 'Icon of chef'},
      { heading: 'Quality Food',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, commodi?',
      src: 'assets/icons/icon-food.svg',
      alt: 'Icon of food'},
      { heading: 'Certificate',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, commodi?',
      src: 'assets/icons/icon-certificate.svg',
      alt: 'Icon of certificate'},
      { heading: '7 days in week',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, commodi?',
      src: 'assets/icons/icon-clock.svg',
      alt: 'Icon of clock'},
      { heading: 'Live Music',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, commodi?',
      src: 'assets/icons/icon-party.svg'},
      { heading: 'Pets',
      description: 'We are pet-friendly restaurant.',
      src: 'assets/icons/icon-pet.svg',
      alt: 'Icon of pet'}
  ];

}
