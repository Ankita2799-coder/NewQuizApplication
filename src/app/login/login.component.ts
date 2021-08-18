import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QuizService } from '../Quiz-service/quiz.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required])
  hide = true;
  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a username';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }
  constructor(private qservice: QuizService, private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {


  }
  onLogin() {
    this.qservice.newLogin(this.username.value, this.password.value).subscribe((data:any) => {
      this._snackBar.open(" Sucessfull", "close", {
        duration: 3000,
      })
      this.username.reset();
      this.password.reset();
      // this.qservice.isLogin.next(true);
      this.qservice.saveToken(data.jwt);
      this.qservice.getCurrentUser(this.username.value).subscribe((data:any)=>{
       this.qservice.setUser(data); 
       if(data.authorities[0].authority == "ROLE_ADMIN")
       {
         this.router.navigate(['/admin'])
       }
       else if(data.authorities[0].authority == "ROLE_USER")
       {
         this.router.navigate(['/play-zone'])
       }
    })
   
  }
    )
}
}
