import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizationService implements HttpInterceptor{

  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    let token=localStorage.getItem('token')
    if(token==undefined)
    {
      return next.handle(req);
    }
    let clonedRequestObject=req.clone({headers:req.headers.set('Authorization','Bearer '+token)})
    return next.handle(clonedRequestObject);
  }
}
