import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogprofileComponent } from './blogprofile.component';

describe('BlogprofileComponent', () => {
  let component: BlogprofileComponent;
  let fixture: ComponentFixture<BlogprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
