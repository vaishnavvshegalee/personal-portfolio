import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component'
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactMeComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
