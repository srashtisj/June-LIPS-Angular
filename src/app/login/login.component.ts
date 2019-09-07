import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.get('userName').value === 'admin' &&
      this.loginForm.get('password').value === 'admin') {
      //redirect code
      this.router.navigate(['/employee']);
      // this.router.navigate([{ outlets: { about: null } }]);
    }
  }

}
