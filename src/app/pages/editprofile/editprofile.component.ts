import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { first } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {

  editEmployee:any;
  industries:any;

  constructor(private router: Router, private formBuilder: FormBuilder,private toast:NgToastService,private api:ApiService){}


  ngOnInit(): void {

    this.api.getIndustry()
    .subscribe(data=>{
     this.industries=data;
     console.log(this.industries);
     
    })


   let employeeID = window.sessionStorage.getItem('employeeID');


   if(!employeeID){
     alert("Invalid action.")
     this.router.navigate(['/home/companies'])
     
     return;
   }

   this.editEmployee=this.formBuilder.group({
     id: ['',Validators.required],
     firstname:['',Validators.required],
     email:['',Validators.required],
     website:['',Validators.required],
     phone:['',Validators.required],
     city:['',Validators.required],
     address1:['',Validators.required],
     address2:['',Validators.required],
     lastname:['',Validators.required],
     countrycode:['',Validators.required],
     state:['',Validators.required],
     pincode:['',Validators.required],
     role:['',Validators.required],
     gender:['',Validators.required],
     dob:['',Validators.required],
     industry:['',Validators.required],
     isexperienced:['',Validators.required],
     image:['',Validators.required],
     description:['',Validators.required],
     overallexperience:['',Validators.required],
     lastemployername:['',Validators.required],
     lastsalary:['',Validators.required],
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
   });
   this.api.getEmployee()
   .subscribe(data=>{
     this.editEmployee.setValue(data);
     console.log(data);
     console.log('ddddd');
     
   })
 }


 onSubmit(){
    
  this.api.updateEmployee(this.editEmployee.value)
  .pipe(first())
  .subscribe(
    data => {
      if(data){
       this.toast.success({detail:'Employee updated Successfully',duration:5000});
       this.router.navigate(['/home/candidate/profileinfo']);
      }
     
    },
    error => {
      console.log(error.message);
    
    });
};

}
