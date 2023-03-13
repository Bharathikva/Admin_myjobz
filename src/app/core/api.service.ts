import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }



  baseurl = "http://3.110.42.177:8080";

  login(loginPayload: any): Observable<any> {
    return this.http.post<any>(this.baseurl + '/api/user/login', loginPayload)
  };

  //CompaniesList Api


  getCompanies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + '/api/job/employer/role=employer');
  };

  getCandidates(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + '/api/user/all?from=1&to=100111');
  };



  getIndustry(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + '/api/general/industry')
  };

 


}
