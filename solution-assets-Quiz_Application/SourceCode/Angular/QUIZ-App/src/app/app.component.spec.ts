import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import {By} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { TestComponent } from './test/test.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

import { QuizResultDComponent } from './quiz-result-d/quiz-result-d.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdittechComponent } from './edittech/edittech.component';
import { AddtechComponent } from './addtech/addtech.component';
import { DeltechComponent } from './deltech/deltech.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        UserprofileComponent,
        CoursesListComponent,
        FeedbackComponent,
        QuizResultsComponent,
        TestComponent,
        AdminprofileComponent,
        QuizResultDComponent,
        InstructionsComponent,
        UserlistComponent,
        EdittechComponent,
        AddtechComponent,
        DeltechComponent
      ],

    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'QUIZ-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('QUIZ-App');
  });

  
});
