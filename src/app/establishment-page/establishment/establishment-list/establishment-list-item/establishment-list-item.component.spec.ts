import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentListItemComponent } from './establishment-list-item.component';

describe('EstablishmentListItemComponent', () => {
  let component: EstablishmentListItemComponent;
  let fixture: ComponentFixture<EstablishmentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstablishmentListItemComponent]
    })
            .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
