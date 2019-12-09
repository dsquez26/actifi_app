import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayerRowComponent } from './new-player-row.component';

describe('NewPlayerRowComponent', () => {
  let component: NewPlayerRowComponent;
  let fixture: ComponentFixture<NewPlayerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewPlayerRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
