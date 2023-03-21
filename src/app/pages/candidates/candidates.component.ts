import { Component } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {
  jjj?:string;

  jjf = false;
  constructor(){
    this.vada();
  }
 
  ngOnInit(): void {
  
  }


  toggleSidebar() {
    const sidebar:any = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    const content:any = document.querySelector('.content');
    content.classList.toggle('close');
    const newtoggle:any = document.querySelector('.newtoggle');
    newtoggle.classList.toggle('fixed');
  }
  

  vada(){
    if(this.jjf == false){

      this.jjf = true;
      this.jjj = "active";
    }else{
      this.jjj = "inactive";
    }
   
  }

}
