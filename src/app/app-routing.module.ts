import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';
import { TokenInterceptor } from './core/interceptor.service';

import { HomeComponent } from './home/home.component';
import { AddcandidateComponent } from './pages/addcandidate/addcandidate.component';
import { AddemployerComponent } from './pages/addemployer/addemployer.component';
import { AddsubscriptionComponent } from './pages/addsubscription/addsubscription.component';
import { AdminprofileComponent } from './pages/adminprofile/adminprofile.component';

import { AppliedJobsComponent } from './pages/applied-jobs/applied-jobs.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ChangePhoneComponent } from './pages/change-phone/change-phone.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CompanyDocumentComponent } from './pages/company-document/company-document.component';
import { CompanyNavComponent } from './pages/company-nav/company-nav.component';
import { CompanyPostedjobsComponent } from './pages/company-postedjobs/company-postedjobs.component';
import { CompanyProfileinfoComponent } from './pages/company-profileinfo/company-profileinfo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditadminprofileComponent } from './pages/editadminprofile/editadminprofile.component';
import { EditemployerComponent } from './pages/editemployer/editemployer.component';
import { EditjobofferComponent } from './pages/editjoboffer/editjoboffer.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';


import { EducationComponent } from './pages/education/education.component';
import { EmployersubscriptionComponent } from './pages/employersubscription/employersubscription.component';
import { EmploymenttypeComponent } from './pages/employmenttype/employmenttype.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ListCandidatesComponent } from './pages/list-candidates/list-candidates.component';

import { LocationComponent } from './pages/location/location.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileInfoComponent } from './pages/profile-info/profile-info.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { ViewjobComponent } from './pages/viewjob/viewjob.component';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'login', component: LoginComponent, },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'admin', component: AdminprofileComponent },
      { path: 'dashboard', component: DashboardComponent, },
      { path: 'companies', component: CompaniesComponent },
      { path: 'logout', component: LogoutComponent, },
      { path: 'add', component: AddcandidateComponent },
      { path: 'addemployer', component: AddemployerComponent },

      {
        path: 'candidate',
        component: CandidatesComponent,
        children: [
          {
            path: 'profileinfo',
            component: ProfileInfoComponent,
            children: [
              { path: 'experience', component: ExperienceComponent },
              { path: 'education', component: EducationComponent }

            ]
          },
          { path: 'editprofile', component: EditprofileComponent },
          { path: 'subscription', component: SubscriptionComponent },
          { path: 'appliedjobs', component: AppliedJobsComponent },
          { path: 'resume', component: ResumeComponent }
        ]
      },
      {
        path: 'companiesnav',
        component: CompanyNavComponent,
        children: [
          { path: 'editemployer', component: EditemployerComponent },
          { path: 'companyprofileinfo', component: CompanyProfileinfoComponent },
          { path: 'plan', component: EmployersubscriptionComponent },
          { path: 'companydocument', component: CompanyDocumentComponent },
          { path: 'companyjobs', component: CompanyPostedjobsComponent },
          { path: 'viewjob', component: ViewjobComponent },
          { path: 'editjoboffer', component: EditjobofferComponent }
        ]
      },
      {
        path: 'settings', component: SettingsComponent,
        children: [
          { path: 'edit', component: EditadminprofileComponent },
          { path: 'admin', component: AdminprofileComponent },
          { path: 'category', component: CategoriesComponent },
          { path: 'location', component: LocationComponent },
          { path: 'addsubscription', component: AddsubscriptionComponent },
          { path: 'employmenttype', component: EmploymenttypeComponent },
          {path:'phone',component:ChangePhoneComponent}
        ]
      },
      { path: 'candidatelist', component: ListCandidatesComponent },
      // { path: '*', component: LoginComponent },


    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
