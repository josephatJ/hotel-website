import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRoomsComponent } from './featured-rooms.component';

describe('FeaturedRoomsComponent', () => {
  let component: FeaturedRoomsComponent;
  let fixture: ComponentFixture<FeaturedRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
