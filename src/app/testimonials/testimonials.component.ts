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
    this.http.get<any[]>('./assets/testimonialss.json').subscribe(data => {
      this.testimonials = data;
    },
    error => {
        console.log('Error fetchnig json data in Testimonials Component');
        this.errorMessage = 'Sorry, we can not display testimonials now. Try again later.'
    });
  }
}

