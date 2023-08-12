import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosPaseoComponent } from './articulos-paseo.component';

describe('ArticulosPaseoComponent', () => {
  let component: ArticulosPaseoComponent;
  let fixture: ComponentFixture<ArticulosPaseoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticulosPaseoComponent]
    });
    fixture = TestBed.createComponent(ArticulosPaseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
