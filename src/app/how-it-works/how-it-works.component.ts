import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../Quiz-service/quiz.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private qService: QuizService) { }
  qid!: any;
  quiz: any;
  ngOnInit(): void {
    this.qid = this.route.snapshot.params.qid
    // console.log(this.qid)
    setTimeout(() => {
      this.qService.getSingleQuiz(this.qid).subscribe((data: any) => {
        console.log(data)
        this.quiz = data;
      }, error => {
        alert("errorin loading quiz data")
      })
    })
  }
  startQuiz() {
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(["play-zone/" + this.quiz.qId]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
