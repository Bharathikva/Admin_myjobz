import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { category } from 'src/app/model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  selectedData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
  industry: any;
  http: any;
  viewItem: any;
  categories: any;
  emptyArray: any = []
  statesArray: any;
  allIndustry:any;
  

  constructor(private api: ApiService) { }

  ngOnInit() {
 

    this.api.getcategorylist()
      .subscribe((data2: any) => {
        this.viewItem = data2;
       console.log(data2);
       

        // Loop through the cities array and add each city to its corresponding state in the object
        for (const city of data2) {
          const industryname = city.industryname;
          if (!this.emptyArray[industryname]) {
            this.emptyArray[industryname] = [];
          }
          this.emptyArray[industryname].push(city.categoryname);
        }
        const statesArray = Object.keys(this.emptyArray).map(industry => ({
          industry,
          categories: this.emptyArray[industry]
        }));
        // Convert the object to an array of objects, with each object containing the state and its cities

        console.log(statesArray, "cytfdkytufjyfguiguiguiugi");

        this.allIndustry=statesArray;
     
      })


  }



}
