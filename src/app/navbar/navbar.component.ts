import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  homeBackgroundImage = 'assets/images/bgimage.jpg';


  // ngOnInit(): void {
  //   window.addEventListener('scroll', this.scroll, true)
  // }

  // scroll = (): void => {

  //  let scrollHeigth;

  //  if(window.innerWidth < 350){
  //   scrollHeigth = 150;
  //  }else if(window.innerWidth < 500 && window.innerWidth > 350){
  //   scrollHeigth = 250;
  //  }else if(window.innerWidth < 700 && window.innerWidth > 500){
  //   scrollHeigth = 350;
  //  }else if(window.innerWidth < 1000 && window.innerWidth > 700){
  //   scrollHeigth = 500;
  //  }else{
  //    scrollHeigth = 650;
  //  }

  //   if(window.scrollY >= scrollHeigth){
  //     document.body.style.setProperty('--navbar-scroll', "white");
  //     document.body.style.setProperty('--navbar-scroll-text', "black");
  //     document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
  //   }else if(window.scrollY < scrollHeigth){
  //     document.body.style.setProperty('--navbar-scroll', "transparent");
  //     document.body.style.setProperty('--navbar-scroll-text', "white");
  //     document.body.style.setProperty('--navbar-scroll-shadow', "none");
  //   }
  // }



  //ina próba

  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}

