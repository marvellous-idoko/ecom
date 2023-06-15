import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SrvService } from '../srv.service';
@Component({
  selector: 'app-shop-x',
  templateUrl: './shop-x.component.html',
  styleUrls: ['./shop-x.component.css', "../home/home.component.css"]
})
export class ShopXComponent {
constructor(private r:Router, private s:SrvService){}
prods:any[] = []
ngOnInit(): void {
  this.s.getAllProds().
    subscribe((r: any) => {
      this.prods = r['msg']
    })
}
gotDet(prodId:string){
  this.r.navigateByUrl('product-details/'+ prodId)
}
}
