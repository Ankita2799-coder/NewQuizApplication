import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../Quiz-service/quiz.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required])
  username=new FormControl('',[Validators.required])
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private qservice:QuizService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onSignup()
  {
    this.qservice.newsignup(this.email.value,this.password.value,this.username.value).
    subscribe((response:any)=>
    {
      this.email.reset();
      this.password.reset();
      this.username.reset();
      this._snackBar.open(" Sucessfully Signed up", "close", {
        duration: 3000,
      })

    })
  }

}
