import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusfilter'
})
export class StatusfilterPipe implements PipeTransform {
  args: any;

  dup:any=[{}]

 transform(value: any,args:any): any {
    debugger;
    // return value = this.args
    //              .map((item: { args: any; }) => item.args)
    //              .filter((value, index, self) => self.indexOf(value) === index)
//                  return value.map.filter(function(item:any){
//  return JSON.stringify(item).toLowerCase().includes(args.toLowerCase())})
//  dupfuntion(items: any,item:any)
  // {
    for(let i of args)  
      {
        this.dup=  this.args.map.filter((x: { status: any; }) => x.status === i.status);
      }
      return JSON.stringify(this.dup)
  };
  
  }


  // transform(value: any): any {
  //   debugger;
  //   var args2: any[][];
    
  //   return value.Find(function(){
  //     var i,j;
  //     for(i=0;i<value.length;i++)
  //     {
  //       for(j=0;j<args2.length;j++)
  //       {
  //         if(args2.includes(value))
  //         {
  //           continue;
  //         } 
  //         args2.unshift(value);
  //       } 
  //     }
  //     return JSON.stringify(value)
  //   })
  // };

  // transform(value: any): any {
  //   debugger;
  //   var args2: string | any[] =[];
    
  //   return value.Find(function(){
  //     var i,j;
  //     for(i=0;i<value.length;i++)
  //     {
  //       for(j=0;j<args2.length;j++)
  //       {
  //         if(args2.includes(value))
  //         {
  //           continue;
  //         } 
  //         args2=value;
  //       } 
  //     }
  //     return JSON.stringify(value)
  //   })
  // };
    // return function(value) {
    //   var i, c, txt = "";
    //   for (i = 0; i < x.length; i++) {
    //     c = x[i];
    //     if (i % 2 == 0) {
    //       c = c.toUpperCase();
    //     }
    //     txt += c;
    //   }
    //   return txt;
    
    //return value.some(value => value.status === 1991);
    // if (.isArray(values)) {
    //   $scope.isArray = true;
    // // return value.some(function(item:any){
    // //   return JSON.stringify(item).includes(args)
    // // })
      //return null;
  
//return value.filter(function(item:any){
 // return JSON.stringify(item).toLowerCase().includes(args.toLowerCase())