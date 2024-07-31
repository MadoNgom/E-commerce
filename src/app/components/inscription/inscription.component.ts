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
  form!: FormGroup;
  // import route authservice
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.init();
  }
  init() {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.matchPasswords.bind(this),
      ]),
    });
  }

  matchPasswords(control: FormControl): { [s: string]: boolean } | null {
    if (this.form) {
      return control.value === this.form.get('password')?.value
        ? null
        : { mismatch: true };
    }
    return null;
  }
  // GET INPUTS
  get email() {
    return this.form?.get('email') as FormControl;
  }

  get password() {
    return this.form?.get('password') as FormControl;
  }
  get firstname() {
    return this.form?.get('firstname') as FormControl;
  }
  get lastname() {
    return this.form?.get('lastname') as FormControl;
  }
  get confirmPassword() {
    return this.form?.get('confirmPassword') as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.authService.register(data).subscribe((response) => {
        if (response) {
          this.router.navigate(['/connexion']);
        }
      });
    }
  }
  // onSubmit() {
  //   console.log('je suis');
  //   if (this.form.valid) {
  //     this.authService
  //       .register({
  //         firstname: this.firstname.value,
  //         lastname: this.lastname.value,
  //         email: this.email.value,
  //         password: this.password.value,
  //       })
  //       .subscribe((response) => {
  //         console.log(response);
  //       });
  //   }
  // }
}
