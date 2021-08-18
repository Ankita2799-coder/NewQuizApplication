import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Quiz-service/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private qservice: QuizService,
    private _snackBar: MatSnackBar) { }
  qId = 0;
  quiz: any;

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qid;
    setTimeout(()=>{

      this.qservice.getSingleQuiz(this.qId).subscribe((response: any) => {
        this.quiz = response;
      },
        (error) => {
          console.log(error);
        })
    })
  }
  updateQuiz() {
    this.qservice.updateQuiz(this.quiz).subscribe((response: any) => {
      this._snackBar.open(" Sucessfull", "close", {
        duration: 3000,
      })
    })
  }

}
