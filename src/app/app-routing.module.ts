import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { WebsitesComponent } from './pages/websites/websites.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contacts', component: ContactsComponent },
  {path: 'projets', component: ProjetsComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'site', component: WebsitesComponent },
  {path: 'services', component: ServicesComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
