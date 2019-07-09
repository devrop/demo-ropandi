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
      }
    ]
  }
];

@NgModule({
  declarations: [StudentAddComponent, StudentEditComponent, WelcomeComponent, SimplePopUpComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TemplateModule { }
