import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllContactsPage } from './all-contacts.page';

describe('AllContactsPage', () => {
  let component: AllContactsPage;
  let fixture: ComponentFixture<AllContactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
