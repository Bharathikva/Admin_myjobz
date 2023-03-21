import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  states:any;
  cities:any;
  form!: FormGroup;

  constructor(private api:ApiService ){ }

  ngOnInit() {
    this.api.getState()
    .subscribe(data=>{
      this.states=data;
      console.log(this.states);
      
    })
  }

  viewCities(state:any){
    this.api.getLocation2(state.state)
    .subscribe(data=>{
      this.cities=data;
      console.log(this.cities);
      
    })
  }

}
