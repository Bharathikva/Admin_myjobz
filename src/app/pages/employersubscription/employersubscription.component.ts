import { Component } from '@angular/core';

@Component({
  selector: 'app-employersubscription',
  templateUrl: './employersubscription.component.html',
  styleUrls: ['./employersubscription.component.css']
})
export class EmployersubscriptionComponent {
 
  public plans = ''
  plan:any
  getSelectedValue(event:any){
  
    // Prints selected value
    console.log(event.target.value);
    this.plans=event.target.value
  }
}
