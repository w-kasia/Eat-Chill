import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('./assets/testimonials.json').subscribe(data => {
      this.testimonials = data;
    },
    error => {
        console.log('Error fetching json data in Testimonials Component');
        this.errorMessage = 'Sorry, we can not display testimonials now. Try again later.'
    });

    const headings = document.querySelectorAll('h1');
    const subheadings = document.querySelectorAll('h2');

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

    headings.forEach(heading => {
      observer.observe(heading);
    });
    subheadings.forEach(subheading => {
      observer.observe(subheading);
    });
  }
}

