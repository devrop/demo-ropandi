import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility/utility.service';

export class SidebarMenu {

  constructor(
   public id: string,
   public  name: string,
   public  link: string){

    }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus =[];
  name ='';
  constructor(private utility: UtilityService) { }

  ngOnInit() {
    console.log('sidebar call');
     this.loadMenuSession();
     this.name = sessionStorage.getItem('token');
  }



  loadMenuSession(){
    let menusFromSession = this.utility.loadListMenuAndUrl();
    console.log('size : '+ menusFromSession.length)
    for(let menu of menusFromSession){
      let dataArray = menu.split('=');
      let id = dataArray[0]+dataArray[1];
      console.log(dataArray[1]);
        if(dataArray[1] === undefined){

        }else{
          let data = new SidebarMenu(id,dataArray[0], dataArray[1]);
          this.menus.push(data);
        }
    }



  }
}
