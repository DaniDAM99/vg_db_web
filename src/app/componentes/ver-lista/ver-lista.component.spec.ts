import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerListaComponent } from './ver-lista.component';

describe('VerListaComponent', () => {
  let component: VerListaComponent;
  let fixture: ComponentFixture<VerListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
