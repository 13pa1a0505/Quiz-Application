import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { SubmitComponent } from './submit/submit.component';
import { ResultComponent } from './submit/result/result.component';
import { ErrorComponent } from './error/error.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AprofileComponent } from './aprofile/aprofile.component';



@NgModule({
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

    DeltechComponent,
    SubmitComponent,
    ResultComponent,
    ErrorComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    ProfileComponent,
    AprofileComponent,




  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
