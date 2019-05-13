import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
{path:'main', component:MainComponent,
children: [
{path:'child', component:ChildComponent},
{path:'parent', component:ParentComponent},]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
