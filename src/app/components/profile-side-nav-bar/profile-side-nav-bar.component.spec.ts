import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSideNavBarComponent } from './profile-side-nav-bar.component';

describe('ProfileSideNavBarComponent', () => {
  let component: ProfileSideNavBarComponent;
  let fixture: ComponentFixture<ProfileSideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSideNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
