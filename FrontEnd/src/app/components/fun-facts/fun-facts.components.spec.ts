import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactComponent } from './fun-facts.component';

describe('FunFact', () => {
  let component: FunFactComponent;
  let fixture: ComponentFixture<FunFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunFactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
