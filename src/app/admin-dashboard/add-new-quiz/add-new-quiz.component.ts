import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/Quiz-service/quiz.service';

@Component({
  selector: 'app-add-new-quiz',
  templateUrl: './add-new-quiz.component.html',
  styleUrls: ['./add-new-quiz.component.css']
})
export class AddNewQuizComponent implements OnInit {
  categories: any = []
  title = new FormControl('')
  description = new FormControl('')
  maxMarks = new FormControl('')
  numofQuest = new FormControl('')
  quizTime = new FormControl('')
  active=new FormControl('')
  category = new FormControl('')

  constructor(private qservice: QuizService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.qservice.getAllCategories().subscribe((response: any) => {
        this.categories = response;
      })
    })
  }
  addQuiz() {
    this.qservice.addQuizzes(this.title.value, this.description.value, this.maxMarks.value, this.numofQuest.value, this.category.value,this.active.value,this.quizTime.value).subscribe((response: any) => {
      this.title.reset();
      this.description.reset();
      this.maxMarks.reset();
      this.numofQuest.reset();
      this.category.reset();
      this.active.reset();
      this.quizTime.reset();
      this._snackBar.open("Added Sucessfully", "close", {
        duration: 3000,
      });
    })
  }

}
