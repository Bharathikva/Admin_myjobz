import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { first } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import development from 'src/app/core/url-handler.service';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-editadminprofile',
  templateUrl: './editadminprofile.component.html',
  styleUrls: ['./editadminprofile.component.css']
})
export class EditadminprofileComponent {

  editUser: any;
  states:any;
  cities:any;
  selectedState:any;
  baseurl = development.baseUrl;


  constructor(private router: Router, private formBuilder: FormBuilder, private toast: NgToastService, private api: ApiService, private http:HttpClient) { }

  ngOnInit(): void {
    this.api.getState()
    .subscribe(Data=>{
      this.states=Data;
      console.log(this.states);
      
    })


    this.editUser = this.formBuilder.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      lastname: [''],
      countrycode: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [''],
      role: ['', Validators.required],
      gender: [''],
      dob: [''],
      industry: ['', Validators.required],
      isexperienced: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      overallexperience: ['', Validators.required],
      lastemployername: [''],
      lastsalary: [''],
      otp: ['', Validators.required],
      companylogo: ['', Validators.required],
      companyphone: ['', Validators.required],
      companysize: ['', Validators.required],
      founder: ['', Validators.required],
      status: ['', Validators.required],
      subscription: ['', Validators.required],
      validity: ['', Validators.required],
      linkedin: ['', Validators.required],
      establisheddate: ['', Validators.required],
      message: ['', Validators.required],
      jobcount: ['', Validators.required],
      plan: ['', Validators.required],
      createdat: ['', Validators.required],
      industryname: ['', Validators.required],
    });

    this.api.mydetail()
      .subscribe((data:any) => {
        this.editUser.setValue(data[0]);
        console.log(data);

      })

  };

  onStateChange() {
    this.http.get<ApiResponse>(this.baseurl+development.jobLocation+this.selectedState)
    .subscribe(data=>{
     console.log(data);
   this.cities=data;
     
    })
  }
  


  onSubmit() {
    this.api.updateMydetail(this.editUser.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.toast.success({ detail: 'User updated Successfully', duration: 5000 });
            this.router.navigate(['/home/settings/admin']);
          }

        },
        error => {
          console.log(error.message);

        });
  }

}
