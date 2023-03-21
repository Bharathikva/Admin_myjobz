import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-company-profileinfo',
  templateUrl: './company-profileinfo.component.html',
  styleUrls: ['./company-profileinfo.component.css']
})
export class CompanyProfileinfoComponent {

  employerData: any;
  hello: any;
  data1: any;

  key: any;
  imageUrl: any;
  expression: any;
  d: any;


  constructor(private http: HttpClient, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getEmployer()
      .subscribe(data => {
        console.log(data);
        this.employerData = data;
        this.imageUrl = data.image.toString();

        if (this.employerData.image >= 0) {
          console.log('poiuyrewwqetyu');
          this.expression = true;
          this.d="d-none"
          return true
        } else {
          console.log('qwerttyuiopp');
          this.expression = false;
          return
        }
       
      })
  }

}
