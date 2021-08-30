import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string = '';
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }
  loginForm  = new FormGroup({
    password : new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
    email : new FormControl(null , [Validators.email , Validators.required ]),
  });

  submitloginForm(loginForm:FormGroup)
  {
     this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.message == 'success')
      {
        localStorage.setItem('userToken' , response.token);
        this._AuthService.saveCurrentUser();
         this._Router.navigate(['/home'])
      }
      else
      {
        this.error = response.message ;
      }

     })
  }

}
