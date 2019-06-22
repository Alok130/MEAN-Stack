import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllItemDetailsComponent } from './all-item-details.component';

describe('AllItemDetailsComponent', () => {
  let component: AllItemDetailsComponent;
  let fixture: ComponentFixture<AllItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
