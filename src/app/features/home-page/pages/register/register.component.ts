import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(77|78|70|75|76)\d{7}$/)
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      adress: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ]),
      confirmPassword: new FormControl('', [Validators.required, this.matchPasswords.bind(this)]),
    });
  }

  matchPasswords(control: FormControl): { [s: string]: boolean } | null {
    if (this.form) {
      return control.value === this.form.get('password')?.value ? null : { mismatch: true };
    }
    return null;
  }
  
  get firstname() {
    return this.form.get('firstname') as FormControl;
  }

  get lastname() {
    return this.form.get('lastname') as FormControl;
  }

  get phone() {
    return this.form.get('phone') as FormControl;
  }

  get adress() {
    return this.form.get('adress') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;;
  }

  get password() {
    return this.form.get('password') as FormControl;;
  }

  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl;;
  }


  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value
      this.authService.register(data).subscribe(
        response => {
          if (response) {
            this.router.navigate(['/']);
          }
        }
      );
    }
  }
}
