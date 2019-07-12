import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrivilegeModel, Option } from '../privilege-menu.component';
import { PrivilegeService } from '../privilege.service';
import swal  from 'sweetalert2';


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
  model = {
    role_code : null,
    flagAdd : null,
    flagEdit : null,
    flagView : null,
    flagDelete : null
  };


  selectedData = 'Select Item';
  name = 'ok';
  datas = [
    new Option('1','Yes'),
    new Option('0','No'),
  ]
  constructor(private router: ActivatedRoute,
    private privilegeService : PrivilegeService
    ) { }

  ngOnInit() {
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });



    let id = this.router.snapshot.params['id'];
    console.log('id is ' + id);
    this.model.flagAdd =  defaultA;
    this.model.flagEdit =  defaultA;
    this.model.flagView =  defaultA;
    this.model.flagDelete =  defaultA;

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

  onSubmitPrivilege(){
    console.log('hasil ' + this.model.flagAdd);
    let privilegeData = new PrivilegeModel('1',
    this.model.role_code,
    this.model.flagAdd,
    this.model.flagEdit,
    this.model.flagView,
    this.model.flagDelete
    );


    /*

    swal({
      title: 'Information',
      text: 'Are you sure for save this data?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
  }).then(function (result) {
      if (result.value) {
         // Helpers.setLoading(true);
          //self.auditTrail.saveLog(menuAuditTrail, "Reject Content " + idNews);
          this.privilegeService.savePrivilege(privilegeData).subscribe((data:string) => {
            let metaData = JSON.stringify(data);
            let obj = JSON.parse(metaData);
              if (obj.status == '200' || obj.status == 200) {
                  swal({
                      title: 'Approve',
                      text: 'Your file has succes.',
                      type: 'success',
                  }).then(function (result) {
                    this.router.navigate(['contents/privileges']);
                  });
              } else {
                  swal({
                      title: 'Approve',
                      text: 'Failed reject.',
                      type: 'warning',
                  }).then(function (result: any) {
                    this.router.navigate(['contents/privileges']);
                  });
              }

          }, (err) => {

          });
      }
  });

*/
  }

}


