import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
const routes: Routes = [
	{
		path: 'about', component: AboutPageComponent
		
	},
	{
		path: 'hobbies', component: HobbiesPageComponent
	},
	{
		path: 'projects', component: ProjectsPageComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
