import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtechComponent } from './addtech.component';
import { HttpClientModule ,HTTP_INTERCEPTORS , HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import 'jasmine';


describe('AddtechComponent', () => {
  let component: AddtechComponent;
  let fixture: ComponentFixture<AddtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtechComponent ],
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
    fixture = TestBed.createComponent(AddtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the  addTech component', () => {
   const fixture = TestBed.createComponent(AddtechComponent);
    const addtech = fixture.debugElement.componentInstance;
    expect(addtech).toBeTruthy();
  });
});
