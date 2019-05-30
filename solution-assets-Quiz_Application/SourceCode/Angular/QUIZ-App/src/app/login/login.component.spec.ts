import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FormsModule,  NgForm} from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import {  UserService,  users } from '../services/user.service';
import { HttpClientModule ,HTTP_INTERCEPTORS , HttpClient} from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      providers:[UserService,{provide:HttpClient}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login).toBeTruthy();
  });

  it(`should render title in a h4 tag as 'Sign In As User'`, () => { 
    const fixture = TestBed.createComponent(LoginComponent); 
    fixture.detectChanges(); 
    const compiled = fixture.debugElement.nativeElement; 
    expect(compiled.querySelector('h4').textContent).toContain('Sign In As User'); 
    }); 
  
  });
  // it('should show the input text feild as Username', () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const login = fixture.debugElement.componentInstance;
  //   const usernameElement=fixture.debugElement.query(By.css('input[id=txtUserName]'))
  //   expect(usernameElement.nativeElement.innerHTML).toBe('');
  // });
  // it('should show the input text feild as password', () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const login = fixture.debugElement.componentInstance;
  //   const passwordElement=fixture.debugElement.query(By.css('input[id=txtPassword]'))
  //   expect(passwordElement.nativeElement.innerHTML).toBe('');

  // });
  // it('should  have feild as button ', () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const login = fixture.debugElement.componentInstance;
  //   const submitElement = fixture.debugElement.query(By.css('input[type=button]'));
  //   expect(submitElement.nativeElement.innerHTML).toBeFalsy();
  // });
