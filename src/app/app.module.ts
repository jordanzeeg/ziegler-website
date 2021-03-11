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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentsTableComponent } from './contents-table/contents-table.component';
import { CpTableComponent } from './cp-table/cp-table.component';
import { HobbiesTableComponent } from './hobbies-table/hobbies-table.component';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';
import { SoapboxComponent } from './soapbox/soapbox.component';
import { LibraryHomeComponent } from './library/library-home/library-home.component';
import { LibraryTableComponent } from './library/library-table/library-table.component';
import { FutureProgramsComponent } from './library/future-programs/future-programs.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
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
import { SnippetComponent } from './snippets/snippet/snippet.component';
import { ChallengeComponent } from './challenges/challenge/challenge.component';
import { AuthorizeService } from './authorization/authorize.service';
import { FsItemService } from './service/fs-item.service';
import { ProgramsComponent } from './programs/programs.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CdpComponent,
    ErsteComponent,
    ExpenseReimbursementSystemComponent,
    HobbiesPageComponent,
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
    HobbyTableComponent,
    SoapboxComponent,
    LibraryHomeComponent,
    FutureProgramsComponent,
    FooterComponent,
    TictactoeSquareComponent,
    BoardComponent,
    SnippetComponent,
    ChallengeComponent,
    ProgramsComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    AuthModuleModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthorizeService, FsItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
