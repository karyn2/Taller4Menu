import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarAlimentosComponent } from './auxiliar-alimentos.component';

describe('AuxiliarAlimentosComponent', () => {
  let component: AuxiliarAlimentosComponent;
  let fixture: ComponentFixture<AuxiliarAlimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxiliarAlimentosComponent]
    });
    fixture = TestBed.createComponent(AuxiliarAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
