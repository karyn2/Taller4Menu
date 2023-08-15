import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner',
  template: `
<div [@bannerAnimation]="animationState" class="banner bg-info text-white p-3 rounded">
  ¡Descuento del 20% en todos los productos!
</div>
  `,
  animations: [
    trigger('bannerAnimation', [
      state('hidden', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('hidden <=> visible', animate('500ms ease-in-out'))
    ])
  ]
})
export class BannerComponent {
  @Input() animationState: 'hidden' | 'visible' = 'hidden';
}
