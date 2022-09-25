import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, QuizRoutingModule, AngularMaterialModule],
})
export class QuizModule {}
