import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-new-user-wrapper',
  templateUrl: './new-user-wrapper.component.html',
  styleUrls: ['./new-user-wrapper.component.scss'],
})
export class NewUserWrapperComponent {
  form!: FormGroup;
  isLoading: boolean = false;
  @Output() userCreated = new EventEmitter<void>();
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<NewUserWrapperComponent>
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(77|78|70|75|76)\d{7}$/),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      adress: new FormControl('', [Validators.required]),
    });
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

  get email() {
    return this.form.get('email') as FormControl;
  }

  get adress() {
    return this.form.get('adress') as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      const data = this.form.value;
      this.authService.create(`users`, data).subscribe((response) => {
        if (response) {
          this.isLoading = false;
          this.init()
          this.userCreated.emit();
        } else {
          this.isLoading = false;
        }
      });
    }
  }
}
