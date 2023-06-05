import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SrvService } from '../srv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private s: SrvService, private r:Router) { }
  regForm = this.fb.group({
    name: ['', Validators.required,],
    email: ['', Validators.required],
    cpwd: ['', Validators.required,],
    pwd: ['', Validators.required, ]
  })
  submit() {
    if (this.regForm.valid) {
      if (this.regForm.get('pwd')?.value == this.regForm.get('cpwd')?.value) {
        this.s.signUp(this.regForm.value)
          .subscribe((r:any) => {
            if(r['code'] == 1){
              alert(r['msg'])
              this.r.navigateByUrl('login')
            }else{
              alert('unable  to register user')
            }
          })
      } else {
        alert('password mismatch')
      }
    }
    else {
      alert('invalid input')
    }

  }

}

