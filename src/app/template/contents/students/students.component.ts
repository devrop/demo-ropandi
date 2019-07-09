import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility/utility.service';
import { Router } from '@angular/router';

const menuName = 'Student';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  flagAdd: boolean = false;
  flagEdit: boolean = false;
  flagView: boolean = false;
  flagDelete: boolean = false;

  constructor(private utility: UtilityService,
    private router: Router) { }
  ngOnInit() {
      let privilege = this.utility.loadActionRole(menuName);
      this.flagAdd = privilege.get('add');
      this.flagEdit = privilege.get('edit');
      this.flagView = privilege.get('view');
      this.flagDelete = privilege.get('delete');
  }

  onClickAdd(){
    this.router.navigate(['contents/student/add']);
  }
  onClickEdit(){

  }
  onClickView(){

  }
  onClickDelete(){

  }

}
