import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ReplaySubject, map } from 'rxjs';
import { Users } from './Users';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireBaseDataService {
  private currentUserSource = new ReplaySubject(1);

  currentUser$ = this.currentUserSource.asObservable();
  // headers: string[] | undefined;
  // config: { constructor: Function; toString(): string; toLocaleString(): string; 
  //   valueOf(): Object; hasOwnProperty(v: PropertyKey): boolean; 
  //   isPrototypeOf(v: Object): boolean; propertyIsEnumerable(v: PropertyKey): boolean; } | undefined;

  constructor(private http:HttpClient) { }
  dataItem:any=[
  ];
 
  accounts:any=[];
  leaves:any=[];
  city:string="";
  //connection:string="";
  jobtitle:string="";
  name:string="";
  leavetype:string="";

  loginValue ="false";

  getLeavesdata(){
    return this.http.get('https://angular2-e588d-default-rtdb.firebaseio.com/leaves.json').pipe(map((res:any)=>{
      const leavedata=[]
      for(const key in res){
        if(res.hasOwnProperty(key)){
          let data={'id':key, ...res[key]};
          leavedata.push(data);
        }
      }
      return leavedata;
    }));
  }

  postSignupdata(signupdata: any){
    return this.http.post('https://angular2-e588d-default-rtdb.firebaseio.com/Accounts.json',signupdata);
  }

 

  getLogIn(logInData: any) {

    return this.http.get('https://angular2-e588d-default-rtdb.firebaseio.com/Accounts.json')

      .pipe(

        map((res: any) => {

          for (const key in res) {

            if (res.hasOwnProperty(key)) {

              if (

                res[key].username === logInData.UserName &&

                res[key].password === logInData.Password

              ) {

                this.setCurrentUser({ id: key, ...res[key] });

                return { id: key, ...res[key] };

              }

            }

          }

        })

      );

  }

  setCurrentUser(userData: any) {

    let { password, ...otherDetails } = userData;

    localStorage.setItem("currentUser", JSON.stringify(otherDetails));

    this.currentUserSource.next(userData);

  }

  logout() {

    localStorage.removeItem("currentUser");

    this.currentUserSource.next(null);

  }


}
//   getHttpHandler() {
//     console.log('called');
//     this.http.get('https://angular2-e588d-default-rtdb.firebaseio.com/leaves.json')
//     .pipe(map((data:any) => {
//       const leaveLogs = [];
  
//       for(let key in data) {
//         if(data.hasOwnProperty(key)){
//          leaveLogs.push(data[key])
//         }
//       }
//       return leaveLogs;
//     }))
    
//     .subscribe(response => {
//       console.log(response);
//       this.dataItem=response;
//     });
  
//   }

//   getHttpHandlerTemp() {
//     console.log('called');
//     this.http.get('https://angular2-e588d-default-rtdb.firebaseio.com/leaves.json',{ observe: 'response' })
//   .subscribe(resp => {
//     // display its headers
//     const keys = resp.headers.keys();
//     this.headers = keys.map(key =>
//       `${key}: ${resp.headers.get(key)}`);

//     // access the body directly, which is typed as `Config`.
//     this.config = { ...resp.body! };
//   });
// }

// temdt:any=[];
//   // fetchArticles(leavetype : string,leaveDays : Number) {
//   //   this.http.post('https://angularproject-de035-default-rtdb.firebaseio.com//leave.json' , {
//   //     name:'Sample Name',
//   //     type: leavetype,
//   //     days: leaveDays
//   //   }).subscribe(x => {
//   //     console.log(x);
//   //   });
//   // }
//   accountGetHandler() {
//     return this.http.get('https://angular2-e588d-default-rtdb.firebaseio.com/Account.json',
//     { observe: 'response' }).subscribe(x=>{this.temdt=x;
//   console.log(this.temdt)});
//   }


  
  //  url = 'https://angular2-e588d-default-rtdb.firebaseio.com/leaves.json';
//   getUsersWithObservable(): Observable<Users[]> {
//     return this.http.get(this.url).pipe(
//         map(this.extractData),
//         catchError(this.handleErrorObservable)
//     )
// }
// private handleErrorObservable(error: any) {
//   console.error(error.message || error);
//   return throwError(error);
// }
// private extractData(res: any) {
//   let body = res;
//   return body;
// }
// postUsers()
// {

// }

// getUsers(){
//   return this.http.get(this.url).pipe(map(res=>{
//     this.leaves=res;
//     return this.leaves;
//   }))
// }

