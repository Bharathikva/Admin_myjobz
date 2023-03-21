import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

 
 
  hlo?: string;

  das?:string;
  com?:string;
  can?:string;
  set?:string;
  num?:string;

  jjf = false; 
  constructor(private auth: ApiService, private newauth: AuthService,private router:Router) {
   
  }

  toggleSidebar() {
    const sidebar:any = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    const content:any = document.querySelector('.content');
    content.classList.toggle('close');
    const newtoggle:any = document.querySelector('.newtoggle');
    newtoggle.classList.toggle('fixed');


  }

  ngOnInit(): void {
    

  }

  


  dasn(){
    this.das = "active";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "inactive";

  }
  comn(){
    this.das = "inactive";
    this.com = "active";
    this.can = "inactive";
    this.set = "inactive";
    this.num = "inactive";
  }
  cann(){
    this.das = "inactive";
    this.com = "inactive";
    this.can = "active";
    this.set = "inactive";
    this.num = "inactive";
  }
  setn(){
    this.das = "inactive";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "active";
    this.num = "inactive";
  }

  pho(){
    this.das = "inactive";
    this.com = "inactive";
    this.can = "inactive";
    this.set = "inactive";
    this.num = "active";
  }

  removeToken() {
    window.sessionStorage.clear
    this.router.navigate([''])
  }

 
}
