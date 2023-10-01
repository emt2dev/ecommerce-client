import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudproductsComponent } from './crudproducts.component';

describe('CrudproductsComponent', () => {
  let component: CrudproductsComponent;
  let fixture: ComponentFixture<CrudproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
