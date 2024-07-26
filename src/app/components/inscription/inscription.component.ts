import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css',
})
export class InscriptionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password:  new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  get email() {
    return this.form?.get('email') as FormControl;
  }

  get password() {
    return this.form?.get('password') as FormControl;
  }
  get firstname() {
    return this.form?.get('firstname') as FormControl;
  }
  // get lastname() {
  //   return this.form?.get('lastname') as FormControl;
  // }

  onSubmit() {
    console.log("je suis")
    if(this.form.valid){
      this.authService.register({firstname:this.firstname.value, email:this.email.value, password:this.password.value}).subscribe(response=>{
        console.log(response)
      })
    }
  }
}
