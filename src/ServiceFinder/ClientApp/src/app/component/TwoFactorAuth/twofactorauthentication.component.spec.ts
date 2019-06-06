import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofactorauthenticationComponent } from './twofactorauthentication.component';

describe('TwofactorauthenticationComponent', () => {
  let component: TwofactorauthenticationComponent;
  let fixture: ComponentFixture<TwofactorauthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwofactorauthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwofactorauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
