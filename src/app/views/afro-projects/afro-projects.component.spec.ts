import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfroProjectsComponent } from './afro-projects.component';

describe('AfroProjectsComponent', () => {
  let component: AfroProjectsComponent;
  let fixture: ComponentFixture<AfroProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfroProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfroProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
