import { Component } from '@angular/core';
import { QuizService } from './Quiz-service/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loaderService:QuizService){

  }
  title = 'Quiz Application';
}
