import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ZweiteComponent } from './zweite/zweite.component';
import { ContentsTableComponent } from './contents-table/contents-table.component';
import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system/expense-reimbursement-system.component';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';
import { LibraryTableComponent } from './library/library-table/library-table.component';
import { LibraryHomeComponent } from './library/library-home/library-home.component';
import { DashboardComponent } from './submissions/dashboard/dashboard.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import { BoardComponent } from './games/tic-tac-toe/board/board.component';
import { CdpComponent } from './cdp/cdp.component';
import { MspsComponent } from './msps/msps.component';
import { RsnComponent } from './rsn/rsn.component';
import { TsmComponent } from './tsm/tsm.component';
import { ZweiteTableComponent } from './zweite-table/zweite-table.component';

const routes: Routes = [
	{
		path: 'about', component: AboutPageComponent
	},
	{
		path: 'hobbies', component: HobbiesPageComponent,
		children: 
		[
			{
				path: 'table', component: HobbyTableComponent
			}
		]
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
			},
			{
				path: 'table', component: ZweiteTableComponent
			},
			{
				path: '**', redirectTo: 'table', pathMatch:'full'
			}
		]
	},
	{
		path: 'library', component: LibraryHomeComponent,
		children:
		[
			{
				path: 'table', component: LibraryTableComponent
			}
		]
	},
	{
		path: 'info', component: ContentsTableComponent
	},
	{
		path: 'dashboard', component: DashboardComponent
	},
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'register', component: RegisterComponent
	},
	{
		path: 'tic-tac-toe', component: BoardComponent
	},
	{
		path: '**', redirectTo: 'info'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
