import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  ngOnInit(): void {
    this.calcInvoice();
  }
  constructor( private s:SrvService, public r:Location ){}
  cart: any[] = [];
  total = 0.0;
  calcInvoice() {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    for (let index = 0; index < this.cart.length; index++) {
      this.cart[index];
      this.total =
        this.total +
        parseInt(this.cart[index]['price']) *
          parseInt(this.cart[index]['qtyOrdered']);
    }
  }
  compl(){
    for (let index = 0; index < this.cart.length; index++) {
      this.s.checkOut(this.cart[index]['_id'],this.cart[index]['qtyOrdered'])
      .subscribe((r)=>console.log(r))       
    }
    alert("thanks for buying from our store!")
    this.r.back()
  }
}
