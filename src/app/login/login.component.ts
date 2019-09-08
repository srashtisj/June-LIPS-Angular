import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.loginService.login(
      this.loginForm.get('userName').value,
      this.loginForm.get('password').value).subscribe(loginSuceess => {
        if (loginSuceess) {
          this.router.navigate(['/employee']);
        }
      })
    //redirect code

    // this.router.navigate([{ outlets: { about: null } }]);
  }

}
