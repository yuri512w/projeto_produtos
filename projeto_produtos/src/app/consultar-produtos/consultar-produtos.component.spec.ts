import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProdutosComponent } from './consultar-produtos.component';

describe('ConsultarProdutosComponent', () => {
  let component: ConsultarProdutosComponent;
  let fixture: ComponentFixture<ConsultarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
