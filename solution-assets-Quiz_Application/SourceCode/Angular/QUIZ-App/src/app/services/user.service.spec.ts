import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule ,HTTP_INTERCEPTORS , HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


fdescribe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      FormsModule,
       HttpClientModule
     
    ],
    providers:[UserService,{provide:HttpClient}]
    
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(UserService).toBeTruthy();
  });
});
