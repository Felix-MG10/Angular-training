import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskComponent } from './list-task.component';

describe('HomeTaskComponent', () => {
  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTaskComponent]
    });
    fixture = TestBed.createComponent(ListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});