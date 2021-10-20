import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevensegComponent } from './sevenseg.component';

describe('SevensegComponent', () => {
  let component: SevensegComponent;
  let fixture: ComponentFixture<SevensegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevensegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevensegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
