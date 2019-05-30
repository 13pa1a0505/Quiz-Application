import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { TestComponent } from './test/test.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'QuizResults', component: QuizResultsComponent },
  { path: 'Feedback', component: FeedbackComponent },
  { path: 'Test', component: TestComponent },
  { path: '', redirectTo: 'courseslist', pathMatch: 'full' },
  { path: 'aprofile', component: AdminprofileComponent },
  { path: 'QuizResultsDetails', component: QuizResultDComponent },
  { path: 'ins', component: InstructionsComponent },
  { path: 'usersList', component: UserlistComponent },
  { path: 'Edittech', component: EdittechComponent },
  { path: 'add', component: AddtechComponent },
  { path: 'del', component: DeltechComponent },
  { path: 'Submit', component: SubmitComponent },
  { path: 'Results', component: ResultComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'ub', component: UserdashboardComponent },
  { path: 'ab', component: AdmindashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'adprofile', component: AprofileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
