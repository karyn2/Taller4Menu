import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarAccesoriosComponent } from './auxiliar-accesorios.component';

describe('AuxiliarAccesoriosComponent', () => {
  let component: AuxiliarAccesoriosComponent;
  let fixture: ComponentFixture<AuxiliarAccesoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxiliarAccesoriosComponent]
    });
    fixture = TestBed.createComponent(AuxiliarAccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
