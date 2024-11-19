import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login:FormGroup;
  constructor(private fb:FormBuilder){
    this.login=this.fb.group({
      uname:['',Validators.required],
      pass: ['',Validators.required]
    });
  }

clicked(){
  console.log(this.login.controls);
}  

}
