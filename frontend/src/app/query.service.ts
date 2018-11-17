import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QueryService {
apiUrl = 'http://localhost:4002/';
  constructor(private http: HttpClient) { }
  query(data):Observable<any> {
    console.log(data);
    return this.http.post(this.apiUrl+'mailer',{data})
  }
}
