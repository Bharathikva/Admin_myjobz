import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
industry: any;
constructor(private api:ApiService){}

ngOnInit(){
  this.api.getIndustry()
  .subscribe((data:any)=>{
    this.industry=data;
    console.log(data);
    
  })
}
 
}
