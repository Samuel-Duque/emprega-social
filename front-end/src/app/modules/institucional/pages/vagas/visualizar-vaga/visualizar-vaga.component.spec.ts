import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarVagaComponent } from './visualizar-vaga.component';

describe('VisualizarVagaComponent', () => {
  let component: VisualizarVagaComponent;
  let fixture: ComponentFixture<VisualizarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
