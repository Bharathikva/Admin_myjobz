import { Component } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':'742ecd3acd32e3ca85ce3fc29819c84939b92502'})
};
@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.css']
})
export class ListCandidatesComponent {

  searchText!: string;
  dataLoaded = false;
  data!: any[];
  filteredData!: any[];


  // Pagination parameters.
  p: any = 1;
  count: any = 10;

  constructor(private http: HttpClient,private api:ApiService ){ }


 
  ngOnInit(): void {
    this.api.getCandidates()
    .subscribe((data: any)=>{
      this.data = data;
      this.filteredData = data;
      this.dataLoaded = true;
      console.log(this.filteredData);
      
     })
  }
 
  filterData() {
    if (!this.data) return;
    if (!this.searchText) {
      this.filteredData = this.data;
      return;
    }
  
    this.filteredData = this.data.filter(person => {
      return person.plan.toLowerCase().includes(this.searchText)
      ||person.id.toString().includes(this.searchText)
      ||person.phone.toString().includes(this.searchText)


    });
  }


}
