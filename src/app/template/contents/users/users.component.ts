import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service.service';

export class UserLogin{
  constructor(
    public name: string,
    public username: string ){

    }
  }

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userLogins : UserLogin[] = [];
  userlogin : UserLogin = null;


  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('this is call');
    this.getDataUsers();
  }

  getDataUsers(){
    this.userService.callDataUsers().subscribe((data: string) =>{
      let metaData = JSON.stringify(data);
      let obj = JSON.parse(metaData);
      if(obj.status ===200){
        if(!(obj.datas === null)){
           for(let data of obj.datas){
               let user = new UserLogin(data.name,data.username);
               this.userLogins.push(user);
               console.log('username ' + user.name + 'size' + this.userLogins.length);
           }

        }

      }

    },
       (err) => {
        console.log(err);

    })
  }


}

