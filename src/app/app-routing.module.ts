import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ZweiteComponent } from './zweite/zweite.component';
import { TsmComponent } from './tsm/tsm.component';
import { RsnComponent } from './rsn/rsn.component';
import { MspsComponent } from './msps/msps.component';
import { CdpComponent } from './cdp/cdp.component';
import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system/expense-reimbursement-system.component';

const routes: Routes = [
	{
		path: 'about', component: AboutPageComponent
		
	},
	{
		path: 'hobbies', component: HobbiesPageComponent
	},
	{
		path: 'projects', component: ProjectsPageComponent
	},
	{
		path: 'zweite', component: ZweiteComponent,
		children: 
		[
			{
				path: 'tsm', component: TsmComponent
			},
			{
				path: 'rsn', component: RsnComponent
			},
			{
				path: 'msps', component: MspsComponent
			},
			{
				path: 'cdp', component: CdpComponent
			},
			{
				path: 'ers', component: ExpenseReimbursementSystemComponent
			}
		]
	},
	{
		path: '**', redirectTo: 'zweite'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
