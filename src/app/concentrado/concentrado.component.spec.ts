import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentradoComponent } from './concentrado.component';

describe('ConcentradoComponent', () => {
  let component: ConcentradoComponent;
  let fixture: ComponentFixture<ConcentradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcentradoComponent]
    });
    fixture = TestBed.createComponent(ConcentradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
