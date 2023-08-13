import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('normal', style({
        transform: 'scale(1)',
      })),
      state('hovered', style({
        transform: 'scale(1.2)',
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),
  ],
})
export class HomeComponent {

  hoverState = 'normal';

  onHover() {
    this.hoverState = 'hovered';
    console.log('sobre la imagen')
  }

  onLeave() {
    this.hoverState = 'normal';
    console.log('fuera de la imagen')
  }

  images: string[] = [ // Array de imágenes
  '/assets/img/mascota6.png',
  '/assets/img/mascotas7.png',
  '/assets/img/mascotas8.png'
  ];

  activeIndex: number = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 8000); // Cambia la imagen cada 5 segundos
  }

  stopAutoPlay(): void {
    clearInterval(this.interval);
  }

  prevImage(): void {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  

}
