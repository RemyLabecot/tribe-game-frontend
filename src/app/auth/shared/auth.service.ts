import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Player} from "../../model/player";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:8080/api';
  private currentPlayerSubject = new BehaviorSubject<Player>(new Player());
  public currentPlayer: Observable<Player> = new Observable();

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.getToken()}`
  });

  constructor(
    private http: HttpClient,
    public router: Router
  ) {

    this.currentPlayerSubject = new BehaviorSubject<Player>(JSON.parse(localStorage.getItem('currentPlayer')!));
    this.currentPlayer = this.currentPlayerSubject.asObservable();
  }

  public get currentPlayerValue(): Player {
    return this.currentPlayerSubject.value;
  }

  signUp(player: Player): Observable<any> {
    let api = `${this.endpoint}/players`;
    return this.http.post(api, player);
  }

  signIn(player: Player) {
    return this.http.post<any>(`${this.endpoint}/players/login`, player)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.access_token);
        this.findPlayerByEmail(player.email);
      }, error => {
        window.alert(error.error.message)
      });
  }

  private findPlayerByEmail(email: string) {

    return this.http.get<Player>(`${this.endpoint}/players/${email}`, {headers: this.headers})
      .subscribe(player => {
        this.currentPlayerSubject.next(player);
        localStorage.setItem('currentPlayer', JSON.stringify(player));
        this.router.navigate(['character-creation']);
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken !== null);
  }
}
