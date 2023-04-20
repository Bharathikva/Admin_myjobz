import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{

  resume:any;
  display:any;

  constructor(private http: HttpClient, private api: ApiService, private route: Router) { }

  ngOnInit() {
    this.api.getEmployee()
    .subscribe((data:any)=>{
      this.resume=data.document;

      if(this.resume){
        return this.display=true;
      }else{
        return this.display=false;
      }
    })
  }

}
