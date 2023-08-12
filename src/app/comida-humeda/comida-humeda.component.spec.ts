import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaHumedaComponent } from './comida-humeda.component';

describe('ComidaHumedaComponent', () => {
  let component: ComidaHumedaComponent;
  let fixture: ComponentFixture<ComidaHumedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidaHumedaComponent]
    });
    fixture = TestBed.createComponent(ComidaHumedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
