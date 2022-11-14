import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDinamicaComponent } from './agenda-dinamica.component';

describe('AgendaDinamicaComponent', () => {
  let component: AgendaDinamicaComponent;
  let fixture: ComponentFixture<AgendaDinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaDinamicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
