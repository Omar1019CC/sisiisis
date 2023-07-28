import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileSignInComponent } from './profile-sign-in.component';
import { HeaderComponent } from '../user/header/header.component';

describe('ProfileSignInComponent', () => {
  let component: ProfileSignInComponent;
  let fixture: ComponentFixture<ProfileSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSignInComponent]
    });
    fixture = TestBed.createComponent(ProfileSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
