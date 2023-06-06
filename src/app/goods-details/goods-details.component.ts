import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  constructor(private s: SrvService,
    private r: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }
  id: string = ''
  buyNow: string = ''
  showQty = false
  qtyFrm = this.fb.group({
    qty: ['', Validators.required]
  })
  prod: any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.buyNow = this.route.snapshot.paramMap.get('buy')!
    if (this.buyNow != null || '') {
      this.showQty = true
    }
    this.s.getSingleProdDetails(this.id)
      .subscribe((r: any) => {
        if (r['code'] == 1) {
          this.prod = r['msg']
        }
      })
  }
  checkAvail() {
    (<HTMLButtonElement>document.getElementById('kil')).innerHTML = 'checking . . .';
    (<HTMLButtonElement>document.getElementById('kil')).disabled = true
    this.s.chkAvail(this.id, this.qtyFrm.get('qty')!.value!.toString())
      .subscribe((r: any) => {
        if (r['avail']) {
          if (r['msg'] == 'available') {
            (<HTMLButtonElement>document.getElementById('kilq')).style.display = "block";
            (<HTMLButtonElement>document.getElementById('kil')).style.display = 'none'
          } else {
            (<HTMLButtonElement>document.getElementById('kil')).innerHTML = "Not Available";

            (<HTMLButtonElement>document.getElementById('kjil')).innerHTML = "quantity Available is " + r['qty']
          }
        } else {
          (<HTMLButtonElement>document.getElementById('kil')).innerHTML = 'Not Available';
        }
      })
  }
  addToCart() {
    let cart: {}[] = []
    let yu: any
    console.log(localStorage.getItem('cart'))
    if (localStorage.getItem('cart') == null) {
      console.log(localStorage.getItem('cart'))
      cart.push(this.prod)
      localStorage.setItem('cart', JSON.stringify(cart))

    } else {

      yu = JSON.parse(localStorage.getItem('cart')!)
      yu.push(this.prod)
      localStorage.setItem('cart', JSON.stringify(yu))
    }
    window.location.reload()

  }
}
