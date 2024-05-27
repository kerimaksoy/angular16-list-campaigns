import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcampaignsComponent } from './newcampaigns.component';

describe('NewcampaignsComponent', () => {
  let component: NewcampaignsComponent;
  let fixture: ComponentFixture<NewcampaignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcampaignsComponent]
    });
    fixture = TestBed.createComponent(NewcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
