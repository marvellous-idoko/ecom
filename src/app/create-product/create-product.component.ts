import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SrvService } from '../srv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  cats = [
    'Grocery',
    'home-item',
    'toilerties'
  ]

  constructor(private fb: FormBuilder, private s: SrvService, private r: Router) { }
  prodForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    model: ['', Validators.required],
    desc: ['', Validators.required],
    qty: ['', Validators.required],
    photo: '',
    price: ['', Validators.required],
  })
photoo :any = ''  
  formData = new FormData();
  submit() {
    this.prodForm.value['photo'] = this.photoo
    this.s.createProd(this.prodForm.value)
      .subscribe((r: any) => {
        alert(r['msg'])
        this.prodForm.reset()
      })
  }
  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log( reader.result)
        this.photoo =  reader.result;
    };
    // this.formData.append('photo', event.target.files[0]);
  }
}
