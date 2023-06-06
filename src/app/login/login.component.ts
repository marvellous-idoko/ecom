import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SrvService } from '../srv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private s: SrvService, private r:Router) { }
  signInForm = this.fb.group({
    email: ['', Validators.required,Validators.email],
    pwd: ['', Validators.required,]
  })
  submit(){
    console.log('ol-09o')

    if(this.signInForm.valid){
      console.log('olo')
      this.s.signIn(this.signInForm.value).subscribe((r:any)=>{
        if(r['code']==1){
          localStorage.setItem('admin',JSON.stringify(r['msg']))
          this.r.navigateByUrl('admin')
        }else{
          alert('incorrect email or password')
        }
      })
    }else{
      alert('incorrect input')
    }
  }
}
