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

  vada(){
    if(this.jjf == false){

      this.jjf = true;
      this.jjj = "active";
    }else{
      this.jjj = "inactive";
    }
   
  }

}
