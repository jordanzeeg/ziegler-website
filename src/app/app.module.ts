import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CdpComponent } from './cdp/cdp.component';
import { ErsteComponent } from './erste/erste.component';
import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system/expense-reimbursement-system.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { MspsComponent } from './msps/msps.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { RsnComponent } from './rsn/rsn.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { TsmComponent } from './tsm/tsm.component';
import { ZweiteComponent } from './zweite/zweite.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentsTableComponent } from './contents-table/contents-table.component';
import { ZweiteTableComponent } from './zweite-table/zweite-table.component';
import { CpTableComponent } from './cp-table/cp-table.component';
import { HobbiesTableComponent } from './hobbies-table/hobbies-table.component';
import { HobbyTableComponent } from './hobby-table/hobby-table.component';
import { SoapboxComponent } from './soapbox/soapbox.component';
import { LibraryHomeComponent } from './library/library-home/library-home.component';
import { LibraryTableComponent } from './library/library-table/library-table.component';
import { FutureProgramsComponent } from './library/future-programs/future-programs.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './submissions/dashboard/dashboard.component';

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
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
