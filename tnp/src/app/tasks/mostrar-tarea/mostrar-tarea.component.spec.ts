import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTareaComponent } from './mostrar-tarea.component';

describe('MostrarTareaComponent', () => {
  let component: MostrarTareaComponent;
  let fixture: ComponentFixture<MostrarTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
