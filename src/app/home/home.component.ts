import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private r:Router){}
  ngOnInit(): void {
    
  }
  gotDet(prodId:string){
    this.r.navigateByUrl('view-details/'+ prodId)
  }
}
