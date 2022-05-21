import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecntlyPlayedComponent } from './recntly-played.component';

describe('RecntlyPlayedComponent', () => {
  let component: RecntlyPlayedComponent;
  let fixture: ComponentFixture<RecntlyPlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecntlyPlayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecntlyPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
