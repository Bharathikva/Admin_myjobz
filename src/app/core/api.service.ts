import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import development from './url-handler.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }


  //development
  baseurl = development.baseUrl;

  baseurl2 = development.baseUrl2;

  sendOTP(phoneNumber: string) {
    return this.http.post(this.baseurl + development.sendOtp, { phone: phoneNumber });
  }

  verifyOTP(phoneNumber: string, otp: string): Observable<any> {
    return this.http.post(this.baseurl + development.login, { phone: phoneNumber, otp: otp });
  }

  changePhone(phoneNumber: string, otp: string): Observable<any> {
    return this.http.patch(this.baseurl + development.changeNumber, { phone: phoneNumber, otp: otp });
  }

  login(loginPayload: any): Observable<any> {
    return this.http.post<any>(this.baseurl + development.login, loginPayload)
  };

  //CompaniesList Api

  getCompanies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.getCompanies);
  };

  getCandidates(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.getCandidates);
  };

  getIndustry(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.getIndustry)
  };

  getcategorylist(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.getcategorylist);
  };

  mydetail(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.mydetail);
  }

  getEmployer(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.getUser + window.sessionStorage.getItem('employerID'));
  }

  getEmployee(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.getUser + window.sessionStorage.getItem('employeeID'));
  }

  getAppliedJobs(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.appliedJobs + window.sessionStorage.getItem('employeeID'))
  }

  getState(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.allState);
  }

  getLocation(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.jobLocation + window.sessionStorage.getItem('state'));
  }

  getLocation2(state: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.jobLocation + state);
  }

  updateMydetail(user: any): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(this.baseurl + development.mydetail, user)
  }

  updateEmployer(employer: any): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(this.baseurl + development.mydetail + '?id=' + window.sessionStorage.getItem('employerID'), employer);
  }

  updateEmployee(employee: any): Observable<ApiResponse> {
    return this.http.patch<ApiResponse>(this.baseurl + development.mydetail + '?id=' + window.sessionStorage.getItem('employeeID'), employee);
  }

  emoployeeSubscription(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseurl + development.subscription)
  }

}
