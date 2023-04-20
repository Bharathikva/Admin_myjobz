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
  das?: string;
  com?: string;
  can?: string;
  set?: string;

  window: any;

  data: any;
  adminprofile: any;

  reloadPage: any
  router: any;


  constructor(private http: HttpClient, private api: ApiService, private route: Router) {
    this.dasn();


  }

  ngOnInit(): void {
    this.api.mydetail()
      .subscribe((data: any) => {
        this.data = data;
        this.adminprofile = data[0];
        console.log(data, 'guyyuftufyftufyuyfufyuyufgyiuwdwdiu');
      })
  
  }



  dasn() {

    this.das = "active";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "inactive";
    // if (this.das == 'active') {
    //   console.log('abcd');
    //   this.route.navigate(['home/dashboard'])
    // }

  }
  comn() {
    this.das = "inactive";
    this.com = "active";
    this.can = "inactive";
    this.set = "inactive";
    // if (this.com = 'active') {
    //   console.log('efgh');
    //   this.route.navigate(['home/companies'])
    // }


  }
  cann() {
    this.das = "inactive";
    this.com = "inactive";
    this.can = "active";
    this.set = "inactive";
    // if (this.can = 'active') {
    //   console.log('efgh');
    //   this.route.navigate(['home/candidatelist'])
    // }

  }
  setn() {
    this.das = "inactive";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "active";
    // if (this.set = 'active') {
    //   console.log('efgh');
    //   this.route.navigate(['home/settings/admin'])
    // }

  }
}



