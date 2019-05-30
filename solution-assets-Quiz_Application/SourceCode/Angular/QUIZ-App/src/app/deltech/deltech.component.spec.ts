import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { users,UserService, Technologies } from '../services/user.service';
import { DeltechComponent } from './deltech.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

fdescribe('DeltechComponent', () => {
  let component: DeltechComponent;
  let fixture: ComponentFixture<DeltechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltechComponent ],
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
    fixture = TestBed.createComponent(DeltechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the  delTech component', () => {
  //   const fixture = TestBed.createComponent(DeltechComponent);
  //    const deltech = fixture.debugElement.componentInstance;
  //    expect(deltech).toBeTruthy();
  //  });

  
});
