import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { finalize, Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  profileForm: FormGroup;
  userInfo: any;
  uploading: boolean = false;
  private unsubscribe$ = new Subject<void>();
  categories$ !: Observable<any[]>;
  preferences: string[] = []
  visible: boolean = false;
  constructor(private confirmationService: ConfirmationService, private authService: AuthService, private fb: FormBuilder, private messageService: MessageService) {
    this.profileForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {
    this.authService.userInfo$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(userInfo => {
        this.userInfo = userInfo;
        this.preferences = this.userInfo?.preferences ? this.userInfo?.preferences : [];
        this.setDefaultValues();
      });
  }

  setDefaultValues(): void {
    if (this.userInfo) {
      this.profileForm.patchValue({
        firstname: this.userInfo.firstname || '',
        lastname: this.userInfo.lastname || '',
        email: this.userInfo.email || '',
        phone: this.userInfo.phone || ''
      });
    }
  }


  onSubmit(event: any): void {
    if (this.profileForm.valid) {
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Voulez vous vraiment modifier vos informations?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Confirmer',
        rejectVisible: false,
        acceptButtonStyleClass: 'p-button-sm',
        accept: () => {
          this.authService.update('users', this.profileForm.value)
            .subscribe(
              response => {
                localStorage.setItem('user_info', JSON.stringify(response));
                this.unsubscribe$.next(response);
                this.messageService.add({ severity: 'success', summary: 'Confirmer', detail: 'Informations mises à jour.' });
              },
              error => {
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la modification.', life: 3000 });
              }
            );
        },
        reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la modification.', life: 3000 });
        }
      });

    }
  }

  onChangeProfilePhoto(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadProfilePhoto(file);
    }
  }

  uploadProfilePhoto(file: File): void {
    this.uploading = true;
    const formData = new FormData();
    formData.append('file', file);

    this.authService.uploadProfile(formData)
      .pipe(finalize(() => {
        this.fileInput.nativeElement.value = '';
      }))
      .subscribe(
        response => {
          this.userInfo = response;
          this.uploading = false;
        },
        error => {
          console.log(error)
          this.uploading = false;
        }
      );
  }



  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
