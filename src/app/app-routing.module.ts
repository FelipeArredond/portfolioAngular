import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "experience",
    component: ExperienceComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "work",
    component: WorkComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
