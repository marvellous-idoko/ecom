import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private r:Router, private s:SrvService){}
  prods:any[] = []
  ngOnInit(): void {
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
    
      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage;                            //Webkit, Safari, Chrome
    });
    this.s.getAllProds().
      subscribe((r: any) => {
        this.prods = r['msg']
      })
  }
  gotDet(prodId:string){
    this.r.navigateByUrl('product-details/'+ prodId)
  }
  
}
