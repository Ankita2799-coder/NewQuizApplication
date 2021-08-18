import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/Quiz-service/quiz.service';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {
  title = new FormControl('');
  description = new FormControl('')
  constructor(private qservice: QuizService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onAddCategory() {

    this.qservice.addCategory(this.title.value, this.description.value).subscribe(response => {
      this.title.reset();
      this.description.reset();
      this._snackBar.open("Added Sucessfully", "close", {
        duration: 3000,
      })
    },
    (error)=>
    {
      this._snackBar.open("Error");
    })
    
  }


}
