import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  burgerImage = 'assets/images/burger-image.png';

  ngOnInit() {
    const images = document.querySelectorAll('img');
    const paragraphs = document.querySelectorAll('p');
    const aboutSubheadings = document.querySelectorAll('h2');
    const aboutHeadings = document.querySelectorAll('h1');

     const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

     const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInTop');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    images.forEach(image => {
      observer.observe(image);
    });
    paragraphs.forEach(paragraph => {
      observer.observe(paragraph);
    });
    aboutSubheadings.forEach(aboutSubheading => {
      observer.observe(aboutSubheading);
    });
    aboutHeadings.forEach(aboutHeading => {
      observer.observe(aboutHeading);
    });
  }
}
