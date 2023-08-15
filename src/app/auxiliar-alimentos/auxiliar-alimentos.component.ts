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
    cardAnimation,
    trigger('hoverAnimation', [
      state('normal', style({
        transform: 'scale(1)',
      })),
      state('hovered', style({
        transform: 'scale(1.2)',
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),
    trigger('buttonAnimation', [
      state('normal', style({
        transform: 'rotate(0deg) scale(1)',
        backgroundColor: 'transparent',
      })),
      state('hovered', style({
        transform: 'rotate(360deg) scale(1.2)',
        //backgroundColor: '#28D1E6',
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),    
  ],
})
export class AuxiliarAlimentosComponent {

  hoverState = 'normal';

  onHover() {
    this.hoverState = 'hovered';
  }

  onLeave() {
    this.hoverState = 'normal';
  }

  buttonStates: string[] = Array.from({ length: 6 }, () => 'normal'); // Cambiar 5 por la cantidad de botones

  onButtonHover(buttonIndex: number) {
    this.buttonStates[buttonIndex] = 'hovered';
    console.log('sobre el botón');
  }

  onButtonLeave(buttonIndex: number) {
    this.buttonStates[buttonIndex] = 'normal';
    console.log('fuera del botón');
  }
}
