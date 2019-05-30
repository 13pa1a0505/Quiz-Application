import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminprofileComponent } from './adminprofile.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AdminprofileComponent', () => {
  let component: AdminprofileComponent;
  let fixture: ComponentFixture<AdminprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminprofileComponent ],
      imports: [
        RouterTestingModule,
            FormsModule 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
  
});
