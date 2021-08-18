import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/Quiz-service/quiz.service';

@Component({
  selector: 'app-text-adder',
  templateUrl: './text-adder.component.html',
  styleUrls: ['./text-adder.component.css']
})
export class TextAdderComponent implements OnInit {
  homeText:any
  constructor(private router:Router,private qservice:QuizService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    setTimeout(()=>
    {
      this.qservice.getHomeText().subscribe((response:any)=>
      {
        this.homeText=response.homeText;
      })
    })
  }

  onAddText()
  {
    this.qservice.addTextToHome(this.homeText).subscribe((response:any)=>
    {
      this._snackBar.open(" Sucessfull", "close", {
        duration: 3000,
      })
    })
  }
}
