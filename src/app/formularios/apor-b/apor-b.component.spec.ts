import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AporBComponent } from './apor-b.component';

describe('AporBComponent', () => {
  let component: AporBComponent;
  let fixture: ComponentFixture<AporBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AporBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AporBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
