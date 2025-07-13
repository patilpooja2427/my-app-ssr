import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeImplemantationComponent } from './pipe-implemantation.component';

describe('PipeImplemantationComponent', () => {
  let component: PipeImplemantationComponent;
  let fixture: ComponentFixture<PipeImplemantationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeImplemantationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeImplemantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
