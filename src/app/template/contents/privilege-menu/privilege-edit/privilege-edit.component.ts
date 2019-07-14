import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivilegeModel, Option } from '../privilege-menu.component';
import { PrivilegeService } from '../privilege.service';
import swal  from 'sweetalert2';
import { UtilityService } from 'src/app/utility/utility.service';
import { SwalUtil } from 'src/app/utility/swal-util.service';


const defaultA = 'Please select';
const swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false,
})
@Component({
  selector: 'app-privilege-edit',
  templateUrl: './privilege-edit.component.html',
  styleUrls: ['./privilege-edit.component.css']
})
export class PrivilegeEditComponent implements OnInit {
  loading = false;
  model = {
    id : null,
    roleCode : null,
    flagAdd : null,
    flagEdit : null,
    flagView : null,
    flagDelete : null
  };


  selectedData = 'Select Item';
  name = 'ok';
  datas = [
    new Option('1','Yes'),
    new Option('0','No')
  ]
  constructor(private activeRouter: ActivatedRoute,
    private privilegeService : PrivilegeService,
    private router:Router
    ) { }

  ngOnInit() {
    let id = this.activeRouter.snapshot.params['id'];
    this.datas;
    this.onFindOneById(id);

  }


  setSelectedData(value:string){
    if (this.datas && value) {
      let status = this.datas.find(s => s.id == value);
      if (status)
        this.selectedData = status.name;
    }
    else{
    this.selectedData = 'Select Item';
  }
  }

  onFindOneById(idParam:string){
    this.privilegeService.findOneDataById(idParam).subscribe(
      (data:string) => {
        console.log('data ' + data);
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);

        console.log('=========================================================');
          if (obj.status == '200' || obj.status == 200) {
               for(let data of obj.datas2){
               this.model.id =  data.id;
               this.model.roleCode = data.role_code;
               this.model.flagAdd =  data.flag_add;
               this.model.flagEdit =  data.flag_edit;
               console.log(this.model.flagEdit);
               this.model.flagView =  data.flag_view;
               this.model.flagDelete =  data.flag_delete;
               }


          } else {

          }

      }, (err) => {

      }
    );
  }

  converToYesOrNo(value:string){
    if(value ==='1'){
      return 'Yes';
    }else{
      return 'No';
    }
  }

  onSubmit(){
    this.loading = true;
    console.log('click here');
    let privilegeData = new PrivilegeModel('1',
    this.model.roleCode,
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


