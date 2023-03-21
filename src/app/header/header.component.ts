import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  das?:string;
  com?:string;
  can?:string;
  set?:string;

  data:any;
  adminprofile:any;


  constructor(private http: HttpClient,private api:ApiService,private route:Router){
    this.dasn();
  }
 
  ngOnInit(): void {
    this.api.mydetail()
    .subscribe((data:any)=>{
      this.data=data;
      this.adminprofile=data[0];
      console.log(data,'guyyuftufyftufyuyfufyuyufgyiuwdwdiu');
    })
  }

  dasn(){
    this.das = "active";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "inactive";

  }
  comn(){
    this.das = "inactive";
    this.com = "active";
    this.can = "inactive";
    this.set = "inactive";

  }
  cann(){
    this.das = "inactive";
    this.com = "inactive";
    this.can = "active";
    this.set = "inactive";

  }
  setn(){
    this.das = "inactive";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "active";

  }
}
