import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ZweiteComponent } from './zweite/zweite.component';
import { ContentsTableComponent } from './contents-table/contents-table.component';
import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system/expense-reimbursement-system.component';
import { LibraryTableComponent } from './library/library-table/library-table.component';
import { LibraryHomeComponent } from './library/library-home/library-home.component';
// import { DashboardComponent } from './submissions/dashboard/dashboard.component';
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
// import { SoapboxFormComponent } from './submissions/soapbox-form/soapbox-form.component';
// import { SoapboxComponent } from './soapbox/soapbox.component';
// import { ChallengeFormComponent } from './submissions/challenge-form/challenge-form.component';
// import { FormcontrolComponent } from './submissions/formcontrol/formcontrol.component';
import { ChallengesComponent } from './library/challenges/challenges.component';
import { ChallengeTableComponent } from './library/challenges/challenge-table/challenge-table.component';
import { ErsteChallengeComponent } from './library/challenges/erste-challenge/erste-challenge.component';
import { RedirectPageComponent } from './redirect-page/redirect-page.component';
import { HobbiesTableComponent } from './hobbies-table/hobbies-table.component';
import { PokemonComponent } from './hobbies-page/pokemon/pokemon.component';
import { SnippetsComponent } from './library/snippets/snippets.component';
import { SnippetComponent } from './library/snippets/snippet/snippet.component';
import { SnippetTableComponent } from './library/snippets/snippet-table/snippet-table.component';
import { CompletionsComponent } from './library/completions/completions.component';
import { CompletionComponent } from './library/completions/completion/completion.component';
import { CompletionTableComponent } from './library/completions/completion-table/completion-table.component';
import { AutomationsComponent } from './library/automations/automations.component';
import { AutomationComponent } from './library/automations/automation/automation.component';
import { AutomationTableComponent } from './library/automations/automation-table/automation-table.component';
import { DataStructuresComponent } from './library/data-structures/data-structures.component';
import { LinkedListComponent } from './library/data-structures/linked-list/linked-list.component';
import { DataStructuresTableComponent } from './library/data-structures/data-structures-table/data-structures-table.component';
import { ThreejsWorkspaceComponent } from './library/data-structures/threejs-workspace/threejs-workspace.component';
import { ExtrudePathsComponent } from './library/data-structures/threejs-workspace/extrude-paths/extrude-paths.component';
import { AutomataComponent } from './library/automata/automata.component';
import { ConwayComponent } from './library/automata/conway/conway.component';
import { LangtonComponent } from './library/automata/langton/langton.component';
import { SalesComponent } from './library/automata/sales/sales.component';

const routes: Routes = [
	{
		path: 'about', component: AboutPageComponent
	},
	{
		path: 'hobbies', component: HobbiesPageComponent,
		children: 
		[
			{
				path: 'table', component: HobbiesTableComponent
			},
			{
				path: '', component: HobbiesTableComponent
			},
			{
				path: 'pokemon', component: PokemonComponent	
			},
			{
				path: '**', component: RedirectPageComponent
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
				path: '', component: ZweiteTableComponent
			},
			{
				path: '**', component: RedirectPageComponent
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
						path: 'table', component: ChallengeTableComponent
					},
					{
						path: 'erste', component: ErsteChallengeComponent
					},
					{
						path: '', component: ChallengeTableComponent
					},
					{
						path: '**', component: RedirectPageComponent
					}
				]
			},
			{
				path: 'snippets', component: SnippetsComponent,
				children: [
					{
						path: 'snippet', component: SnippetComponent
					},
					{
						path: 'table', component: SnippetTableComponent
					},
					{
						path: '', component: SnippetTableComponent
					},
					{
						path: '**', component: RedirectPageComponent
					}
				]
			},
			{
				path: 'completions', component: CompletionsComponent,
				children: [
					{
						path: 'completion', component: CompletionComponent
					},
					{
						path: 'table', component: CompletionTableComponent
					},
					{
						path: '', component: CompletionTableComponent
					},
					{
						path: '**', component: RedirectPageComponent
					}
				]
			},
			{
				path: 'automations', component: AutomationsComponent,
				children: [
					{
						path: 'automation', component: AutomationComponent
					},
					{
						path: 'table', component: AutomationTableComponent
					},
					{
						path: '', component: AutomationTableComponent
					},
					{
						path: '**', component: RedirectPageComponent
					}
				]
			},
			{
				path: 'data', component: DataStructuresComponent,
				children: [
					{
						path: 'linked-list', component: LinkedListComponent
					},
					{
						path: 'table', component: LibraryTableComponent // change this component later since it just loops
					},
					{
						path: 'threejs', component: ThreejsWorkspaceComponent
					},
					{
						path: 'extrude', component: ExtrudePathsComponent
					},
					{
						path: 'automata', component: AutomataComponent,
						children: [
							{
								path: 'conway', component: ConwayComponent
							},
							{
								path: 'langton', component: LangtonComponent
							},
							{
								path: 'sales', component: SalesComponent
							},
							{
								path: '**', component: RedirectPageComponent
							}
						]
					},
					{
						path: '', component: DataStructuresTableComponent
					},
					{
						path: '**', component: RedirectPageComponent
					}

				]
			},
			{
				path: '', redirectTo: 'table', pathMatch: 'full'
			},
			{
				path: '**', component: RedirectPageComponent
			}
		]
	},
	{
		path: 'info', component: ContentsTableComponent
	},
	// WaechterinGuard currently does not work. fix it and then maybe revisit this. formz is not necessary for initial release
/* 	{
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
				path: '**', component: RedirectPageComponent
			}
		]
	}, */
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'register', component: RegisterComponent
	},
	{
		path: 'games/tic-tac-toe', component: BoardComponent
	},
	// {
	// 	path: 'soapbox',component: SoapboxComponent
	// },
	{
		path: 'soapbox', redirectTo: '#', pathMatch: 'full'
	},
	{
		path: 'programs', component: ProgramsComponent
	},
	{
		path: '', redirectTo: 'info', pathMatch: 'full'
	},
	{
		path: '**', component: RedirectPageComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
