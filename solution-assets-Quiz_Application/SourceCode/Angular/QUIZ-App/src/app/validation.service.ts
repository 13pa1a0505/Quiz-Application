import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) {
  }
  loginvalidation(uname, pwd) {
    return this.http.get('http://localhost:8080/users/loginvalidation/' + uname + '/' + pwd, { responseType: 'text' });
  }
}