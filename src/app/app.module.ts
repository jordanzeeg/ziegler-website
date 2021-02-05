import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    HobbiesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
