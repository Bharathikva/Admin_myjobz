import { Component } from '@angular/core';

@Component({
  selector: 'app-company-nav',
  templateUrl: './company-nav.component.html',
  styleUrls: ['./company-nav.component.css']
})
export class CompanyNavComponent {
  hhi?:string;

  hhj = false;
  constructor(){
    this.vada();
  }
 
  ngOnInit(): void {
  
  }

  vada(){
    if(this.hhj == false){

      this.hhj = true;
      this.hhi = "active";
    }else{
      this.hhi = "inactive";
    }
   
  }
}
