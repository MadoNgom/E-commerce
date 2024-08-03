import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
})
export class ConnexionComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

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
              this.router.navigate(['/admin/dashboard']);
            } else if (p === 'boutiquier') {
              this.router.navigate(['/boutiquier/dashboard']);
            } else {
              this.router.navigate(['/']);
            }
          }
        });
    }
  }
}
