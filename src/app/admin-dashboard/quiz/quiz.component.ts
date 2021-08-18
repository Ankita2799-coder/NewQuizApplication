import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Quiz-service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizzes:any=[]
  constructor(private qservice:QuizService,private _snackBar: MatSnackBar,private route:ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(()=>{

      this.qservice .getAllQuizzes().subscribe((data:any)=>
      {
        this.quizzes=data;
      },
      (error)=>
      {
        this._snackBar.open("Error in Loading Quiz", "close", {
          duration: 3000,
        })
      })
    })
  }
  deleteQuiz(qId:any)
  {
    alert(qId);
    this.qservice.deleteQuiz(qId).subscribe((respone:any)=>
    {
     this.quizzes=this.quizzes.filter((quiz:any)=>quiz.qId!=qId)
      this._snackBar.open(" Sucessfully Deleted", "close", {
        duration: 3000,
      })
    },
    (error)=>
    {
      this._snackBar.open("Error", "close", {
        duration: 3000,
      })
    })
    
  }
}
