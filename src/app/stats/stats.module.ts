import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { createTranslateModule } from "../shared/translate/translate";
import { StatsService } from "./stats.service";
import { MatCardModule, MatIconModule, MatSnackBarModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    createTranslateModule()
  ],
  providers : [
    StatsService
  ],
  exports: [StatsComponent],
  declarations: [StatsComponent]
})
export class StatsModule { }
