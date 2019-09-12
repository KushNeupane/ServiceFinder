import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcitiesComponent } from './addcities.component';

describe('AddcitiesComponent', () => {
  let component: AddcitiesComponent;
  let fixture: ComponentFixture<AddcitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
