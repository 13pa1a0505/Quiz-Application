import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { browser, element, by, ElementFinder } from 'protractor';
import { CoursesListComponent } from './courses-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { UserprofileComponent } from '../userprofile/userprofile.component';

fdescribe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent,
        UserprofileComponent],
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
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //  // browser.get('');
  //   expect(component).toBeTruthy();
  //  // expect(browser.getTitle()).toContain('T.No	TechId	Techname	Levels');
  // });

  
});
