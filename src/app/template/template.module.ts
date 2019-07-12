import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { StudentsComponent } from './contents/students/students.component';
import { StudentAddComponent } from './contents/students/student-add/student-add.component';
import { StudentEditComponent } from './contents/students/student-edit/student-edit.component';
import { TemplateComponent } from './template.component';
import { WelcomeComponent } from './contents/welcome/welcome.component';
import { SimplePopUpComponent } from './layout/simple-pop-up/simple-pop-up.component';
import { UsersComponent } from './contents/users/users.component';
import { PrivilegeMenuComponent } from './contents/privilege-menu/privilege-menu.component';
import { PrivilegeAddComponent } from './contents/privilege-menu/privilege-add/privilege-add.component';
import { PrivilegeViewComponent } from './contents/privilege-menu/privilege-view/privilege-view.component';
import { PrivilegeEditComponent } from './contents/privilege-menu/privilege-edit/privilege-edit.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
  {
    path: 'contents',
    component: TemplateComponent,
    canActivate: [],
    children: [
      {
       path: '',
       component: WelcomeComponent
      },
      {
        path: 'student',
        component: StudentsComponent,

      },{
        path: 'student/edit/:id',
        component: StudentEditComponent
      },
      {
        path: 'student/view/:id',
        component: StudentEditComponent
      },
      {
        path: 'student/add',
        component: StudentAddComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'privileges',
        component: PrivilegeMenuComponent
      },
      {
        path: 'privilege/add',
        component: PrivilegeAddComponent
      },
      {
        path: 'privilege/edit/:id',
        component: PrivilegeEditComponent
      },
    ]
  }
];

@NgModule({
  declarations: [StudentAddComponent, StudentEditComponent, WelcomeComponent, SimplePopUpComponent, UsersComponent, PrivilegeMenuComponent, PrivilegeAddComponent, PrivilegeViewComponent, PrivilegeEditComponent],
  exports: [RouterModule],
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ]
})
export class TemplateModule { }
