

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/layout/user/header/header.component';
import { FooterComponent } from 'src/app/layout/user/footer/footer.component';
import { SingleTourComponent } from './single-tour.component';

describe('SingleTourComponent', () => {
  let component: SingleTourComponent;
  let fixture: ComponentFixture<SingleTourComponent>;

  class MockActivatedRoute {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }],
      declarations: [SingleTourComponent, HeaderComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(SingleTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


