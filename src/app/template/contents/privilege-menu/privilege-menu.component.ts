import { Component, OnInit } from '@angular/core';
import { PrivilegeService } from './privilege.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-privilege-menu',
  templateUrl: './privilege-menu.component.html',
  styleUrls: ['./privilege-menu.component.css']
})
export class PrivilegeMenuComponent implements OnInit {
  loading : boolean = true;
  privileges = [];
  constructor(private privilegeService: PrivilegeService,
    private router:Router) { }

  ngOnInit() {
    this.getDataPrivilege();
  }

  onDelete(idParam:string){
    console.log('id delete ' +idParam);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
         this.privilegeService.deletePrivilege(idParam).subscribe((data : string) =>{
          let metaData = JSON.stringify(data);
          let obj = JSON.parse(metaData);
           if(obj.status ===200 || obj.status ==='200'){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.privileges = [];
            this.getDataPrivilege();
           }else{
            Swal.fire(
              'Gagal delete',
              'terjadi kesalahan',
             'error'
            );
            this.privileges = [];
            this.getDataPrivilege();
           }
         },

      (err) => {
        Swal.fire(
          'Gagal delete',
          'terjadi kesalahan',
         'error'
        )
       console.log(err);

   }
         )
      }
    })

  }


  getDataPrivilege(){
    this.privilegeService.callData().subscribe(
      (data : string) =>{
      let metaData = JSON.stringify(data);
      let obj = JSON.parse(metaData);
      if(obj.status === 200){
        if(!(obj.datas === null)){
           for(let data1 of obj.datas){
               let privilege = new PrivilegeModel(
                 data1.id,
                 data1.role_code,
                 this.converToYesOrNo(data1.flag_add),
                 this.converToYesOrNo(data1.flag_edit),
                 this.converToYesOrNo(data1.flag_view),
                 this.converToYesOrNo(data1.flag_delete));
                 this.privileges.push(privilege);
           }

        }
        this.loading = false;
      }
      },
      (err) => {
       console.log(err);

   });

  }

  converToYesOrNo(value:string){
    if(value ==='1'){
      return "Yes";
    }else{
      return "No";
    }
  }
  onEdit(id:string){
     console.log('call id' + id)
     this.router.navigate(['contents/privilege/edit/',id]);
  }
}
export class PrivilegeModel{
  /*
  "id": "82ccf7e1-e3cb-4382-80cd-aac55b0a5353",
      "role_code": "admin",
      "flag_add": "1",
      "flag_edit": "1",
      "flag_view": "1",
      "flag_delete": "1"
  */
  constructor(
    public id :string,
    public role_code :string,
    public flag_add : string,
    public flag_edit : string,
    public flag_view : string,
    public flag_delete: string
  ) { }
}
export class Option{
  constructor(
    public id:string,
    public name:string
  )
  {

  }
 }
