import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { EvalyticaComponent } from './evalytica/evalytica.component';
import { AppceleratorComponent } from './appcelerator/appcelerator.component';
import { ParticlecodeComponent } from './particlecode/particlecode.component';
import { ElectionearComponent } from './electionear/electionear.component';
import { KaiserComponent } from './kaiser/kaiser.component';
import { UciEarthSystemScienceComponent } from './uci-earth-system-science/uci-earth-system-science.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExperienceComponent,
    EvalyticaComponent,
    AppceleratorComponent,
    ParticlecodeComponent,
    ElectionearComponent,
    KaiserComponent,
    UciEarthSystemScienceComponent
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
