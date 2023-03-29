import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlannerNewComponent } from './budget-planner-new.component';

describe('BudgetPlannerNewComponent', () => {
  let component: BudgetPlannerNewComponent;
  let fixture: ComponentFixture<BudgetPlannerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetPlannerNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetPlannerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
