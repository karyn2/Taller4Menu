import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: string[] = [ // Array de imágenes
  '/assets/img/mascota1.png',
  '/assets/img/mascota4.png',
  '/assets/img/mascota5.png'
];

activeIndex: number = 0; // Índice de la imagen activa

nextImage() {
  this.activeIndex = (this.activeIndex + 1) % this.images.length;
}

prevImage() {
  this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
}
}
