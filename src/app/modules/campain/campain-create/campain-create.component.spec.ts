import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLibraryComponent } from './file-library.component';

describe('FileLibraryComponent', () => {
  let component: FileLibraryComponent;
  let fixture: ComponentFixture<FileLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
