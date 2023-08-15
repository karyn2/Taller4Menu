import { Component, OnInit } from '@angular/core';
import {JsonJuguetesService} from '../json-juguetes.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.component.html',
  styleUrls: ['./juguetes.component.css'],
  animations: [
    trigger('cardHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' })),
      transition('normal <=> hovered', animate('0.3s ease-in-out'))
    ])
  ]
})
export class JuguetesComponent  implements OnInit{
  jsonData$: Observable<any> | undefined;
  
  hoveredCardIndex: number = -1;
  constructor(private juguetesService: JsonJuguetesService) {}

  ngOnInit(): void {
    this.jsonData$ = this.juguetesService.getJsonData();
  }
  bannerAnimationState: 'hidden' | 'visible' = 'hidden';

  showBanner() {
    this.bannerAnimationState = 'visible';
  }

  hideBanner() {
    this.bannerAnimationState = 'hidden';
  }
}
