import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MasterComponent } from './components/master/master.component';
import { TreeComponent } from './components/tree/tree.component';


const routes: Routes = [
  //ORIG
  //{ path: '',redirectTo: '/master',pathMatch:'full'},
  //{ path: 'master',component: MasterComponent}
  //,
  //{ path: 'tree',component: TreeComponent}  
  
  //TEST
    { path: '',redirectTo: '/tree',pathMatch:'full'},
  { path: 'tree',component: TreeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
