import { Component } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {


 
  searchText!: string;
  dataLoaded = false;
  data!: any[];
  filteredData!: any[];

  p: any = 1;
  count: any = 10;
 

  constructor(private http: HttpClient,private api:ApiService ) {}
 
  ngOnInit(): void {
    this.api.getCompanies()
    .subscribe((data: any)=>{
      this.data = data;
      this.filteredData = data;
      this.dataLoaded = true;
     })
  }

  filterData() {
      
    if (!this.data) return;
    if (!this.searchText) {
      this.filteredData = this.data;
      return;
    }
  
    this.filteredData = this.data.filter(person => {
      return person.company.toLowerCase().includes(this.searchText )
      ||person.id.toString().includes(this.searchText)
      ||person.status.toString().includes(this.searchText)
    });
  }
 
}
