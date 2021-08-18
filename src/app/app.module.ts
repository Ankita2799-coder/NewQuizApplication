import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { AddNewCategoryComponent } from './admin-dashboard/add-new-category/add-new-category.component';
import { AddNewQuizComponent } from './admin-dashboard/add-new-quiz/add-new-quiz.component';
import { AddNewQuestionsComponent } from './admin-dashboard/add-new-questions/add-new-questions.component';
import {MatSelectModule} from '@angular/material/select';
import { CategoriesComponent } from './admin-dashboard/categories/categories.component';
import { QuizComponent } from './admin-dashboard/quiz/quiz.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateQuizComponent } from './admin-dashboard/update-quiz/update-quiz.component';
import { QuestionsComponent } from './admin-dashboard/questions/questions.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserQuizesComponent } from './user-quizes/user-quizes.component';
import Swal from 'sweetalert2'
import {MatRadioModule} from '@angular/material/radio';
import { TextAdderComponent } from './admin-dashboard/text-adder/text-adder.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    FooterComponent,
    HomeComponent,
    PlayerComponent,
    PlayerProfileComponent,
    AdminDashboardComponent,
    SidebarComponent,
    AddNewCategoryComponent,
    AddNewQuizComponent,
    AddNewQuestionsComponent,
    CategoriesComponent,
    QuizComponent,
    HowItWorksComponent,
    UpdateQuizComponent,
    QuestionsComponent,
    UserQuizesComponent,
    TextAdderComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTableModule,
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
