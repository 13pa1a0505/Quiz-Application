import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultsComponent } from './quiz-results.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {  UserService,  users } from '../services/user.service';
import { HttpClientModule ,HTTP_INTERCEPTORS , HttpClient} from '@angular/common/http';

fdescribe('QuizResultsComponent', () => {
  let component: QuizResultsComponent;
  let fixture: ComponentFixture<QuizResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizResultsComponent,
        UserprofileComponent ],
        imports: [
          FormsModule,
          RouterTestingModule ,
          HttpClientModule   
              
       ],
       providers:[UserService,{provide:HttpClient}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
 
});
