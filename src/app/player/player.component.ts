import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuizService } from '../Quiz-service/quiz.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private _snackBar:MatSnackBar,private route:ActivatedRoute,private qService:QuizService,private locationSt:LocationStrategy) { }
  questions!:any[]
  marksGot=0
  correctAnswers=0
  attempted=0;
  pager = {
    index: 0,
    size: 1,
    count: 3
  };
  qid:any
  submit:boolean=false;
  ngOnInit(): void {
    this.qid=this.route.snapshot.params.qid
    setTimeout(()=>{
      this.qService.getQuestionsOfQuizuser(this.qid).subscribe((data:any)=>{
  this.questions=data;
  this.questions.forEach(q=>{
    q['givenAnswer']='';
  })
  console.log(this.questions)
  this.pager.count=this.questions.length
      },(error)=>{
        Swal.fire("error","error in loading questions of  quiz")
      })
    })
    console.log(this.qid)
    window.addEventListener("keyup", disableF5);

    window.addEventListener("keydown", disableF5);
    
    
    function disableF5(e:any) {
      
      if ((e.which || e.keyCode) == 116) e.preventDefault(); 
      
    };
    //this.qService.getQuestionsOfQuizuser(qid).subscribe(data=>{
      this.preventBackButton();
    }
    preventBackButton() {
      this.locationSt.onPopState(() => {
        history.pushState(null, '',location.href);
        history.pushState(null, '',location.href);
      })
    }
    submitAnswers()
    {
      this.submit=true;
      console.log(this.questions)
      this.qService.evaluateQuiz(this.questions).subscribe((data:any)=>{
        console.log(data);
        this.correctAnswers=data.correctAnswer;
        this.marksGot=data.marksGot;
        this.attempted=data.attempted;
      })
    }
    get filteredQuestions() {
    return (this.questions) ?
      this.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }
  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
     // this.mode = 'quiz';
    }
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required])
  username=new FormControl('',[Validators.required])
  feedback=new FormControl('')
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  submitDetails()
  {
    this.qService.newsignup(this.email.value,this.password.value,this.username.value).
    subscribe((response:any)=>
    {
      this.qService.saveResultDetails(this.marksGot,this.correctAnswers,this.attempted,this.username.value,this.email.value).subscribe((data:any)=>{
        this._snackBar.open(" Sucessfully registered", "close", {
          duration: 3000,
          
        })
        this.username.reset();
        this.email.reset();
        this.password.reset();
      //  this.username.reset();
      })
    },(error)=>{
      this._snackBar.open("Error while saveing details ", "close", {
        duration: 3000,
      })
    })
   
  }

}
