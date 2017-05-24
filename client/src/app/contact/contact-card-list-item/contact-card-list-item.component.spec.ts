import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardListItemComponent } from './contact-card-list-item.component';

describe('ContactCardListItemComponent', () => {
  let component: ContactCardListItemComponent;
  let fixture: ComponentFixture<ContactCardListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCardListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
