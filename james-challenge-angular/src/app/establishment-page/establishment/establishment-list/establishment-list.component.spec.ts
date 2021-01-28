import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentListComponent } from './establishment-list.component';

describe('EstablishmentListTableComponent', () => {
  let component: EstablishmentListComponent;
  let fixture: ComponentFixture<EstablishmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstablishmentListComponent]
    })
            .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
