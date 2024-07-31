import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
})
export class ConnexionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get email() {
    return this.form?.get('email') as FormControl;
  }

  get password() {
    return this.form?.get('password') as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService
        .login({ email: this.email.value, password: this.password.value })
        .subscribe((response) => {
          if (response) {
            const p = response?.user?.role;
            if (p === 'admin') {
              this.router.navigate(["/page de l`'admin"]);
            } else if (p === 'boutiquier') {
              this.router.navigate(['/nghnhnf']);
            } else {
              this.router.navigate(['/page du client']);
            }
            this.router.navigate(['/']);
          }
        });
    }
  }
}
