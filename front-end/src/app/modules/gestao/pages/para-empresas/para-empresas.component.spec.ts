import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaEmpresasComponent } from './para-empresas.component';

describe('ParaEmpresasComponent', () => {
  let component: ParaEmpresasComponent;
  let fixture: ComponentFixture<ParaEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParaEmpresasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
