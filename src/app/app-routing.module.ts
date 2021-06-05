import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BalanceReportComponent } from './components/balanceReport/balanceReport.component';
import { WithdrawlReportComponent } from './components/withdrawl-report/withdrawl-report.component';
import { EuroReportComponent } from './components/euro-report/euro-report.component';
import { DepositReportComponent } from './components/deposit-report/deposit-report.component';


const routes: Routes = [
  
  { path: '',redirectTo: '/balanceReport',pathMatch:'full'},
  { path: 'balanceReport',component: BalanceReportComponent},
  { path: 'header',component: HeaderComponent} , 
  { path: 'depositReport',component: DepositReportComponent},
  { path: 'withdrawlReport',component: WithdrawlReportComponent},
  { path: 'euroReport',component: EuroReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
