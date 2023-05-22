import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhChoNuComponent } from './danh-cho-nu.component';

describe('DanhChoNuComponent', () => {
  let component: DanhChoNuComponent;
  let fixture: ComponentFixture<DanhChoNuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhChoNuComponent]
    });
    fixture = TestBed.createComponent(DanhChoNuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
