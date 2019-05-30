import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserdashboardComponent } from './userdashboard.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

fdescribe('UserdashboardComponent', () => {
  let component: UserdashboardComponent;
  let fixture: ComponentFixture<UserdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardComponent, UserprofileComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
