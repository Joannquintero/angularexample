import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceStudentsComponent } from './indice-students.component';

describe('IndiceStudentsComponent', () => {
  let component: IndiceStudentsComponent;
  let fixture: ComponentFixture<IndiceStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
