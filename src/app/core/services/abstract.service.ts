import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable, of, retry, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AbstractService<T> {

  constructor(private http: HttpClient,private matSnackbar: MatSnackBar) { }
  apiUrl = "http://localhost:3000/api"

  create(lien: string, item: T): Observable<T | null> {
    return this.http.post<T>(`${this.apiUrl}/${lien}`, item).pipe(
      tap(console.log),
      catchError((error) => {
        this.handleError(error)
        return of(null)
      })
    )
  }

  read(lien: string): Observable<T | null> {
    return this.http.get<T>(`${this.apiUrl}/${lien}`).pipe(
      tap(t => console.log(t)),
      first(),
      retry(3),
      catchError((error: any) => {
        return of(null);
      })
    );
  }

  readAll(lien: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${lien}`).pipe(
      tap(t => console.log(t)),
      first(),
      retry(3),
      catchError((error: any) => {
        return of([])
      })
    )
  }

  readAllPaginate(lien: string): Observable<{data: T[], total: number}> {
    return this.http.get<{data: T[], total: number}>(`${this.apiUrl}/${lien}`).pipe(
      tap(t => console.log(t)),
      first(),
      retry(3),
      catchError((error: any) => {
        return of({ data: [], total: 0 });
      })
    )
  }

  update(lien: string, item: T): Observable<T | null> {
    return this.http.put<T>(`${this.apiUrl}/${lien}`, item).pipe(
      tap(console.log),
      catchError((error) => {
        this.handleError(error)
        return of(null)
      })
    )
  }

  delete(lien: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${lien}`).pipe(
      tap(t => console.log(t)),
      first()
    );
  }

  // private handleError(error: any) {
  //   console.error(error);
  //   this.toastService.show(error?.error.message, 'danger');     
  // }
    
  private handleError(error: any) {
    console.error(error);
    this.matSnackbar.open(
      error?.error.message,
      'Fermer', 
      {
        duration:5000,
        panelClass: ['snackbar-error']
      }
    );      
  }
}
