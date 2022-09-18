import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, QuizRoutingModule, MatButtonModule],
})
export class QuizModule {}
