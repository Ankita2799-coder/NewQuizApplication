import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  saveResultDetails(marksGot:any,correctAnswers:any,attempted:any,username:any,email:any) {
    console.log(username.value)
    let obj={
username:username,
marksGot:marksGot,
attempted:attempted,
correctAnswers:correctAnswers,
email:email
    }
    return this.httpClient.post(`${this.baseUrl}/result`,obj, { responseType: 'text' })
  }
  evaluateQuiz(questions: any[]) {
   return  this.httpClient.post(`${this.baseUrl}/exam/evaluate`,questions)
  }
  deleteQuestion(quesId: any) {
    return this.httpClient.delete(`${this.baseUrl}/question/` + quesId, { responseType: 'text' })
  }


  public isLoading = new BehaviorSubject<Boolean>(false);
  public isLogin = new Subject<Boolean>();
  baseUrl = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }
  public isLoggedin() {
    let tokenstr = sessionStorage.getItem('token')
    if (tokenstr == undefined || tokenstr == '' || tokenstr == null) {
      this.isLogin.next(false)
      console.log("ifser")
      return false;
    }
    else {
      console.log("elseser")
      this.isLogin.next(true)
      return true;
    }
  }
  newLogin(username: any, password: any) {
    let obj = {
      username: username,
      password: password
    }
    return this.httpClient.post(`${this.baseUrl}/user/login`, obj);
  }
  newsignup(email: any, password: any, username: any) {
    let obj =
    {
      email: email,
      password: password,
      username: username

    }
    return this.httpClient.post(`${this.baseUrl}/user/register`, obj)

  }
  addCategory(title: any, description: any) {
    let obj1 = {
      title: title,
      description: description
    }
    return this.httpClient.post(`${this.baseUrl}/category/save`, obj1);
  }
  getAllCategories() {
    return this.httpClient.get(`${this.baseUrl}/category/categories`);
  }
  getAllQuizzes() {
    return this.httpClient.get(`${this.baseUrl}/quiz/categories`)
  }
  getAllActiveQuizzes() {
    return this.httpClient.get(`${this.baseUrl}/quiz/active`)
  }
  addQuizzes(title: any, description: any, maxMarks: any, numofQuest: any, category: any, active: any, quizTime: any) {
    let obj = {
      title: title,
      description: description,
      maxMarks: maxMarks,
      numberofQuestions: numofQuest,
      active: active,
      quizTime: quizTime,
      category: {
        cid: category
      }

    }
    console.log(obj)


    return this.httpClient.post(`${this.baseUrl}/quiz/save`, obj);
  }
  deleteQuiz(qid: any) {
    return this.httpClient.delete(`${this.baseUrl}`)
  }
  getQuestionsOfQuiz(qid: any) {
    return this.httpClient.get(`${this.baseUrl}/question/quiz/all/` + qid)
  }
  getQuestionsOfQuizuser(qid: any) {
    return this.httpClient.get(`${this.baseUrl}/question/quiz/` + qid)
  }
  addQuestionsToQuiz(content: any, answer: any, option1: any, option2: any, option3: any, option4: any, qid: any) {
    let obj = {
      content: content,
      answer: answer,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      quiz: {
        qId: qid
      }
    }
    return this.httpClient.post(`${this.baseUrl}/question/save`, obj)
  }
  getSingleQuiz(qid: any) {
    return this.httpClient.get(`${this.baseUrl}/quiz/` + qid)
  }
  addTextToHome(homeText: any) {
    let obj = {
      home_Id: 1,
      homeText: homeText
    }
    return this.httpClient.put(`${this.baseUrl}/edithomeText`, obj, { responseType: 'json' })
  }
  getHomeText() {
    return this.httpClient.get(`${this.baseUrl}/homeText/` + 1)
  }
  updateQuiz(quiz: any) {
    return this.httpClient.put(`${this.baseUrl}/quiz/update`, quiz);
  }
  setUser(data: any) {
    sessionStorage.setItem('user', JSON.stringify(data));
  }
  getCurrentUser(email: any) {
    return this.httpClient.get(`${this.baseUrl}/current-user`);
  }
  saveToken(jwt: any) {
    sessionStorage.setItem('token', jwt);
    return true;
  }
  public getUser() {
    let str = sessionStorage.getItem('user');
    if (str != null) {
      return JSON.parse(str)
    }
    else {
      this.logout();
      return null;
    }
  }
  public getUserRole() {
    let str = sessionStorage.getItem('user');
    if (str != null) {
      console.log((JSON.parse(str)).authorities[0].authority)
      return (JSON.parse(str)).authorities[0].authority;
    }
    else {
      this.logout();
      return null;
    }
  }
  public logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    return true;
  }
  public getToken() {
    return sessionStorage.getItem('token')
  }
}
