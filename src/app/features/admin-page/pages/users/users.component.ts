import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { NewUserWrapperComponent } from '../../components/new-user-wrapper/new-user-wrapper.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  displayedColumns: string[] = ['Nom complet', 'email', 'role', 'actions'];
  dataSource = [];
  users$!: Observable<any[]>;
  totalUsers: number = 300;
  pageSizeOptions = [5, 10, 20, 50];
  pageSize = 5;
  pageIndex = 1;
  constructor(private usersService: UserService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getAllUsers(this.pageSize, this.pageIndex);
  }

  getAllUsers(limit: number, page: number) {
    this.usersService
      .readAllPaginate(`users?limit=${limit}&page=${page}`)
      .subscribe((response) => {
        this.users$ = of(response.data);
        this.totalUsers = response.total;
      });
  }

  onPageChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = _p.pageIndex + 1;
    this.getAllUsers(this.pageSize, this.pageIndex);
  }

  onPageSizeChange(_p: any) {
    this.pageSize = _p.pageSize;
    this.pageIndex = 1;
    this.getAllUsers(this.pageSize, this.pageIndex);
  }

  private openDialog(
    options = { width: '40vw', height: '73vh', minWidth: '400px' }
  ) {
    const dialogRef = this.dialog.open(NewUserWrapperComponent, {
      width: options.width,
      height: options.height,
      minWidth: options.minWidth,
    });
    dialogRef.componentInstance.userCreated.subscribe(() => {
      this.getAllUsers(this.pageSize, this.pageIndex);
    });

    return dialogRef;
  }

  addUsers() {
  this.openDialog();

  }
}
