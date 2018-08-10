import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDistributorComponent } from './select-distributor.component';

describe('SelectDistributorComponent', () => {
  let component: SelectDistributorComponent;
  let fixture: ComponentFixture<SelectDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
