import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {



  searchText!: string;
  dataLoaded = false;
  data!: any[];
  filteredData!: any;
  filteredData1!: any;

  p: any = 1;
  count: any = 10;


  constructor(private http: HttpClient, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getCompanies()
      .subscribe((data: any) => {
        this.data = data;
        this.filteredData = data;
        this.dataLoaded = true;
        console.log(this.data);
      })
  }

  viewEmployer(person: any) {
    console.log(person.id);
    window.sessionStorage.setItem('employerID', person.id);
    this.route.navigate(['/home/companiesnav/companyprofileinfo']);
  }

  filterData() {

    if (!this.data) return;
    if (!this.searchText) {
      this.filteredData = this.data;


      return;
    }

    this.filteredData = this.data.filter(data => {
      let temp = JSON.stringify(data).toLowerCase()

      return temp.includes(this.searchText.toLowerCase())
    })
  }
  
}

// this.filteredData = this.data.filter(person => {
//   return person.firstname.toLowerCase().includes(this.searchText )
//   ||person.id.toString().includes(this.searchText)
//   ||person.status.toString().includes(this.searchText)
//   ||person.phone.toString().includes(this.searchText)
// });