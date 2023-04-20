import { Component } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {
 
  das?: string;
  com?: string;
  can?: string;


  constructor(){}
 
  ngOnInit(): void {
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
  
  dasn() {

    this.das = "active";
    this.com = "inactive";
    this.can = "inactive";
   
  }
  comn() {
    this.das = "inactive";
    this.com = "active";
    this.can = "inactive";
   


  }
  cann() {
    this.das = "inactive";
    this.com = "inactive";
    this.can = "active";
   

  }
}
