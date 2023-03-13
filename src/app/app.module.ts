import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppliedJobsComponent } from './pages/applied-jobs/applied-jobs.component';

import { CandidatesComponent } from './pages/candidates/candidates.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProfileInfoComponent } from './pages/profile-info/profile-info.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LocationComponent } from './pages/location/location.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ApiService } from './core/api.service';
import { TokenInterceptor } from './core/interceptor.service';
import { LoginComponent } from './pages/login/login.component';
import { ListCandidatesComponent } from './pages/list-candidates/list-candidates.component';
import { AddcandidateComponent } from './pages/addcandidate/addcandidate.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { AddemployerComponent } from './pages/addemployer/addemployer.component';
import { ToastrModule } from 'ngx-toastr';
import { NgToastModule } from 'ng-angular-popup';
import { AddsubscriptionComponent } from './pages/addsubscription/addsubscription.component';
import { EmploymenttypeComponent } from './pages/employmenttype/employmenttype.component';
import { EditemployerComponent } from './pages/editemployer/editemployer.component';
import { CompanyProfileinfoComponent } from './pages/company-profileinfo/company-profileinfo.component';
import { CompanyDocumentComponent } from './pages/company-document/company-document.component';
import { CompanyPostedjobsComponent } from './pages/company-postedjobs/company-postedjobs.component';
import { CompanyNavComponent } from './pages/company-nav/company-nav.component';
import { EditjobofferComponent } from './pages/editjoboffer/editjoboffer.component';
import { ViewjobComponent } from './pages/viewjob/viewjob.component';
import { LogoutComponent } from './pages/logout/logout.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthService } from './core/auth.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompaniesComponent,
    SubscriptionComponent,
    CandidatesComponent,
    ProfileInfoComponent,
    AppliedJobsComponent,
    DeleteComponent,
    ExperienceComponent,
    EducationComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    CategoriesComponent,
    LocationComponent,
    HomeComponent,
    ListCandidatesComponent,
    AddcandidateComponent,
    EditprofileComponent,
    AddemployerComponent,
    AddsubscriptionComponent,
    EmploymenttypeComponent,
    EditemployerComponent,
    CompanyProfileinfoComponent,
    CompanyDocumentComponent,
    CompanyPostedjobsComponent,
    CompanyNavComponent,
    EditjobofferComponent,
    ViewjobComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgToastModule,
    NgxPaginationModule,
    
  ],
  providers: [AuthService,ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
