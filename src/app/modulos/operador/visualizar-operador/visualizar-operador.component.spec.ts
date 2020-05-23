import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarOperadorComponent } from './visualizar-operador.component';

describe('VisualizarOperadorComponent', () => {
  let component: VisualizarOperadorComponent;
  let fixture: ComponentFixture<VisualizarOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
