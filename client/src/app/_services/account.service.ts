import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null)
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  //pipe se pone para que se guarden los datos cuando refresco el navegador. lo guardo en una variable local
  login(model: any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user= response;
        if (user){
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  //borro la variable local, para que cuando haga logout se borre. 
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
