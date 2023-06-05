import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvService {
  constructor(private http: HttpClient) {}
  srvr = 'http://localhost:3000/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  signUp(data:{}){
    return this.http.post(this.srvr+'auth/signup',data,this.httpOptions)
  }
  signIn(data:{}){
    return this.http.post(this.srvr+'auth/signin',data,this.httpOptions)
  }
  formData = new FormData()
  createProd(data:{}){
      return this.http.post(this.srvr+'api/createProduct',data,this.httpOptions)
  }
}
