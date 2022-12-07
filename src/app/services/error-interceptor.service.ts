import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private toastrService: ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError( err => {
        let message = "";
        if(err.status === 401){
          //refersh token or navigate to login
          message = "Token has expired or you should be logged in. Please try again.";
        }
        else if (err.status === 404){
          //custom messsage
          message = "404";
        }
        else if (err.status === 400){
          //another message
          message = "400";
        }
        else{
          //global message for errror
          message = "Unexpected error";
        }
        this.toastrService.error(message);
        return throwError(() => err);
      })
    );
  }
}
