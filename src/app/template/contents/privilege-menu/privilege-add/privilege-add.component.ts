import { Component, OnInit } from '@angular/core';
import { PrivilegeService } from '../privilege.service';
import { Option, PrivilegeModel } from '../privilege-menu.component';
import { UtilityService } from 'src/app/utility/utility.service';
import { SwalUtil } from 'src/app/utility/swal-util.service';
import { Router } from '@angular/router';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';

const defaultA = 'Please select';
@Component({
  selector: 'app-privilege-add',
  templateUrl: './privilege-add.component.html',
  styleUrls: ['./privilege-add.component.css']
})
export class PrivilegeAddComponent implements OnInit {
  loading : boolean = false;
  model = {
    role_code : null,
    flagAdd : null,
    flagEdit : null,
    flagView : null,
    flagDelete : null
  };
  datas = [
    new Option('1','Yes'),
    new Option('0','No'),
  ]
  constructor(
    private privilegeService : PrivilegeService,
    private router : Router) { }

  ngOnInit() {
    this.model.flagAdd =  defaultA;
    this.model.flagEdit =  defaultA;
    this.model.flagView =  defaultA;
    this.model.flagDelete =  defaultA;

  }
  onSubmit(){
    this.loading = true;
    console.log('click here');
    let privilegeData = new PrivilegeModel('1',
    this.model.role_code,
    this.model.flagAdd,
    this.model.flagEdit,
    this.model.flagView,
    this.model.flagDelete
    );
    this.privilegeService.savePrivilege(privilegeData).subscribe(
      (data:string) => {
        let obj = UtilityService.convertStringToJSON(data);
         if(obj.status ===200 || obj.status ==='200'){
           this.loading = false;
           SwalUtil.AlertSucces();
           this.router.navigate(['contents/privileges']);
         }else {
          this.loading = false;
          SwalUtil.AlertError();
         }
      },
      (err) => {

      }
    );

  }



}
