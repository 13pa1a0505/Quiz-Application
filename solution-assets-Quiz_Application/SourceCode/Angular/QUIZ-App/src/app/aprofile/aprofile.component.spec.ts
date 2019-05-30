import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprofileComponent } from './aprofile.component';
import { AdminprofileComponent } from '../adminprofile/adminprofile.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AprofileComponent', () => {
  let component: AprofileComponent;
  let fixture: ComponentFixture<AprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprofileComponent ,AdminprofileComponent],
      imports: [
        RouterTestingModule,
            FormsModule ,
            HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
