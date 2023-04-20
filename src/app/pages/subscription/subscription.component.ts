import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {


  plan: any
  style: any;
  Basic: any;
  Standard: any;
  Premium: any;
  noplan: any;
  subscription: any;
  basicDetails: any;

  constructor(private http: HttpClient, private api: ApiService, private route: Router) { }

  ngOnInit() {
    this.api.getEmployee()
      .subscribe(data => {
        this.plan = data.plan
        console.log(this.plan);

        if (this.plan === "Basic") {

          return this.Basic = "background-color: white;";
        } else if (this.plan === "Standard") {

          return this.Standard = "background-color: white;";
        } else if (this.plan === "Premium") {

          return this.Premium = "background-color: white;";
        } else {

          return this.noplan = "No Plan Selected";

        }
      })

    this.api.emoployeeSubscription().subscribe(data => {
      this.subscription = data;
      this.basicDetails = this.subscription[0];
      console.log(this.basicDetails);

    })
  }

}
