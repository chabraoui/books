import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFounfError } from './../common/not-found-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';


export class DataService {
  constructor(private url : string , private http : HttpClient) { 
  }

 
  getAll(): Observable<any>{
   return this.http.get<any>(this.url).pipe(catchError((this.handleError)));
  }
  create(ressource){
    return this.http.post<any>(this.url, ressource).pipe(catchError((this.handleError)));
  }
  update(ressource){
    return this.http.put<any>(this.url+'/'+ressource.id, ressource).pipe(catchError((this.handleError)));
  }
  delete(ressource): Observable<any>{
   return  this.http.delete<any>(this.url+'/'+ressource.id).pipe(catchError((this.handleError)));
   }
   handleError(err : HttpErrorResponse){

     if(err.status === 404)
     {return throwError(new NotFounfError);}
     else if(err.status === 400)
     {return throwError(new BadInput);}
     else {
       return throwError(AppError);
     }
   }
  
}
