import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth-service.service';
import { MatDialog } from '@angular/material';
import { SimplePopUpComponent } from '../template/layout/simple-pop-up/simple-pop-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  messageError = '';
  constructor(private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.model.username+' '+this.model.password)
    this.authService.callHttpSeverPost(this.model.username,this.model.password).subscribe(
      (data: string) => {
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        console.log('status : ' + obj.status)
        if(obj.status === 200){
          this.setAuthentication(obj);
          this.router.navigate(['contents']);
        }else if(obj.status === 404){
          this.onOpenDialog();
        }else {
          this.messageError ='Username atau Password Salah';
          this.loading = false;
        }

      }, (err) => {
        console.log(err);
        this.loading = false;
    }
      );
  }


  private setAuthentication(obj: any){
    let listMenu = '';
    for(let menu of obj.datas2.menus){
       let temp = menu.menu_name +'='+ menu.uri +';'; //
       listMenu = listMenu + temp;
       let roleName = menu.menu_name;
       let action = 'add='+menu.action_add+';'+ 'edit='+menu.action_edit+';'+'view='+menu.action_view+';'+'delete='+menu.action_delete;
       sessionStorage.setItem(roleName,action);
    }
    console.log(listMenu);
    sessionStorage.setItem('list-menu', listMenu);
    sessionStorage.setItem('token', obj.datas2.name);
  }

  onOpenDialog(){
    const dialogRef = this.dialog.open(SimplePopUpComponent, {
      width: '300px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }
}
