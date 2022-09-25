import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private QUIZ_URL: string = 'api/quizzes';

  constructor(private httpClient: HttpClient) {}

  public getQuizzes(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.QUIZ_URL)
      .pipe(catchError(this.errorHandler));
  }

  public getQuiz(quizId: number): Observable<any> {
    return this.httpClient
      .get<any>(`${this.QUIZ_URL}/${quizId}`)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(err: any) {
    let errMsg: string;

    if (err.error instanceof ErrorEvent) {
      errMsg = `Frontend Error: ${err.error.message}`;
    } else {
      errMsg = `Backend Error Code: ${err.status}: ${err.body.error}`;
    }

    return throwError(errMsg);
  }
}
