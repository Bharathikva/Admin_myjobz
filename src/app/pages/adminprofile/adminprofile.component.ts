import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {

  data: any;
  adminprofile: any;
  defaultImageUrl: any;
  apiImageUrl: any;

  expression: any;
  d: any;

  constructor(private http: HttpClient, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.mydetail().subscribe((data: any) => {
      this.data = data;
      this.adminprofile = data[0];
      this.apiImageUrl=data[0].image;
      console.log(this.apiImageUrl,'ffddfdffd');

      this.apiImageUrl = data[0].image.toString();

      if (this.adminprofile.image >= 0) {
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

  setDefaultImage() {
    this.apiImageUrl = this.defaultImageUrl;
  }
}
