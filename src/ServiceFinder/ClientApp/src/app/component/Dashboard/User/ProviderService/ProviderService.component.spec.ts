import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServiceComponent } from './providerService.component';

describe('ProviderServiceComponent', () => {
  let component: ProviderServiceComponent;
  let fixture: ComponentFixture<ProviderServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
