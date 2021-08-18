import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCategoryComponent } from './admin-dashboard/add-new-category/add-new-category.component';
import { AddNewQuestionsComponent } from './admin-dashboard/add-new-questions/add-new-questions.component';
import { AddNewQuizComponent } from './admin-dashboard/add-new-quiz/add-new-quiz.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './admin-dashboard/categories/categories.component';
import { QuestionsComponent } from './admin-dashboard/questions/questions.component';
import { QuizComponent } from './admin-dashboard/quiz/quiz.component';
import { TextAdderComponent } from './admin-dashboard/text-adder/text-adder.component';
import { UpdateQuizComponent } from './admin-dashboard/update-quiz/update-quiz.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PlayerComponent } from './player/player.component';
import { AdminGuard } from './services/admin.guard';
import { SignupComponent } from './signup/signup.component';
import { UserQuizesComponent } from './user-quizes/user-quizes.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'play-zone/:qid', component: PlayerComponent
  },
  {
    path: 'user-profile', component: PlayerProfileComponent
  },
  // {
  //   path: 'working', component: HowItWorksComponent
  // },
  {
    path: 'working/:qid', component: HowItWorksComponent
  },
  {
    path: 'user-dashboard', component: UserQuizesComponent
  },
  {
    path: 'admin', component: AdminDashboardComponent, canActivate:[AdminGuard],
    children: [
      {
        path: 'category', component: CategoriesComponent
      },
      {
        path: 'add-category', component: AddNewCategoryComponent
      },
      {
        path: 'quiz', component: QuizComponent
      },
      {
        path: 'add-quiz', component: AddNewQuizComponent
      },
      {
        path: 'quiz/:qid', component: UpdateQuizComponent
      },
      {
        path: 'view-questions/:id/:title', component: QuestionsComponent
      },
      {
        path: 'add-questions/:id/:title', component: AddNewQuestionsComponent
      },
      {
        path: 'add-text', component: TextAdderComponent
      },
      

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
