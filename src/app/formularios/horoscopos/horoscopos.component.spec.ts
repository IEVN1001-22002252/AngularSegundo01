import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscoposComponent } from './horoscopos.component';

describe('HoroscoposComponent', () => {
  let component: HoroscoposComponent;
  let fixture: ComponentFixture<HoroscoposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoroscoposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscoposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
