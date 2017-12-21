import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExperienceModule } from './experience/experience.module';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    ExperienceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
