import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsArticleComponent } from './comments-article.component';

describe('CommentsArticleComponent', () => {
  let component: CommentsArticleComponent;
  let fixture: ComponentFixture<CommentsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
