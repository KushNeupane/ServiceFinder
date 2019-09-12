import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(serviceList: any, searchTerm: any): any {
    //check if searchTerm is undefined
    if(searchTerm==undefined || searchTerm == ""){
      return [];
    }
    else{
      //return updated search array
    return serviceList.filter(function(service){
      return service.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    }
    
  }
  whitespace(value: string, args?: any): string {
    return value.trim();
}
}
