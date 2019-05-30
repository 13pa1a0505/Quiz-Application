import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import {By} from  '@angular/platform-browser';
import {  UserService,  users } from '../services/user.service';
import { HttpClientModule ,HTTP_INTERCEPTORS , HttpClient} from '@angular/common/http';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
         FormsModule,
         RouterTestingModule,
        HttpClientModule
      ],
      providers:[UserService,{provide:HttpClient}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the register component', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.debugElement.componentInstance;
    expect(register).toBeTruthy();
  });
  it('should show the input text feild First Name', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const login = fixture.debugElement.componentInstance;
    const usernameElement=fixture.debugElement.query(By.css('input[id=txtFirstName]'))
    //expect(usernameElement.nativeElement.innerHTML).toBe('');

});
it('should show the input text feild middle Name', () => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const login = fixture.debugElement.componentInstance;
  const usernameElement=fixture.debugElement.query(By.css('input[id=txtMiddleName]'))
});
it('should show the input text feild Last Name', () => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const login = fixture.debugElement.componentInstance;
  const usernameElement=fixture.debugElement.query(By.css('input[id=txtLastName]'))
});
it('should show the input text feild contact no', () => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const login = fixture.debugElement.componentInstance;
  const usernameElement=fixture.debugElement.query(By.css('input[id=txtLastName]'))
});
it('should show the input text feild as password', () => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const login = fixture.debugElement.componentInstance;
  const passwordElement=fixture.debugElement.query(By.css('input[id=txtPassword]'))
//expect(passwordElement.nativeElement.innerHTML).toBe('');

});
});

