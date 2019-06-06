import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiminialsComponent } from './testiminials.component';

describe('TestiminialsComponent', () => {
  let component: TestiminialsComponent;
  let fixture: ComponentFixture<TestiminialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestiminialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiminialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
