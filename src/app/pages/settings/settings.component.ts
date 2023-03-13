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

 
  jjj?: string;

  jjf = false;
  constructor(private auth: ApiService, private newauth: AuthService,private router:Router) {
    this.vada();
  }

  ngOnInit(): void {
    

  }

  vada() {
    if (this.jjf == false) {

      this.jjf = true;
      this.jjj = "active";
    } else {
      this.jjj = "inactive";
    }

  }

  removeToken() {
    window.sessionStorage.clear
    this.router.navigate([''])
  }
 
}
