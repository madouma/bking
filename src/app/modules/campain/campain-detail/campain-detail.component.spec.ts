import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampainDetailComponent } from './campain-detail.component';

describe('CampainDetailComponent', () => {
  let component: CampainDetailComponent;
  let fixture: ComponentFixture<CampainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampainDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
