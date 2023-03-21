import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {

  getEmployeeData: any;
  bharathi: any
  experience: any;
  education:any;
  gender: any;
  imageUrl: any;

  expression: any;
  hello !: boolean;
  d:any

  
  constructor(private http: HttpClient, private api: ApiService, private route: Router) {

  }


  ngOnInit() {
    this.api.getEmployee()
      .subscribe((data: any) => {

        this.getEmployeeData = data;
        this.imageUrl = data.image.toString();
        console.log(this.imageUrl);

       this.experience = (this.getEmployeeData.experience).pop()
        console.log(this.experience);
       
       this.education = (this.getEmployeeData.education).pop()
        console.log(this.education);
        
        if (this.getEmployeeData.image >= 0) {
          console.log('poiuyrewwqetyu');
          this.expression = true;
          this.d="d-none"
          return true
        } else {
          console.log('qwerttyuiopp');
          this.expression = false;
          return
        }


        var data1 = data;

        console.log(data);


        if (data1.gender == 0) {
          console.log('male');
          this.gender = 'male'
          return 'male'
        } else {
          console.log('female');
          this.gender = 'female'
          return 'female'
        }


        
        

      })
  }

}


