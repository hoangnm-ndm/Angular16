import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhChoNamComponent } from './danh-cho-nam.component';

describe('DanhChoNamComponent', () => {
  let component: DanhChoNamComponent;
  let fixture: ComponentFixture<DanhChoNamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhChoNamComponent]
    });
    fixture = TestBed.createComponent(DanhChoNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
