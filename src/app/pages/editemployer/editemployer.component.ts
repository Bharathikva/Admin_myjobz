import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { first } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import development from 'src/app/core/url-handler.service';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-editemployer',
  templateUrl: './editemployer.component.html',
  styleUrls: ['./editemployer.component.css']
})
export class EditemployerComponent {

  editEmployer:any;
  industries:any;
  cities:any;
  states:any=[];
  newstate:any;
  selectedState:any;

  baseurl = development.baseUrl;



  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder,private toast:NgToastService,private api:ApiService){
   
  }

  
  
 
  ngOnInit(): void {


    this.api.getState()
    .subscribe(Data=>{
      this.states=Data;
      console.log(this.states);
      
    })


     this.api.getIndustry()
     .subscribe(data=>{
      this.industries=data;
  
      
     })

    let employerID = window.sessionStorage.getItem('employerID');


    if(!employerID){
      alert("Invalid action.")
      this.router.navigate(['/home/companies'])
      
      return;
    }

    this.editEmployer=this.formBuilder.group({
      id: ['',Validators.required],
      firstname:['',Validators.required],
      email:['',Validators.required],
      website:['',Validators.required],
      phone:['',Validators.required],
      city:['',Validators.required],
      address1:['',Validators.required],
      address2:['',Validators.required],
      lastname:[''],
      countrycode:['',Validators.required],
      state:['',Validators.required],
      pincode:[''], 
      role:['',Validators.required],
      gender:[''],
      dob:[''],
      industry:['',Validators.required],
      isexperienced:['',Validators.required],
      image:['',Validators.required],
      description:['',Validators.required],
      overallexperience:['',Validators.required],
      lastemployername:[''],
      lastsalary:[''],
      otp:['',Validators.required],
      companylogo:['',Validators.required],
      companyphone:['',Validators.required],
      companysize:['',Validators.required],
      founder:['',Validators.required],
      status:['',Validators.required],
      subscription:['',Validators.required],
      validity:['',Validators.required],
      linkedin:['',Validators.required],
      establisheddate:['',Validators.required],
      message:['',Validators.required],
      jobcount:['',Validators.required],
      plan:['',Validators.required],
      createdat:['',Validators.required],
      industryname:['',Validators.required],
      experience:['',Validators.required],
      education:['',Validators.required],
      document:['',Validators.required],
    });
    this.api.getEmployer()
    .subscribe(data=>{
      this.editEmployer.setValue(data);
      this.newstate=data.state;
      console.log(this.newstate);
      
    })

  }


  onStateChange() {
    this.http.get<ApiResponse>(this.baseurl+development.jobLocation+this.selectedState)
    .subscribe(data=>{
     console.log(data);
   this.cities=data;
     
    })
  }
  

  onSubmit(){
    
    this.api.updateEmployer(this.editEmployer.value)
    .pipe(first())
    .subscribe(
      data => {
        if(data){
         this.toast.success({detail:'Employer updated Successfully',duration:5000});
         this.router.navigate(['/home/companiesnav/companyprofileinfo']);
        }
       
      },
      error => {
        console.log(error.message);
      
      });
  };

}
