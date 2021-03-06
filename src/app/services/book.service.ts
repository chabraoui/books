import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService extends DataService {

  constructor( http:HttpClient) {
    super(environment.baseUrl, http)
   }
}
