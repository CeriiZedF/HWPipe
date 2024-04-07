import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.css'
})
export class UserListsComponent {
  name: string = '';
  salary: number = 0;
  date: any = '';
  users:any[] = [];
  constructor(private userService: UsersService){

  }
  ngOnInit(): void {
    this.users = this.userService.users;
    
  }
  

  isEdit:boolean = false;
  selected:number = 0;
  changeEditMode(index:number){
    this.isEdit = !this.isEdit;
    this.selected = index;

  }

  addUser() {
    this.userService.addUser(
      this.name,
      this.salary,
      this.date
    )
  }

  editUser() {
    this.userService.editUser(
      this.name,
      this.salary,
      this.date,
      this.selected
    )
    this.changeEditMode(this.selected);
  }

  deleteUser(index:number){
    this.userService.deleteUser(index)
  }
}
