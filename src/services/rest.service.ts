import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Employee} from "../interfaces/employee";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected apiUrl: string = environment.apiUrl;

  constructor(public http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.doGet<Employee[]>("employees", null);
  }

  protected doGet<T>(urlPath: string, queryParams: string | null): Observable<T> {
    let url: string = `${this.apiUrl}/${urlPath}`;
    let headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");

    //add Authorization header
    headers = headers.set("Authorization", environment.apiKey);

    if (queryParams) url = `${url}/${queryParams}`;

    return this.http.get<T>(url, {headers}).pipe(retry(1), catchError(this.handleError));
  }

  protected handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => {
      return error;
    });
  }
}
