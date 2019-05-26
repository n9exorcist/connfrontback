import { Injectable } from '@angular/core';
// import { URLSearchParams, Jsonp } from '@angular/http';
// import { MessagesService } from './messages.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Credentials } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RideService {

  private ridesUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  // private extractData(res: Response) {
  //   let body = res;
  //   return body || {};
  // }

  getRides(): Observable<Credentials[]> {
    return this.http.get<Credentials[]>(this.ridesUrl).pipe(
      tap(data => console.log('Data Fetched during get call: ' + JSON.stringify(data))),
      catchError(this.handleError),
    )
  }

  getRidesByID(articleID: string): Observable<Credentials> {
    return this.http.get<Credentials>(this.ridesUrl + "/" + articleID).pipe(
      tap(data => console.log('Data fetched using get by ID: '+ JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  postRides(rode: Credentials): Observable<Credentials> {
    console.log("Initia Post call as we pass the parameter", rode);
    return this.http.post<Credentials>(this.ridesUrl, rode, httpOptions).pipe(
      tap(data => console.log('Data Posted during post call: ' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  deleteRides(id): Observable<any> {
    console.log(id);
    return this.http.delete<any>(this.ridesUrl + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id = ${id}`)),
      catchError(this.handleError)
    )
  }


  // search(term:string){
  //   var search = new URLSearchParams()
  //   search.set('action', 'opensearch');
  //   search.set('search', term);
  //   search.set('format', 'json');
  //   return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search}).pipe(
  //     map((response: any) => response.json())
  //   );
  // }



  private handleError(err: HttpErrorResponse) {
    let errMsg: string = '';

    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(err);
    //return Observable.throw(errMsg); 
  }
}

