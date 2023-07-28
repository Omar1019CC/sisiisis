import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(public http: HttpClient) {
  }

   public get(url: string, option: any={}): Observable<object> {
   return this.http.get(url, option);
  }

  public post (url: string, body:any): Observable <object>{
    return this.http.post(url, body);
  }
  public delete ( url: string): Observable <object>{
    return this.http.delete(url);
  }
  public put (url: string, option: any): Observable <object>{
    return this.http.put (url, option);

  }
}
