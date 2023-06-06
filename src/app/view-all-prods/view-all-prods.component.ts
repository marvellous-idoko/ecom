import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-all-prods',
  templateUrl: './view-all-prods.component.html',
  styleUrls: ['./view-all-prods.component.css']
})
export class ViewAllProdsComponent implements OnInit {
  constructor(
    private s: SrvService,
   
    ) { }
    
  prods: any[] = []
 
  ngOnInit(): void {
    
    this.s.getAllProds().
      subscribe((r: any) => {
        this.prods = r['msg']
        console.log(r['msg'])
      })
  }

}
