import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})

export class AppliedJobsComponent implements OnInit {

  Applied: any;
  companyid: any;
  companyName: any
  allids:any;
  ids:any=[];

  constructor(private http: HttpClient, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getAppliedJobs()
      .subscribe(data => {
        this.Applied = data;

       

        for(var job of this.Applied){
          this.ids.push(job.companyid)
          console.log(job.companyid);
          this.companyid=job.companyid;
        }
        this.allids= this.ids;
        console.log(this.allids);        
      }); 
    }

}
