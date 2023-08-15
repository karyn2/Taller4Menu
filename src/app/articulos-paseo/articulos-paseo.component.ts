import { Component, OnInit  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-articulos-paseo',
  templateUrl: './articulos-paseo.component.html',
  styleUrls: ['./articulos-paseo.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(900)
      ])
    ])
  ]
})
export class ArticulosPaseoComponent implements OnInit {
  jsonData: any;
  constructor(private jsonService: JsonService) {}
  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.jsonData = data;      
    });
  }
}
