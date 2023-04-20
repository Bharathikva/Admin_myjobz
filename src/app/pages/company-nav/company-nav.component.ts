import { Component } from '@angular/core';

@Component({
  selector: 'app-company-nav',
  templateUrl: './company-nav.component.html',
  styleUrls: ['./company-nav.component.css']
})
export class CompanyNavComponent {
 
  das?: string;
  com?: string;
  can?: string;
  set?: string;

  constructor(){
    this.dasn()
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

  dasn() {

    this.das = "active";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "inactive";
  }
  comn() {
    this.das = "inactive";
    this.com = "active";
    this.can = "inactive";
    this.set = "inactive";
  }
  cann() {
    this.das = "inactive";
    this.com = "inactive";
    this.can = "active";
    this.set = "inactive";
  }

  setn() {
    this.das = "inactive";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "active";

  }
}
