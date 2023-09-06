import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { HomeComponent } from './Navigation/home/home.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import {PageNotFoundComponent} from "./Navigation/page-not-found/page-not-found.component";
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListTaskComponent},
  {path: 'list/add', component: AddTaskComponent},
  {path: 'list/:id', component: UpdateTaskComponent},
  {path: 'list/update/:id', component: UpdateTaskComponent},
  {path: 'profile', component: ProfileComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
