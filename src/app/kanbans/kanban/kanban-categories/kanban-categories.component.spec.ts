import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCategoriesComponent } from './kanban-categories.component';

describe('KanbanCategoriesComponent', () => {
  let component: KanbanCategoriesComponent;
  let fixture: ComponentFixture<KanbanCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
