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
 
  toggleSidebar() {
    const sidebar:any = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    const content:any = document.querySelector('.content');
    content.classList.toggle('close');
    const newtoggle:any = document.querySelector('.newtoggle');
    newtoggle.classList.toggle('fixed');


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
