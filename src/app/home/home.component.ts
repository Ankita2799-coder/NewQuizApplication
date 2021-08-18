import { Component, OnInit } from '@angular/core';
import { QuizService } from '../Quiz-service/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeText:any
  constructor(private qservice:QuizService) { }

  ngOnInit(): void {
    setTimeout(()=>
    {
      this.qservice.getHomeText().subscribe((response:any)=>
      {
        this.homeText=response.homeText;
      })
    })
  }


}
