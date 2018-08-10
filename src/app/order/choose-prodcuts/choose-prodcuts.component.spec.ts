import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProdcutsComponent } from './choose-prodcuts.component';

describe('ChooseProdcutsComponent', () => {
  let component: ChooseProdcutsComponent;
  let fixture: ComponentFixture<ChooseProdcutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseProdcutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProdcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
