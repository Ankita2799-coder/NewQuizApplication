import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Quiz-service/quiz.service';

@Component({
  selector: 'app-add-new-questions',
  templateUrl: './add-new-questions.component.html',
  styleUrls: ['./add-new-questions.component.css']
})
export class AddNewQuestionsComponent implements OnInit {
qId:any;
qtitle:any
content=new FormControl('')
option1=new FormControl('')
option2=new FormControl('')
option3=new FormControl('')
option4=new FormControl('')
answer=new FormControl('')
questions:any={
  quiz:{},
  
}

  constructor(private route:ActivatedRoute,private qservice:QuizService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.qId=this.route.snapshot.params.id;
    console.log(this.qId);
    this.questions.quiz['qId']=this.qId;
  }
  addQuestion()
  {
    this.qservice.addQuestionsToQuiz(this.content.value,this.answer.value,this.option1.value,this.option2.value,this.option3.value,this.option4.value,this.qId).subscribe((response:any)=>
    {
      this._snackBar.open(" Sucessfully added", "close", {
        duration: 3000,
      })
      this.content.reset();
      this.option1.reset();
      this.option2.reset();
      this.option3.reset();
      this.option4.reset();
      this.answer.reset();
    })
  }

}
