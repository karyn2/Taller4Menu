import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

@Component({
  selector: 'app-auxiliar-alimentos',
  templateUrl: './auxiliar-alimentos.component.html',
  styleUrls: ['./auxiliar-alimentos.component.css'],
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
export class AuxiliarAlimentosComponent {

  hoverState = 'normal';

  onHover() {
    this.hoverState = 'hovered';
    console.log('sobre la imagen')
  }

  onLeave() {
    this.hoverState = 'normal';
    console.log('fuera de la imagen')
  }
}
