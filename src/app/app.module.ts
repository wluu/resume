import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { EvideraComponent } from './experience/evidera/evidera.component';
import { AppceleratorComponent } from './experience/appcelerator/appcelerator.component';
import { ParticlecodeComponent } from './experience/particlecode/particlecode.component';
import { ElectionearComponent } from './experience/electionear/electionear.component';
import { KaiserComponent } from './experience/kaiser/kaiser.component';
import { UciEarthSystemScienceComponent } from './experience/uci-earth-system-science/uci-earth-system-science.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    EducationComponent,
    SkillsComponent,
    EvideraComponent,
    AppceleratorComponent,
    ParticlecodeComponent,
    ElectionearComponent,
    KaiserComponent,
    UciEarthSystemScienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
