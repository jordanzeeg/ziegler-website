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
import { WaechterinGuard } from './waechterin.guard';
import { ProgramsComponent } from './programs/programs.component';
import { SoapboxFormComponent } from './submissions/soapbox-form/soapbox-form.component';
import { SoapboxComponent } from './soapbox/soapbox.component';
import { ChallengeFormComponent } from './submissions/challenge-form/challenge-form.component';
import { FormcontrolComponent } from './submissions/formcontrol/formcontrol.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeTableComponent } from './challenges/challenge-table/challenge-table.component';

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
			},
			{
				path: 'challenges', component: ChallengesComponent,
				children: [
					{
						path: '**', component: ChallengeTableComponent
					}
				]
			},
		]
	},
	{
		path: 'info', component: ContentsTableComponent
	},
	{
		path: 'formz', component: FormcontrolComponent, canActivate: [WaechterinGuard],
		children: 
		[
			{
				path: 'dashboard', component: DashboardComponent, canActivate: [WaechterinGuard]
			},
			{
				path: 'soapbox-form', component: SoapboxFormComponent, canActivate: [WaechterinGuard]
			},
			{
				path: 'challenge-form', component: ChallengeFormComponent, canActivate: [WaechterinGuard]
			},
			{
				path: '**', redirectTo: 'dashboard'
			}
		]
	},
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'register', component: RegisterComponent
	},
	{
		path: 'games/tic-tac-toe', component: BoardComponent
	},
	{
		path: 'soapbox',component: SoapboxComponent
	},
	{
		path: 'programs', component: ProgramsComponent
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
