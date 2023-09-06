import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { DeleteTaskComponent } from './pages/delete-task/delete-task.component';
import {HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoverComponent } from './components/cover/cover.component';
import { HomeComponent } from './Navigation/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { NosServiceComponent } from './components/nos-service/nos-service.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './Navigation/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ListTaskComponent,
    DeleteTaskComponent,
    NavbarComponent,
    FooterComponent,
    CoverComponent,
    HomeComponent,
    SectionComponent,
    NosServiceComponent,
    PageNotFoundComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
