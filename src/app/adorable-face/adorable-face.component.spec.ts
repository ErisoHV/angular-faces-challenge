import {
  waitForAsync,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {AdorableFaceComponent} from './adorable-face.component';

describe('AdorableFaceComponent', () => {
  let component: AdorableFaceComponent;
  let fixture: ComponentFixture<AdorableFaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdorableFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdorableFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
