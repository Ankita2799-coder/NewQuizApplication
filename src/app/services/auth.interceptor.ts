import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, catchError, finalize, switchMap } from 'rxjs/operators';
import { QuizService } from '../Quiz-service/quiz.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService: QuizService) {

    }
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.loginService.getToken();
        console.log("inside interceptor", token)
        if (token != null) {
            console.log("hii")
            this.loginService.isLoading.next(true);
            httpRequest = httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
        }
        else {
            this.loginService.isLoading.next(true);
        }

        return next.handle(httpRequest).pipe(
            finalize(
                () => {
                    this.loginService.isLoading.next(false);
                }
            )
        )


    }
}
export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,

    },
];




