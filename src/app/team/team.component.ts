import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{

  ImageOfChefFirst = 'assets/images/chef1.jpg';
  ImageOfChefSecond = 'assets/images/chef3.jpg';
  ImageOfChefThird = 'assets/images/chef2.jpg';

  ngOnInit() {
    const chefsName = document.querySelectorAll('.chefName');

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

    chefsName.forEach(chefName => {
      observer.observe(chefName);
    });
  }
}
