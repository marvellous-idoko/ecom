import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  noOfItems = 0
  ngOnInit(): void {
    if(localStorage.getItem('cart') != null){
     this.noOfItems = JSON.parse(localStorage.getItem('cart')!).length
     console.log(localStorage.getItem('cart'))
    }
  }
}
