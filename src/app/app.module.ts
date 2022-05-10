import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ErsteComponent } from './erste/erste.component';
import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system/expense-reimbursement-system.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ZweiteComponent } from './zweite/zweite.component';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentsTableComponent } from './contents-table/contents-table.component';
import { CpTableComponent } from './cp-table/cp-table.component';
import { HobbiesTableComponent } from './hobbies-table/hobbies-table.component';
import { SoapboxComponent } from './soapbox/soapbox.component';
import { LibraryHomeComponent } from './library/library-home/library-home.component';
import { LibraryTableComponent } from './library/library-table/library-table.component';
import { FutureProgramsComponent } from './library/future-programs/future-programs.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AuthModuleModule } from './authorization/auth-module/auth-module.module';
import { TictactoeSquareComponent } from './games/tic-tac-toe/tictactoe-square/tictactoe-square.component';
import { BoardComponent } from './games/tic-tac-toe/board/board.component';
import { SnakeGameComponent } from './games/snake-game/snake-game.component';
import { CdpComponent } from './cdp/cdp.component';
import { MspsComponent } from './msps/msps.component';
import { RsnComponent } from './rsn/rsn.component';
import { TsmComponent } from './tsm/tsm.component';
import { ZweiteTableComponent } from './zweite-table/zweite-table.component';
import { SnippetComponent } from './library/snippets/snippet/snippet.component';
import { AuthorizeService } from './authorization/authorize.service';
import { FsItemService } from './service/fs-item.service';
import { ProgramsComponent } from './programs/programs.component';
import { SoapboxFormComponent } from './submissions/soapbox-form/soapbox-form.component';
import { ProgramFormComponent } from './submissions/program-form/program-form.component';
import { ChallengeFormComponent } from './submissions/challenge-form/challenge-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormcontrolComponent } from './submissions/formcontrol/formcontrol.component';
import { ChallengesComponent, SafeHTMLPipe } from './library/challenges/challenges.component';
import { ChallengeTableComponent } from './library/challenges/challenge-table/challenge-table.component';
import { ErsteChallengeComponent } from './library/challenges/erste-challenge/erste-challenge.component';
import { RedirectPageComponent } from './redirect-page/redirect-page.component';
import { PokemonComponent } from './hobbies-page/pokemon/pokemon.component';
import { SnippetsComponent } from './library/snippets/snippets.component';
import { SoapboxDatalessComponent } from './soapbox-dataless/soapbox-dataless.component';
import { SnippetTableComponent } from './library/snippets/snippet-table/snippet-table.component';
import { AutomationsComponent } from './library/automations/automations.component';
import { CompletionsComponent } from './library/completions/completions.component';
import { CompletionComponent } from './library/completions/completion/completion.component';
import { AutomationTableComponent } from './library/automations/automation-table/automation-table.component';
import { CompletionTableComponent } from './library/completions/completion-table/completion-table.component';
import { AutomationComponent } from './library/automations/automation/automation.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DataStructuresComponent } from './library/data-structures/data-structures.component';
import { LinkedListComponent } from './library/data-structures/linked-list/linked-list.component';
import { DataStructuresTableComponent } from './library/data-structures/data-structures-table/data-structures-table.component';
import { ThreejsWorkspaceComponent } from './library/data-structures/threejs-workspace/threejs-workspace.component';
import { ExtrudePathsComponent } from './library/data-structures/threejs-workspace/extrude-paths/extrude-paths.component';
import { AutomataComponent } from './library/automata/automata.component';
import { ConwayComponent } from './library/automata/conway/conway.component';
import { LangtonComponent } from './library/automata/langton/langton.component';
import { MaurerComponent } from './library/automata/maurer/maurer.component';
import { SalesComponent } from './library/automata/sales/sales.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CdpComponent,
    ErsteComponent,
    ExpenseReimbursementSystemComponent,
    HobbiesPageComponent,
    PokemonComponent,
    MspsComponent,
    ProjectsPageComponent,
    RsnComponent,
    SnakeGameComponent,
    TsmComponent,
    ZweiteComponent,
    ContentsTableComponent,
    ZweiteTableComponent,
    CpTableComponent,
    HobbiesTableComponent,
    LibraryTableComponent,
    SoapboxComponent,
    LibraryHomeComponent,
    FutureProgramsComponent,
    FooterComponent,
    TictactoeSquareComponent,
    BoardComponent,
    SnippetComponent,
    ProgramsComponent,
    SoapboxFormComponent,
    ProgramFormComponent,
    ChallengeFormComponent,
    FormcontrolComponent,
    ChallengesComponent,
    ChallengeTableComponent,
    SafeHTMLPipe,
    ErsteChallengeComponent,
    RedirectPageComponent,
    SnippetsComponent,
    SoapboxDatalessComponent,
    SnippetTableComponent,
    AutomationsComponent,
    CompletionsComponent,
    CompletionComponent,
    AutomationTableComponent,
    CompletionTableComponent,
    AutomationComponent,
    DataStructuresComponent,
    LinkedListComponent,
    DataStructuresTableComponent,
    ThreejsWorkspaceComponent,
    ExtrudePathsComponent,
    AutomataComponent,
    ConwayComponent,
    LangtonComponent,
    MaurerComponent,
    SalesComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCollapseModule,
    BrowserModule,
    FormsModule,
    AuthModuleModule
    
  ],
  providers: [AuthorizeService, FsItemService, {provide: LocationStrategy, useClass:HashLocationStrategy}],

  bootstrap: [AppComponent]
})
export class AppModule { }
