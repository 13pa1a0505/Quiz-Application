import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultDComponent } from './quiz-result-d.component';
import { AdminprofileComponent } from '../adminprofile/adminprofile.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
//import { UserService } from '../services/user.service';
//import { HttpClient } from 'selenium-webdriver/http';
import {  UserService,  users } from '../services/user.service';
import { HttpClientModule ,HTTP_INTERCEPTORS , HttpClient} from '@angular/common/http';


fdescribe('QuizResultDComponent', () => {
  let component: QuizResultDComponent;
  let fixture: ComponentFixture<QuizResultDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizResultDComponent,
        AdminprofileComponent ],
        imports: [
          FormsModule,
          RouterTestingModule         
       ],
       providers:[UserService,{provide:HttpClient}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
