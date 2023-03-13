import { Component } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':'742ecd3acd32e3ca85ce3fc29819c84939b92502'})
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Students : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  hhh?:number;
  hhs?:number;
 

  constructor(private http: HttpClient )
  {
    this.getAllS();
    this.getemployer();
  }
 
  ngOnInit(): void {
  }
 getemployer(){
  this.http.get("http://3.110.42.177:8080/api/user/all",httpOptions)
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.length+"jjjjjjjjjjjjjjjjjjjjjsssssssssssss"); 
        this.hhh = resultData.length;

    });

    this.http.get("http://3.110.42.177:8080/api/user/all?from=1&to=100111",httpOptions)
    .subscribe((resultd:any)=>
    {
      this.hhs = resultd.length;
    });
 }
  getAllS()
  {
    this.http.get("https://3.110.42.177:8080/api/job",httpOptions)
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        console.log("hiiiii.resultdata.data");
        for (let index = 0; index < 5; index++) {
          this.Students.push(resultData[index]);
          console.log(resultData);
          
        }
        
    });
  }
}
