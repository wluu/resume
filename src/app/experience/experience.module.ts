import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './core/experience.component';
import { EvideraComponent } from './evidera/evidera.component';
import { AppceleratorComponent } from './appcelerator/appcelerator.component';
import { ParticlecodeComponent } from './particlecode/particlecode.component';
import { ElectionearComponent } from './electionear/electionear.component';
import { KaiserComponent } from './kaiser/kaiser.component';
import { UciEarthSystemScienceComponent } from './uci-earth-system-science/uci-earth-system-science.component';

import { ExperienceService } from './experience.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExperienceComponent,
    EvideraComponent,
    AppceleratorComponent,
    ParticlecodeComponent,
    ElectionearComponent,
    KaiserComponent,
    UciEarthSystemScienceComponent
  ],
  exports: [
    ExperienceComponent
  ],
  providers: [ExperienceService]
})
export class ExperienceModule { }
