import { Component, OnInit } from '@angular/core';
import { QuizService } from '../Quiz-service/quiz.service';

@Component({
  selector: 'app-user-quizes',
  templateUrl: './user-quizes.component.html',
  styleUrls: ['./user-quizes.component.css']
})
export class UserQuizesComponent implements OnInit {

  constructor(private quizservice:QuizService) { }
quizzes!:any[];
  ngOnInit(): void {
    setTimeout(()=>{
      this.quizservice.getAllActiveQuizzes().subscribe((data:any)=>{
  this.quizzes=data;
      })
    })
  }

}
