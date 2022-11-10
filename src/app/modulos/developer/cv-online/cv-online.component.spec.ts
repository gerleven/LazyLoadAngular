import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvOnlineComponent } from './cv-online.component';

describe('CvOnlineComponent', () => {
  let component: CvOnlineComponent;
  let fixture: ComponentFixture<CvOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
