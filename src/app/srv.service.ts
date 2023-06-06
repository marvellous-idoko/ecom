import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvService {
  constructor(private http: HttpClient) { }
  srvr = 'http://localhost:3000/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getSingleProdDetails(id:string){
    return this.http.get(this.srvr+"api/getProdDetails/"+id,this.httpOptions)
  }
  signUp(data: {}) {
    return this.http.post(this.srvr + 'auth/signup', data, this.httpOptions)
  }
  signIn(data: {}) {
    return this.http.post(this.srvr + 'auth/signin', data, this.httpOptions)
  }
  getAllProds() {
   return this.http.get(this.srvr + 'api/getAllProducts', this.httpOptions)
  }
  createProd(data: {}) {
    return this.http.post(this.srvr + 'api/createProduct', data, this.httpOptions)
  }
  chkAvail(prodId:string,qty:string){
    return this.http.get(this.srvr+'api/chkAvl/'+prodId+'/'+qty,this.httpOptions)
  }
}
