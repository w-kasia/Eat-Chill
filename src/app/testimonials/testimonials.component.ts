import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
testimonials: any[] = [];

constructor(private http: HttpClient) {
  this.fetchTestimonials();
}

fetchTestimonials() {
  this.http.get<any[]>('assets/data.json').subscribe(data => {
    this.testimonials = data;
  });
}
}

