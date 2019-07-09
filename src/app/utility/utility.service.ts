import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  loadActionRole(menuName: string): Map<string, boolean> {
    let map = new Map();
    let metaData = sessionStorage.getItem(menuName);
    let arrayData = metaData.split(';');
    for (let data of arrayData) {
      let dataValue = data.split('=');
      let flag = this.converToBoolean(dataValue[1]);
      map.set(dataValue[0], flag);
    }
    return map;
  }

  loadJustListMenuName(): string[] {
    let metaData = this.loadListMenuAndUrl();
    let result = [];
    for (let a of metaData) {
      let data = a.split('=');
      result.push(data[0]);
    }
    return result;
  }

  loadListMenuAndUrl(): string[] {
    let metaData = sessionStorage.getItem('list-menu');
    return metaData.split(';');
  }

  converToBoolean(code:string){
    if(code ==='1'){
      return true;
    }else{
      return false;
    }
  }
}
