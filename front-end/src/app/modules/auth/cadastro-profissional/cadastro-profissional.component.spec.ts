import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProfissionalComponent } from './cadastro-profissional.component';

describe('CadastroProfissionalComponent', () => {
  let component: CadastroProfissionalComponent;
  let fixture: ComponentFixture<CadastroProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroProfissionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
