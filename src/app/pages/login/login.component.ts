import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  invalidLogin: boolean = false;
  newmessage3: any;
 
  

  constructor(private router: Router, private http: ApiService, private formBuilder: FormBuilder,private toast: NgToastService,private newauth:AuthService) {}

  onSubmit(){
    if (this.loginForm.invalid) {

      return;
    }
    const loginPayload = {
      phone: this.loginForm.controls['phone'].value,
      otp: this.loginForm.controls['otp'].value
    }
    this.http.login(loginPayload).subscribe(data=>{
      if (data.loginid) {
        window.sessionStorage.setItem('token', data.loginid);
        this.toast.success({ detail: 'Login Successful', duration: 5000 });
        this.router.navigate(['/home/dashboard']);
   
        console.log(data);

        
      }

    }
    ,err => {
        this.invalidLogin = true;
        this.newmessage3=err.error.message;
        const text = this.newmessage3;
        console.log(err.error.message)
        this.toast.error({detail:this.newmessage3||'Api Not Working',duration:5000});
      }
    
    )
  }

  ngOnInit() {
    window.sessionStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      phone: this.numberControl ,
      otp: ['', Validators.required]
    });
  }

 
  
 
  numberControl = new FormControl('', [
    Validators.maxLength(10),
    Validators.pattern(/^[0-9]*$/),
    Validators.required
  ]);


}
