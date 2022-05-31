import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'userSearchFilter'
})
export class UserSearchFilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // if(args.length()>3)
    // {
      return value.filter(function(item:any){
        return JSON.stringify(item).toLowerCase().includes(args.toLowerCase())
      })
    // }
  }

}
