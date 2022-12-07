import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsItemsComponent } from './details-items.component';

describe('DetailsItemsComponent', () => {
  let component: DetailsItemsComponent;
  let fixture: ComponentFixture<DetailsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
