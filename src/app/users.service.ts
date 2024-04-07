import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : any[] = [];

  addUser(name:string, salary:number, date:string) {
    this.users.push({
      id: this.users.length + 1,
      name: name,
      salary: salary,
      date: date
    })
  }
  editUser(name:string, salary:number, date:string, id:number) {
    this.users[id].name = name;
    this.users[id].salary = salary;
    this.users[id].date = date;
    console.log("service edit");
  }

  deleteUser(index:number){
    this.users.splice(index, 1);
  }
}
