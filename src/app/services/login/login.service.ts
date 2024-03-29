import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public logueado : boolean;

  constructor(private http: HttpClient, private router : Router) { }

  login(email: string, password: string) {
    let userLogin = {email: email, password: password};
    return this.http.post('http://localhost:8080/login', userLogin).pipe(map((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      localStorage.setItem('email', email);
      localStorage.setItem('rol', res.usuario[0].userRol);
      this.logueado = true;
      this.router.navigate(['home'])
      .then(() => {
        window.location.reload();
      });
    }));
  }

  loggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    this.logueado = false;
    window.location.reload();
    this.router.navigate(['home']);
  }


  registrarse(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuario', usuario).pipe(map((res: any) => {
      console.log(res);

    }));
  }
  recuperarPassword(usuario: Usuario){
    return this.http.post('http://localhost:8080/recuperarPassword', usuario).pipe(map((res: any) => {
      console.log(res);
      
    }));
  }
}