import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  das?:string;
  com?:string;
  can?:string;
  set?:string;

  constructor(){
    this.dasn();
  }
 
  ngOnInit(): void {
  }

  dasn(){
    this.das = "active";
    this.com = "incative";
    this.can = "inactive";
    this.set = "inactive";

  }
  comn(){
    this.das = "inactive";
    this.com = "active";
    this.can = "inactive";
    this.set = "inactive";

  }
  cann(){
    this.das = "inactive";
    this.com = "incative";
    this.can = "active";
    this.set = "inactive";

  }
  setn(){
    this.das = "inactive";
    this.com = "incative";
    this.can = "inactive";
    this.set = "active";

  }
}
