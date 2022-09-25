import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quiz: any = {
    id: 1,
    title: "Master the Rubik's Cube: Quiz Edition",
    author: 'CubeMasters Academy',
    description:
      "Test your knowledge and skills with our Rubik's Cube quiz! Whether you're a beginner or an expert, this quiz will challenge your understanding of cube algorithms, solving methods, and cube history. Are you ready to unlock the secrets of the cube?",
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1668736594225-55e292fdd95e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quantity: 50,
    price: 10.99,
    cart: 0,
  };
  quizzes: any = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.getQuizzes();
  }

  getQuizzes() {
    this.quizService
      .getQuizzes()
      .subscribe((quizzes: any) => (this.quizzes = quizzes));
  }
}
