import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  introPics = [
    {
      title: 'step 1',
      img: '/assets/images/pwa-step-1.jpg'
    },
    {
      title: 'step 2',
      img: '/assets/images/pwa-step-2.jpg'
    },
    {
      title: 'step 3',
      img: '/assets/images/pwa-step-3.jpg'
    }
  ];

  introPicStep: number = 0;

  constructor() { }

  ngOnInit() {
  }

  stepChange(direction) {
    direction === 'next' ? this.introPicStep += 1 : this.introPicStep -= 1;
  }

}
