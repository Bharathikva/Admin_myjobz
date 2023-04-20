import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-company-document',
  templateUrl: './company-document.component.html',
  styleUrls: ['./company-document.component.css']
})
export class CompanyDocumentComponent {

  pdfview=""
  display:any;
  expression:any;
  d:any;

  constructor(private http: HttpClient, private api: ApiService, private route: Router) { }

  

  ngOnInit(): void {
    this.api.getEmployer()
      .subscribe(data => {
        this.pdfview = data.document;
        console.log(this.pdfview);

        if(this.pdfview){
          return this.display=true;
        }else{
          return this.display=false;
        }

      })


  }

 

  // if (pdfview = 0) {
  //   console.log('poiuyrewwqetyu');
  //   this.expression = true;
  //   this.d="d-none"
  //   return true
  // }{
  //   console.log('qwerttyuiopp');
   
  //   return
  // }

}
