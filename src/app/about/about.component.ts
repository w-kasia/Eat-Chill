
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  aboutImage = 'assets/images/burger-image.png';
  startValue = 0;
  // observer!: IntersectionObserver;

  // constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // this.setupIntersectionObserver();
    this.startCounter();
  }

  // setupIntersectionObserver() {
    // const options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0
    // };





//   this.observer = new IntersectionObserver((entries) => {
// entries.forEach((entry) => {
//   if(entry.isIntersecting) {
//     this.startCounter();
//     this.observer.unobserve(entry.target);
//   }
// });

//   }, options);
// this.observer.observe(this.elementRef.nativeElement)
// }

startCounter() {
  const interval = setInterval(() => {
        this.startValue++;
        if(this.startValue === 8) {
          clearInterval(interval);
}
}, 200);
}

}

